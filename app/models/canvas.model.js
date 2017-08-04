"use strict";

const request = require('request');

const endpoint = 'http://canvas.differ.chat';


module.exports = {

    /**
     * @type function
     * @access public
     * @param {string} token - The token of the user.
     * @param {function} callback
     * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
     * @description Fetch courses.
     */
    fetchCourses: (token, callback) => {
        const options = {
            url: `${endpoint}/api/v1/courses`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        request.get(options, (err, response, body) => {
            let results = [];
            if (!err) {
                results = JSON.parse(body);
            }
            callback(err, results);
        });
    }
};