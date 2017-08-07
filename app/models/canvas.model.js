"use strict";

const request = require('request');

const endpoint = 'http://canvas.differ.chat';


module.exports = {

    /**
     * @type function
     * @access public
     * @param {string} token - The token of the user.
     * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
     * @description Fetch courses.
     */
    fetchCourses: (token) => {
        const options = {
            url: `${endpoint}/api/v1/courses`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        return new Promise((resolve, reject) => {
            request.get(options, (err, response, body) => {
                if (err) return reject(err);

                const result = JSON.parse(body);
                resolve(result);
            });
        });
    }
};