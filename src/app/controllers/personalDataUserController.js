const express = require('express');
const router = express.Router();
const PersonalData = require('../models/personalData');

//Inserção dos dados do consultante
router.post('/', async (req, res) => {
    try {
        const user = await PersonalData.create(req.body);
        user.password = undefined;

        return res.send({ 
            user,
         });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

module.exports = app => app.use('/personalData', router);