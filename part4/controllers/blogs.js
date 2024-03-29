const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({}).populate('user')
    response.json(blogs)
})

blogsRouter.post('/', async (request, response, next) => {
    const body = request.body
    const user = request.user

    if (!user) {
        return response.status(400).json({ error: 'userId is required' })
    }

    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes,
        user: user.id
    })

    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    response.json(savedBlog)
})

blogsRouter.delete('/:id', async (request, response, next) => {
    const user = request.user
    const blog = await Blog.findById(request.params.id)
    if (!blog.user.id.toString() === user.id.toString()) {
        return response.status(401).json({ error: 'no authorization to delete' })
    } 

    try {
        await Blog.findByIdAndRemove(request.params.id)
    } catch(e) {
        next(e)
    }
    response.status(204).end()
})

blogsRouter.put('/:id', async(request, response, next) => {
    const body = request.body
    const blog = {
        likes:  body.likes
    }

    try {
        const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
        response.json(updatedBlog)
    } catch (error) {
        next(error)
    }
})

module.exports = blogsRouter
