"use strict";

const debug = require('debug')('differ-canvas:database');

const mongoose = require('mongoose');


module.exports = {

    /**
     * @type function
     * @access public
     * @param MONGODB_URL
     * @description Initialize Mongoose connection.
     */
    init: (MONGODB_URL) => {
        const options = {
            reconnectTries: Number.MAX_VALUE,
            connectTimeoutMS: 30000,
            useMongoClient: true
        };
        mongoose.connect(MONGODB_URL, options);

        // When successfully connected
        mongoose.connection.on('connected', () => {
            debug(`Mongoose connection open to: ${MONGODB_URL}.`);
        });
        // If the connection throws an error
        mongoose.connection.on('error', (err) => {
            debug(`Mongoose connection error: ${err}.`);
        });
        // When the connection is disconnected
        mongoose.connection.on('disconnected', () => {
            debug('Mongoose connection disconnected.');
        });
    },

    /**
     * @type function
     * @access public
     * @description Destroy Mongoose connection.
     */
    destroy: () => {
        mongoose.disconnect(() => {
            debug('Mongoose connection disconnected through app termination.');
        });
    }
};