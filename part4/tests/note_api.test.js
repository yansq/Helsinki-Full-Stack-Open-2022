const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../index')

const api = supertest(app)

test('blogs are returned as json', async () => {
    await api.get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
}, 100000)

test('there are one blogs', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(1)
})

test ('the unique identifier property is _id', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body.map(b => b._id)).toBeDefined()
})

test('the first blog is about HTTP methods', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].content).toBe('HTML is easy')
}, 100000)

test('if adding blogs successful', async () => {
    const response1 = await api.get('/api/blogs')
    const length = response1.body.length
    const response2 = await api.post('/api/blogs')
        .send({
            title: 'test',
            author: 'test W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
        })
    expect(response2.body).toBeDefined
    const response3 = await api.get('/api/blogs')
    expect(response3.body).toHaveLength(length + 1)
})

afterAll(async () => {
    await mongoose.connection.close()
})
