'use strict';

/**
 * quiz service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::quiz.quiz', ({ strapi }) => ({
    async score(ctx) {
        const { id } = ctx.params
        let userAnswers = ctx.request.body
        const quiz = await strapi.entityService.findOne("api::quiz.quiz", id, {
            populate: { questions: true }
        })

        let question
        let score = 0

        if (quiz) {
            userAnswers.map((ua) => {
                question = quiz.questions.find((q) => q.id === ua.questionId)
                if (question) {
                    
                    if (question.answer === ua.value) {
                        ua.correct = true;
                        score += 1;
                    } else {
                        ua.correct = false;
                    }

                    ua.correctValue = question.answer;
                }

                return ua;
            })

        }
        const questionCount = quiz.questions.length;
        delete quiz.questions;
        return { quiz, score, scoredAnswers: userAnswers, questionCount };
    }
}));
