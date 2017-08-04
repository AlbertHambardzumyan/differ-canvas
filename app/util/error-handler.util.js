"use strict";


module.exports = {

    /**
     * @type function
     * @access public
     * @returns {function(*, *, *, *)}
     * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
     * @description Error handler.
     */
    handleError: () => {

        return (err, req, res, next) => {
            let statusCode,
                errorCode,
                errorMessage;

            switch (err.code || err.message) {

                // Mongodb errors
                case 11000:
                    statusCode = 409;
                    errorCode = 'ResourceAlreadyExists';
                    errorMessage = 'The specified resource already exists.';
                    break;

                // Custom errors (used err.message)
                case 'NOT_FOUND':
                    statusCode = 404;
                    errorCode = 'ResourceNotFound';
                    errorMessage = 'The specified resource does not exist.';
                    break;

                default:
                    statusCode = 500;
                    errorCode = 'InternalError';
                    errorMessage = 'The server encountered an internal error.';
            }

            let error = new Error(errorMessage);
            error.statusCode = statusCode;
            error.errorCode = errorCode;
            error.errorMessage = errorMessage;

            // temp. log to explore and add more cases.
            error.statusCode === 500 && console.info("Case: ", err.status, err.statusCode, err.code, err.name, err.message);


            res.status(error.statusCode).json(error);
        }
    }
};