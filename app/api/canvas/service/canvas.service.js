"use strict";

const async = require('async');

const models = require('../../../models/'),
    CanvasModel = models.Canvas,
    UsersModel = models.Users;

const SuccessHandler = require('../../../util/').SuccessHandler;


module.exports = {

    /**
     * @type function
     * @access public
     * @param req
     * @param res
     * @param next
     * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
     * @description Link account.
     */
    linkAccount: (req, res, next) => {
        const {userId} = req.body;
        const {token} = req.body;

        async.waterfall([
            (callback) => {
                UsersModel.linkAccount(userId, token, callback);
            }
        ], (err, result) => {
            if (err) next(err);
            else SuccessHandler.handleAdd(res, next, result);
        });
    },

    /**
     * @type function
     * @access public
     * @param req
     * @param res
     * @param next
     * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
     * @description Import.
     */
    import: (req, res, next) => {
        const {token} = req.body;

        async.waterfall([
            (callback) => {
                CanvasModel.fetchCourses(token, callback);
            },
            (courses, callback) => {
                UsersModel.saveCourses(courses, token, callback);
            }
        ], (err, result) => {
            if (err) next(err);
            else SuccessHandler.handleAdd(res, next, result);
        });
    },

    /**
     * @type function
     * @access public
     * @param req
     * @param res
     * @param next
     * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
     * @description Get courses.
     */
    getCourses: (req, res, next) => {
        const {token} = req.query;

        async.waterfall([
            (callback) => {
                UsersModel.getCourses(token, callback);
            }
        ], (err, result) => {
            if (err) next(err);
            else SuccessHandler.handleGet(res, next, result);
        });
    }
};