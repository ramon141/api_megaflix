
const { body } = require('express-validator');

module.exports = {
    workPostBody: [
        body('imdb_code')
            .isString().withMessage('O Código IMDB deve ser um texto de 9 ou 10 caracteres')
            .isLength({ min: 9 }).withMessage('O código IMDB deve possuir no mínimo 9 caracteres')
            .isLength({ min: 10 }).withMessage('O código IMDB deve possuir no máximo 10 caracteres')
            .custom(value => {
                if (!value.startsWith('tt'))
                    return Promise.reject('O código IMDB deve iniciar com "tt"');

                if (isNaN(parseInt(value.substring(2))))
                    return Promise.reject('A partir do segundo caracter todos os demais caracteres devem ser números');

                return true;
            })
    ]
};