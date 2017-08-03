"use strict";

const router = require('express').Router();

const CanvasSVC = require('./service/canvas.service');


router.post('/link-account', (req, res, next) => {

    CanvasSVC.linkAccount(req, res, next);
});

router.post('/import', (req, res, next) => {

    CanvasSVC.import(req, res, next);
});

router.get('/courses', (req, res, next) => {

    CanvasSVC.getCourses(req, res, next);
});


module.exports = router;
