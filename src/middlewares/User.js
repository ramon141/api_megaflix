const User = require('../models/User');
const { body } = require('express-validator');

module.exports = {
    emailAndPassword: [
        body('email')
            .isEmail().withMessage('E-mail inválido'),

        body('password')
            .isLength({ min: 8 }).withMessage('A senha deve possuir no mínimo 8 caracteres')
            .isLength({ max: 255 }).withMessage('A senha não pode ter mais de 255 caracteres'),
    ],

    name: [
        body('name').isLength({ min: 3 }).withMessage('O nome deve possui pelo menos 3 letras '),
    ],

    emailIsNotExistsInDatabase: [
        body('email').custom(async (email) => {
            const user = await User.findByPk(email);

            if (!!user)
                return Promise.reject('O email já está cadastrado');
            return true;
        })
    ],

    userExists: async (req, res, next) => {
        const { email, password } = req.body;
        const user = await User.findByPk(email);

        if (!user)
            return res.status(401).json({
                errors: [{
                    value: '',
                    msg: 'Este e-mail não existe no sistema',
                    param: 'email',
                    location: 'body'
                }]
            });

        if (!(await User.validPassword(password, user.password)))
            return res.status(401).json({
                errors: [{
                    value: '',
                    msg: 'Usuário e/ou senha inválido(s)',
                    param: 'password',
                    location: 'body'
                }]
            });

        req.user = user;
        return next();
    }

};