"use strict";

const swaggerJSDoc = require('swagger-jsdoc');


const swaggerDefinition = {
    info: {
        title: 'Node.js Canvas Integration',
        version: '1.0.0',
        description: 'Node.js Canvas Integration API'
    }
};


module.exports = {

    /**
     * @type function
     * @access public
     * @param basePath
     * @param APIs
     * @returns {*}
     * @author Albert Hambardzumyan <hambardzumyan.albert@gmail.com>
     * @description Generate swaggerJSDoc.
     */
    init: (basePath, APIs) => {
        swaggerDefinition.basePath = basePath;

        const options = {
            swaggerDefinition: swaggerDefinition,
            apis: APIs
        };

        return swaggerJSDoc(options);
    }
};