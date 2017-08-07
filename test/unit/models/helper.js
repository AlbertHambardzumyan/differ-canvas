"use strict";

const mongoose = require('mongoose');


// database connection init, drop database.
before((done) => {
    mongoose.connect('mongodb://localhost/db-test', () => {
        mongoose.connection.db.dropDatabase(() => {
            done()
        });
    });
});

// database destroy connection.
after((done) => {
    mongoose.disconnect();
    done();
});