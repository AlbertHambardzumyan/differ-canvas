"use strict";


/**
 * @description Users schema.
 * @type {*}
 */
const Users = require('../database/schema/').Users;


module.exports = {

    /**
     * @type function
     * @access public
     * @param {number} userId - The id of the user.
     * @param {string} token - The token of the user.
     * @param {function} callback
     * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
     * @description Link account.
     */
    linkAccount: (userId, token, callback) => {
        const insert = {userId: userId, token: token};

        Users.create(insert, (err, result) => {
            callback(err, result);
        });
    },

    /**
     * @type function
     * @access public
     * @param {string} token - The token of the user.
     * @param {function} callback
     * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
     * @description Get courses.
     */
    getCourses: (token, callback) => {
        const query = {token: token},
            projection = {courses: 1, _id: 0};

        Users.find(query, projection, (err, result) => {
            callback(err, result);
        });
    },

    /**
     * @type function
     * @access public
     * @param {[*]} courses - The courses of the user.
     * @param {string} token - The token of the user.
     * @param {function} callback
     * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
     * @description Save courses.
     */
    saveCourses: (courses, token, callback) => {
        const query = {token: token},
            update = {
                $set: {courses: courses}
            },
            options = {new: true};

        Users.findOneAndUpdate(query, update, options, (err, result) => {
            callback(err, result);
        });
    }
};