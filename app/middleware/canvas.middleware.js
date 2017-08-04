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
     * @description Check the arguments for add contact.
     */
    validateLinkAccountArgs: (req, res, next) => {
        Joi.validate({body: req.body}, ContactsValidationsSchema.linkAccount, {
            abortEarly: true,
            allowUnknown: false
        }, (err) => {
            if (err) return ValidationErrorHandler.handleError(err, res);

            next();
        });
    }
};