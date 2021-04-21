const express = require('express');
const router = express.Router();
const normalizeQuestions = require('../services/resultsQuestionsService');
const QuestionsData = require('../models/questionsData');

//Retorno dos resultados
router.post('/', async (req, res) => {
    try {
        let questionsData = QuestionsData(req.body);
        let resultQuestions = normalizeQuestions(questionsData);

        return res.send({ 
            resultQuestions
         });
        
    } catch (err) {
        return res.status(400).send({ error: 'Return failed' });
    }
});

module.exports = app => app.use('/questions', router);