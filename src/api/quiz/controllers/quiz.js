'use strict';

/**
 * quiz controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::quiz.quiz', ({ strapi }) => ({
    async score(ctx) {
        ctx.body = await strapi
            .service("api::quiz.quiz")
            .score(ctx)
    }
}));
