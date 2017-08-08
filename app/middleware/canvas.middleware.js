"use strict";

/**
 * @description Joi validation:
 *  This JSDoc is used mainly for WebStorm.
 * @type {*}
 */
const Joi = require('joi');

const CanvasValidationsSchema = require('./validations/schema/canvas.validations.schema');

const ValidationErrorHandler = require('../util/validation-error-handler.util');


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
        Joi.validate({body: req.body}, CanvasValidationsSchema.linkAccount, {
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
     * @description Check the arguments for import.
     */
    validateImportArgs: (req, res, next) => {
        Joi.validate({body: req.body}, CanvasValidationsSchema.import, {
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
        Joi.validate({query: req.query}, CanvasValidationsSchema.getCourses, {
            abortEarly: true,
            allowUnknown: false
        }, (err) => {
            if (err) return ValidationErrorHandler.handleError(err, res);

            next();
        });
    }
};