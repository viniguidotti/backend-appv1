module.exports = function (questions) {
    var processQuestionYes = 0;
    var complianceQuestionYes = 0;
    var technologyQuestionYes = 0;
    var processQuestionsTotal = 0;
    var complianceQuestionsTotal = 0;
    var technologyQuestionsTotal = 0;
    var listProcessQuestions = questions.processQuestions;
    var listComplianceQuestions = questions.complianceQuestions;
    var listTechnologyQuestions = questions.technologyQuestions;

    //

    for (let question in listProcessQuestions) {
        if (listProcessQuestions[question] == 'Yes') {
            processQuestionYes += 1;
        }
    }
    processQuestionsTotal = processQuestionYes * 100 / 8;

    //

    for (let question in listComplianceQuestions) {
        if (listComplianceQuestions[question] == 'Yes') {
            complianceQuestionYes += 1;
        }
    }
    complianceQuestionsTotal = complianceQuestionYes * 100 / 4;

    //

    for (let question in listTechnologyQuestions) {
        if (listTechnologyQuestions[question] == 'Yes') {
            technologyQuestionYes += 1;
        }
    }
    technologyQuestionsTotal = technologyQuestionYes * 100 / 4;
    
    return {
        processQuestionsTotal,
        complianceQuestionsTotal,
        technologyQuestionsTotal
    }

}