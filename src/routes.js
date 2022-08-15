const express = require('express');

//Controllers
const UserController = require('./controllers/UserController');
const WorkController = require('./controllers/WorkController');

//Validators
const UserValidator = require('./middlewares/User');
const WorkValidator = require('./middlewares/Work.js');

const routes = express.Router();

routes.post('/users',
    UserValidator.emailAndPassword,
    UserValidator.name,
    UserValidator.emailIsNotExistsInDatabase,
    UserController.store
);

routes.post('/login',
    UserValidator.emailAndPassword,
    UserValidator.userExists,
    UserController.login
);

routes.post('/works',
    WorkValidator.workPostBody,
    WorkController.store
);


module.exports = routes;