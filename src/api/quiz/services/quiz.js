'use strict';

/**
 * quiz service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::quiz.quiz', ({ strapi }) => ({
    async score(ctx) {
        const { id } = ctx.params
        console.log(id);
        return id
    }
}));
