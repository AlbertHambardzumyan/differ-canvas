"use strict";

const localEnv = _loadLocalEnv();
const env = process.env.NODE_ENV || 'development';


/**
 * @property {string} HOST
 * @property {string} PORT
 * @property {string} MONGODB_URL
 */
const config = {

    development: {
        HOST: localEnv.HOST || '188.166.63.248',
        PORT: localEnv.PORT || '9030',

        MONGODB_URL: localEnv.MONGODB_URL || 'mongodb://localhost:27017/differ-canvas'
    },

    test: {
        HOST: '127.0.0.1',
        PORT: '3000',

        MONGODB_URL: 'mongodb://localhost:27017/differ-canvas_test_integration'
    },

    production: {
        HOST: '127.0.0.1',
        PORT: '9010',

        MONGODB_URL: 'mongodb://localhost:27017/differ-canvas'
    }
};


module.exports = config[env];


/**
 * @type function
 * @returns {{}}
 * @private
 * @description Load .env.js file if such exists.
 */
function _loadLocalEnv() {
    let env = {};
    try {
        env = require('../../.env');
    } catch (e) {
        if (e instanceof Error && e.code === 'MODULE_NOT_FOUND')
            console.info('.env is not specified.');
        else
            throw e;
    }
    return env;
}