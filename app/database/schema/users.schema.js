"use strict";

const mongoose = require('mongoose'),
    mongooseHidden = require('mongoose-hidden')();

/**
 * @description Define the schema for our Users model.
 */
const Users = new mongoose.Schema({
    userId: {type: Number, unique: true, require: true},
    token: {type: String, unique: true, require: true},
    courses: {type: Array, default: []}
});


/**
 * @description Hide few properties.
 */
Users.plugin(mongooseHidden, {defaultHidden: {index: true, __v: true}});

/**
 * @description Create the model for Users and expose it to our app.
 */
module.exports = mongoose.model('Users', Users);