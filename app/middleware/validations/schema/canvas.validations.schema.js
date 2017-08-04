"use strict";

/**
 * @description Joi validation:
 *  This JSDoc is used mainly for WebStorm.
 * @type {*}
 */
const Joi = require('joi');


module.exports = {

    /**
     * @description Link account args.
     */
    linkAccount: {
        body: {
            token: Joi.string().max(100).required()
        }
    },

    /**
     * @description Get courses args.
     */
    getCourses: {
        query: {
            token: Joi.string().max(100).required()
        }
    }
};