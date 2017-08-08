"use strict";

const express = require("express");

const API_CONFIG = require("./config/api.config");
const SWAGGER_CONFIG = require('./config/swagger.config');

// require all APIs
const canvas = require("./canvas/canvas.api");

const router = express.Router();
const app = express();

const basePath = `/api/${API_CONFIG.API_VERSION}`;


/**
 * @description Initialize swagger.
 */
const APIs = ['./app/api/**/*.js'];
const swaggerSpec = SWAGGER_CONFIG.init(basePath, APIs);
app.get('/swagger.json', (req, res) => {
    res.json(swaggerSpec);
});

/**
 * @description Initialise routes.
 */
router.use(basePath, app);

/**
 * @description Add required APIs.
 */
app.use('/', canvas);


module.exports = router;
