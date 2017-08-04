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
     * @param {string} token - The token of the user.
     * @param {function} callback
     * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
     * @description Link account.
     */
    linkAccount: (token, callback) => {
        const insert = {token: token};

        Users.create(insert, (err, result) => {
            callback(err, result);
        });
    }
};