const bcrypt = require('bcrypt')
const supertest = require('supertest')
const User = require('../models/user')
const app = require('../index')
const helpers = require('./test_helper')


const api = supertest(app)


describe('when there is initially one user in db', () => {
    beforeEach(async () => {
        await User.deleteMany({})

        const passwordHash = await bcrypt.hash('sekret', 10)
        const user = new User({ username: 'admin', passwordHash })

        await user.save()
    })

    test('creation succeeds with a fresh username', async () => {
        // const usersAtStart = await helpers.usersInDb()

        const newUser = {
            username: 'mluukkai',
            name: 'Matti Luukkainen',
            password: 'salainen'
        }

        await api.post('/api/users')
            .send(newUser)
            .expect(201)
            .expect('Content-Type', /application\/json/)

    })

    test('creation fails with proper statuscode and message if username already token', async() => {
        const usersAtStart = await helpers.usersInDb()

        const newUser = {
            username: 'admin',
            name: 'Superuser',
            password: 'salalinen'
        }

        const result = await api.post('/api/users')
            .send(newUser)
            .expect(400)
            .expect('Content-Type', /application\/json/)

        expect(result.body.error).toContain('expected `username` to be unique')

        const usersAtEnd = await helpers.usersInDb()
        expect(usersAtEnd).toEqual(usersAtStart)
    })

})
