"use strict";

const express = require("express");

const API_CONFIG = require("./config/api.config");

// require all APIs
const canvas = require("./canvas/canvas.api");

const router = express.Router(),
    app = express();

const basePath = `/api/${API_CONFIG.API_VERSION}`;


/**
 * @description Initialise routes.
 */
router.use(basePath, app);

/**
 * @description Add required APIs.
 */
app.use('/', canvas);


module.exports = router;
