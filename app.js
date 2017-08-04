"use strict";

const path = require('path');

const express = require('express');

const config = require('./app/config/').Config;

const database = require('./app/database/').Database;

const api = require('./app/api/api');

const app = express();


/**
 * @description Serve static files.
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * @description Initialize database.
 */
database.init(config.MONGODB_URL);

/**
 * @description Initialize api
 */
app.use('/', api);

/**
 * @description Catch 404 and forward to error handler.
 */
app.use((req, res, next) => {
    let err = new Error('NOT_FOUND');
    err.status = 404;
    next(err);
});

/**
 * @description Error handler (middleware).
 */
app.use(function (err, req, res, next) {
    res.status(err.status || 500).json(err);
});


module.exports = app;
