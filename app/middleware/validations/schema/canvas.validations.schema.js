"use strict";

/**
 * @description Joi validation:
 *  This JSDoc is used mainly for WebStorm.
 * @type {*}
 */
const Joi = require('joi');


module.exports = {

    /**
     * @description link account args.
     */
    linkAccount: {
        body: {
            token: Joi.string().max(100).required()
        }
    }
};