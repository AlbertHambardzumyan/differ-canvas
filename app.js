"use strict";

const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');

const config = require('./app/config/').Config;

const ErrorHandler = require('./app/util/').ErrorHandler;

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
 * @description Middleware - body parser:
 * 1. Parses the text as URL encoded data.
 * 2. Parses the text as JSON & exposes the resulting object on req.body.
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

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
app.use(ErrorHandler.handleError());


module.exports = app;
