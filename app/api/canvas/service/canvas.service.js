"use strict";

const CanvasModel = require('../../../models/canvas.model');
const UsersModel = require('../../../models/users.model');

const SuccessHandler = require('../../../util/success-handler.util');


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

        UsersModel.linkAccount(userId, token)
            .then((result) => {
                SuccessHandler.handleAdd(res, next, result);
            })
            .catch((err) => {
                next(err);
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

        CanvasModel.fetchCourses(token)
            .then((courses) => {
                return UsersModel.saveCourses(courses, token);
            })
            .then((result) => {
                SuccessHandler.handleAdd(res, next, result);
            })
            .catch((err) => {
                next(err);
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

        UsersModel.getCourses(token)
            .then((result) => {
                SuccessHandler.handleGet(res, next, result);
            })
            .catch((err) => {
                next(err);
            });
    }
};