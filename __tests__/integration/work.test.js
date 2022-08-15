const request = require('supertest');
const app = require('../../src/app');

const { faker } = require('@faker-js/faker')
const connection = require('../../src/database/index');
const Work = require('../../src/models/Work');

const age_group = [0, 10, 12, 14, 16, 18];

const fakeWork = {
    imdb_code: `tt${faker.random.numeric(7)}`,
    name: faker.name.fullName(),
    release_year: faker.date.between('01-01-1950', new Date()).getFullYear(),
    age_group: age_group[Math.round(Math.random() * (age_group.length - 1))],
    imdb_review: Math.round() * 10
};

describe('Work', () => {

    beforeAll(async () => {
        await connection.truncate({ cascade: true })
        Work.init(connection);
    });

    //post - criar um objeto
    //put - atualizar informaçoes de um objeto já existente
    //get - obter dados
    //delete - deletar objetos
    //patch - atualiza parcialmente um objeto

    it('should create a work', async () => {

        console.log(fakeWork)

        const response = await request(app)
            .post('/works')
            .send(fakeWork);

        console.log(Work)

        const work = await Work.findByPk(fakeWork.imdb_code);

        expect(work).toBeDefined()
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('imdb_code');
        expect(response.body).toHaveProperty('name');
    });

    afterAll(() => connection.close())

});