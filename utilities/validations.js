const Joi = require("joi");

const validations = {
    validateGetQuestionRequest: function (request) {
        const schema = Joi.object({
            questionId: Joi.number().min(1),
            answer: Joi.number().min(1)
        });

        return schema.validate(request);
    },
    validateGetTaxRequest: function (request) {
        const schema = Joi.object({
            questionId: Joi.number().min(1).required(),
            answer: Joi.number().min(1).required()
        });

        return schema.validate(request);
    }
}

module.exports = {
    validations
}