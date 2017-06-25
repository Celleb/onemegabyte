/**
 * Connect to the mongodb using mongoose library
 * Exports the mongoose connection to the database
 * @author Jonas Tomanga <celleb@mrcelleb.com>
 * @type Module config|Module config
 */
let config = require('../app.config.js');
let Promise = require('bluebird');
let mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.connect(config.db.url, {
    user: config.db.user,
    pass: config.db.password,
    auth: config.db.auth
});
let database = mongoose.connection;
database.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = mongoose;