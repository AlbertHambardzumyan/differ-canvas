"use strict";

const express = require('express');

const app = express();


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
