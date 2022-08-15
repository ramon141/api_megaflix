const User = require('../models/User');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

const generateToken = (email) => {
    return jwt.sign({ email }, authConfig.secret, {
        expiresIn: 24 * 60 * 60
    });
}

module.exports = {
    async store(req, res) {
        //Checando erros
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(401).json({ errors: errors.array() });


        const { email, name, password } = req.body;
        const user = await User.create({
            email,
            name,
            password
        });

        user.password = undefined;

        return res.json({
            ...user.dataValues,
            token: generateToken(user.email)
        });
    },

    async login(req, res) {
        //Checando erros
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(401).json({ errors: errors.array() });


        const user = req.user;
        user.password = undefined;

        return res.json({
            ...user.dataValues,
            token: generateToken(user.email)
        });
    }
}