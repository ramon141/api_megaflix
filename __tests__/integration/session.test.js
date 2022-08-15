const request = require('supertest');
const app = require('../../src/app');

const { faker } = require('@faker-js/faker');
const jwt = require('jsonwebtoken');
const authConfig = require('../../src/config/auth.json');
const connection = require('../../src/database/index');
const User = require('../../src/models/User');
const bcrypt = require('bcrypt');

const fakeUser = {
    email: faker.internet.email(),
    name: faker.name.firstName(),
    password: faker.internet.password()
};

describe('Authentication', () => {

    beforeAll(async () => {
        await connection.truncate({ cascade: true });
        User.init(connection);
    });

    it('should autenticate with valid credentials', async () => {
        const user = await User.create(fakeUser);

        const response = await request(app)
            .post('/login')
            .send(fakeUser);

        const emailJWTResponse = jwt.verify(response.body.token, authConfig.secret).email;

        expect(response.statusCode).toBe(200);
        expect(emailJWTResponse).toBe(fakeUser.email);
        expect((await bcrypt.compare(fakeUser.password, user.password))).toBe(true);
    });

    it('should not autenticate with invalid password', async () => {
        const response = await request(app)
            .post('/login')
            .send({
                ...fakeUser,
                password: faker.internet.password()
            });

        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('errors');
        expect(response.body.errors[0].param).toBe('password');
    });

    it('should not autenticate with invalid email', async () => {
        const response = await request(app)
            .post('/login')
            .send({
                ...fakeUser,
                email: faker.internet.email()
            });

        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('errors');
        expect(response.body.errors[0].param).toBe('email');
    });

    // afterAll(() => connection.close())

});


