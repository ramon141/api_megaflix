require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const test = {
    dialect: process.env.DIALECT || 'sqlite',
    storage: './__tests__/database.sqlite',
    logging: false,
    define: {
        timestamps: true,
    }
};

const production = {
    dialect: process.env.DIALECT || 'mysql',
    host: process.env.BD_HOST,
    username: process.env.BD_USERNAME,
    database: process.env.BD_NAME,
    password: process.env.BD_PASSWORD
}

module.exports = (process.env.NODE_ENV === 'test') ? test : production;