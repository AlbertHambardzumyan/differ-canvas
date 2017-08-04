"use strict";

const async = require('async');

const UsersModel = require('../../../models/').Users;


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
        const token = req.body['token'];

        async.waterfall([
            (callback) => {
                UsersModel.linkAccount(token, callback);
            }
        ], (err, result) => {
            if (err) next(err); //TODO resolve success
            else res.json(result);
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
        const token = req.body['token']; // TODO check for query vs body. Requirement was query.

        res.json('TBA');
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
        const token = req.query['token'];

        res.json('TBA');
    }
};