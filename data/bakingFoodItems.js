const bakingFoodItemsQuestions = [
    {
        questionId: 1, question: "Is this food item used for banking considered a candy?",
        options: [{ value: 0, option: "No", isAQuestion: true }, { value: 1, option: "Yes", isAQuestion: true }],

    },
    {
        questionId: 2, question: "Choose the type of item used for baking",
        options: [
            { value: 1, option: "Baking powder", taxp: 1 },
            { value: 2, option: "Baking soda", taxp: 1.5 },
            { value: 3, option: "Cocoa powder", taxp: 1.5 },
            { value: 4, option: "Flour", taxp: 1 },
            { value: 5, option: "Nuts", isAQuestion: true },
        ],
        parentQuestionId: 1, parentAnswerValue: 0
    },
    {
        questionId: 3, question: "Is candy sweetended?",
        options: [{ value: 0, option: "No", taxp: 1 }, { value: 1, option: "Yes", isAQuestion: true }],
        parentQuestionId: 1, parentAnswerValue: 1
    },
    {
        questionId: 4, question: "Choose the type of candy",
        options: [
            { value: 1, option: "Marshmallow", taxp: 2 },
            { value: 2, option: "Durable Items", taxp: 2.5 },
            { value: 3, option: "Sprinkles or chocolate morsle", taxp: 3 }
        ],
        parentQuestionId: 3, parentAnswerValue: 1
    },
    {
        questionId: 5, question: "Choose size",
        options: [
            { value: 0, option: "< 2 oz", taxp: 4 },
            { value: 1, option: ">=2 oz", taxp: 5 },
        ],
        parentQuestionId: 2, parentAnswerValue: 5
    },
];

module.exports = {
    bakingFoodItemsQuestions
}