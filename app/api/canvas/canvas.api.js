"use strict";

const router = require('express').Router();

const CanvasMiddle = require('../../middleware/').Canvas;

const CanvasSVC = require('./service/canvas.service');


/**
 * @swagger
 * /link-account:
 *   post:
 *     description: Link account.
 *     operationId: linkAccount
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: linkAccount
 *         description: LinkAccount object that needs to be added.
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/AddLinkAccountArgs'
 *     responses:
 *       201:
 *         description: Successfully created.
 *       400:
 *         description: Invalid input
 *         schema:
 *           $ref: '#/definitions/ErrorResponse'
 *       409:
 *         description: Conflict.
 *         schema:
 *           $ref: '#/definitions/ErrorResponse'
 *       500:
 *         description: Internal error.
 *         schema:
 *           $ref: '#/definitions/ErrorResponse'
 */
router.post('/link-account',
    CanvasMiddle.validateLinkAccountArgs, (req, res, next) => {

        CanvasSVC.linkAccount(req, res, next);
    });


router.post('/import', (req, res, next) => {

    CanvasSVC.import(req, res, next);
});


router.get('/courses', (req, res, next) => {

    CanvasSVC.getCourses(req, res, next);
});


module.exports = router;


/**
 * @swagger
 * definitions:
 *
 *   AddLinkAccountArgs:
 *     type: object
 *     properties:
 *       token:
 *         type: string
 *         example: DP94K9btj2Tj67U9gUDoJc1XgZzgWkIUxgZuyj6wIv3BuaPuLF8dcBcNrmyWCT9z
 *
 *   ErrorResponse:
 *     type: object
 *     properties:
 *       errorStatus:
 *         type: integer
 *       errorCode:
 *         type: string
 *       errorMessage:
 *         type: string
 */