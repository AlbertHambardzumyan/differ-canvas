"use strict";

const mongoose = require('mongoose');

global.token = 'DP94K9btj2Tj67U9gUDoJc1XgZzgWkIUxgZuyj6wIv3BuaPuLF8dcBcNrmyWCT9z';


// database connection init, drop database.
before((done) => {
    mongoose.connect('mongodb://localhost/differ-canvas_test_unit', () => {
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