const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs)
})

blogsRouter.post('/', (request, response, next) => {
    const blog = new Blog(request.body)
    blog.save()
        .then(result => response.status(201).json(result))
        .catch(error => next(error))
})

blogsRouter.delete('/:id', async (request, response, next) => {
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
