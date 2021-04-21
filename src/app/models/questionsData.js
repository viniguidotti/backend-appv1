const mongoose = require('../../database')

const QuestionsSchema = new mongoose.Schema({
    processQuestions: {
        question1: {
            type: String,
            required: true
        },
        question2: {
            type: String,
            required: true
        },
        question3: {
            type: String,
            required: true
        },
        question4: {
            type: String,
            required: true
        },
        question5: {
            type: String,
            required: true
        },
        question6: {
            type: String,
            required: true
        },
        question7: {
            type: String,
            required: true
        },
        question8: {
            type: String,
            required: true
        }
    },
    complianceQuestions: {
        question1: {
            type: String,
            required: true
        },
        question2: {
            type: String,
            required: true
        },
        question3: {
            type: String,
            required: true
        },
        question4: {
            type: String,
            required: true
        }
    },
    technologyQuestions: {
        question1: {
            type: String,
            required: true
        },
        question2: {
            type: String,
            required: true
        },
        question3: {
            type: String,
            required: true
        },
        question4: {
            type: String,
            required: true
        },
    }
});

const QuestionsData = mongoose.model('QuestionsData', QuestionsSchema);

module.exports = QuestionsData;