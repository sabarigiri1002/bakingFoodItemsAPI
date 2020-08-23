const bakingFoodItemsQuestions = [
    {
        questionId: 1, question: "Is this food item used for banking considered a candy?",
        options: [{ value: 1, option: "No", isAQuestion: true }, { value: 2, option: "Yes", isAQuestion: true }],

    },
    {
        questionId: 2, question: "Choose the type of item used for baking",
        options: [
            { value: 3, option: "Baking powder", taxp: 1 },
            { value: 4, option: "Baking soda", taxp: 1.5 },
            { value: 5, option: "Cocoa powder", taxp: 1.5 },
            { value: 6, option: "Flour", taxp: 1 },
            { value: 7, option: "Nuts", isAQuestion: true },
        ],
        parentQuestionId: 1, parentAnswerValue: 1
    },
    {
        questionId: 3, question: "Is candy sweetended?",
        options: [{ value: 8, option: "No", taxp: 1 }, { value: 9, option: "Yes", isAQuestion: true }],
        parentQuestionId: 1, parentAnswerValue: 2
    },
    {
        questionId: 4, question: "Choose the type of candy",
        options: [
            { value: 10, option: "Marshmallow", taxp: 2 },
            { value: 11, option: "Durable Items", taxp: 2.5 },
            { value: 12, option: "Sprinkles or chocolate morsle", taxp: 3 }
        ],
        parentQuestionId: 3, parentAnswerValue: 9
    },
    {
        questionId: 5, question: "Choose size",
        options: [
            { value: 13, option: "< 2 oz", taxp: 4 },
            { value: 14, option: ">=2 oz", taxp: 5 },
        ],
        parentQuestionId: 2, parentAnswerValue: 7
    },
];

module.exports = {
    bakingFoodItemsQuestions
}