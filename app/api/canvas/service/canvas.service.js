"use strict";


module.exports = {

    /**
     * @type function
     * @access public
     * @param req
     * @param res
     * @param next
     * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
     * @description Link account.
     */
    linkAccount: (req, res, next) => {
        const token = req.body['token'];

        res.json('TBA');
    },

    /**
     * @type function
     * @access public
     * @param req
     * @param res
     * @param next
     * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
     * @description Import.
     */
    import: (req, res, next) => {
        const token = req.body['token']; // TODO check for query vs body. Requirement was query.

        res.json('TBA');
    },

    /**
     * @type function
     * @access public
     * @param req
     * @param res
     * @param next
     * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
     * @description Get courses.
     */
    getCourses: (req, res, next) => {
        const token = req.query['token'];

        res.json('TBA');
    }
};