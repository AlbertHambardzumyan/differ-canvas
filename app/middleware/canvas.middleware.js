"use strict";

/**
 * @description Joi validation:
 *  This JSDoc is used mainly for WebStorm.
 * @type {*}
 */
const Joi = require('joi');

const ContactsValidationsSchema = require('./validations/').CanvasValidationsSchema;

const ValidationErrorHandler = require('../util/').ValidationErrorHandler;


module.exports = {

    /**
     * @type function
     * @access public
     * @param req
     * @param res
     * @param next
     * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
     * @description Check the arguments for link account.
     */
    validateLinkAccountArgs: (req, res, next) => {
        Joi.validate({body: req.body}, ContactsValidationsSchema.linkAccount, {
            abortEarly: true,
            allowUnknown: false
        }, (err) => {
            if (err) return ValidationErrorHandler.handleError(err, res);

            next();
        });
    },

    /**
     * @type function
     * @access public
     * @param req
     * @param res
     * @param next
     * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
     * @description Check the arguments for get courses.
     */
    validateGetCoursesArgs: (req, res, next) => {
        Joi.validate({query: req.query}, ContactsValidationsSchema.getCourses, {
            abortEarly: true,
            allowUnknown: false
        }, (err) => {
            if (err) return ValidationErrorHandler.handleError(err, res);

            next();
        });
    }
};