"use strict";

const HTTP_CODE_CONSTANTS = {
    SUCCESS_200: {STATUS: 200, MESSAGE: 'OK'},
    SUCCESS_201: {STATUS: 201, MESSAGE: 'Created'},
    SUCCESS_204: {STATUS: 204}
};

let SuccessHandler = {};


/**
 * @type function
 * @access public
 * @param res
 * @param next
 * @param result
 * @returns {*}
 * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
 * @description Handle `get` type requests.
 */
SuccessHandler.handleGet = (res, next, result) => {
    const object = result && result[0];
    if (!object)
        return next(new Error('NOT_FOUND'));

    res.json(object);
};


/**
 * @type function
 * @access public
 * @param res
 * @param next
 * @param result
 * @returns {*}
 * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
 * @description Handle `add` type requests.
 */
SuccessHandler.handleAdd = (res, next, result) => {
    if (!result)
        return _sendResponse(res, HTTP_CODE_CONSTANTS.SUCCESS_204);

    _sendResponse(res, HTTP_CODE_CONSTANTS.SUCCESS_201);
};


/**
 * @type function
 * @access public
 * @param res
 * @param next
 * @param result
 * @returns {*}
 * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
 * @description Handle `update` type requests.
 */
SuccessHandler.handleUpdate = (res, next, result) => {
    if (!result)
        return _sendResponse(res, HTTP_CODE_CONSTANTS.SUCCESS_204);

    _sendResponse(res, HTTP_CODE_CONSTANTS.SUCCESS_200);
};


module.exports = SuccessHandler;


/**
 * @type function
 * @param res
 * @param code
 * @param data
 * @private
 * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
 * @description Sends response with given HTTP code constant.
 */
function _sendResponse(res, code, data) {
    if (code.STATUS === 204)
        res.status(code.STATUS).json();
    else {
        let response = {
            status: code.STATUS,
            message: code.MESSAGE
        };
        if (data) response.data = data;

        res.status(code.STATUS).json(response);
    }
}