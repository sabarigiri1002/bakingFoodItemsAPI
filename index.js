const { validations } = require("./utilities/validations");
const { responseMessages, statusCode } = require("./utilities/constants");
const { bakingFoodItemsQuestions } = require("./data/bakingFoodItems")


const express = require("express");
const app = express();

app.use(express.json());



app.post("/api/v1/bakingFoodItems/getQuestion/", (req, res) => {
    const { error } = validations.validateGetQuestionRequest(req.body);
    let responseData = {
        status: false,
        data: [],
    }
    if (error) {
        responseData.message = error.message;
        res.status(statusCode.DATA_ERROR_CODE).send(responseData);
        return false;
    }
    const { questionId, answer } = req.body;
    const responseQuestion = bakingFoodItemsQuestions.filter((row) => (row.parentQuestionId == questionId && row.parentAnswerValue == answer));
    if (responseQuestion.length > 0) {
        responseData.message = responseMessages.recordFound;
        responseData.data = responseQuestion[0];
    } else {
        responseData.message = responseMessages.noRecordFound;
    }
    responseData.status = true;
    res.status(statusCode.SUCCESS_CODE).send(responseData);
});

app.post("/api/v1/bakingFoodItems/getTax/", (req, res) => {
    const { error } = validations.validateGetTaxRequest(req.body);
    let responseData = {
        status: false,
        data: [],
    }
    if (error) {
        responseData.message = error.message;
        res.status(statusCode.DATA_ERROR_CODE).send(responseData);
        return false;
    }
    const { questionId, answer } = req.body;
    const responseQuestion = bakingFoodItemsQuestions.filter((row) => (row.questionId == questionId));
    if (responseQuestion.length > 0) {
        responseData.message = responseMessages.recordFound;
        const taxData = responseQuestion[0].options.filter((row) => row.value == answer);
        if (taxData.length > 0) {
            responseData.data = taxData[0];
        } else {
            responseData.message = responseMessages.noRecordFound;
        }
    } else {
        responseData.message = responseMessages.noRecordFound;
    }
    responseData.status = true;
    res.status(statusCode.SUCCESS_CODE).send(responseData);
});

app.listen(5000, () => console.log("API running in 5000..."));

