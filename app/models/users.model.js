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
     * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
     * @description Link account.
     */
    linkAccount: (userId, token) => {
        const insert = {userId: userId, token: token};

        return new Promise((resolve, reject) => {
            Users.create(insert, (err, result) => {
                if (err) return reject(err);

                resolve(result);
            });
        });
    },

    /**
     * @type function
     * @access public
     * @param {string} token - The token of the user.
     * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
     * @description Get courses.
     */
    getCourses: (token) => {
        const query = {token: token},
            projection = {courses: 1, _id: 0};

        return new Promise((resolve, reject) => {
            Users.find(query, projection, (err, result) => {
                if (err) return reject(err);

                resolve(result);
            });
        });
    },

    /**
     * @type function
     * @access public
     * @param {[*]} courses - The courses of the user.
     * @param {string} token - The token of the user.
     * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
     * @description Save courses.
     */
    saveCourses: (courses, token) => {
        const query = {token: token},
            update = {
                $set: {courses: courses}
            },
            options = {new: true};

        return new Promise((resolve, reject) => {
            Users.findOneAndUpdate(query, update, options, (err, result) => {
                if (err) return reject(err);

                resolve(result);
            });
        });
    }
};