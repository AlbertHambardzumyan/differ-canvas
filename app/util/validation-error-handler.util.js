"use strict";


module.exports = {

    /**
     * @type function
     * @access public
     * @param err
     * @param res
     * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
     * @description Validation error handler.
     */
    handleError: (err, res) => {
        res.status(400).json({
            statusCode: 400,
            errorCode: 'InvalidInput',
            errorMessage: err && err.details && err.details[0] && err.details[0].message
        });
    }
};