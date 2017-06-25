/**
 * Description users.model.js
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com> 
 * @copyright (c) 2017 Jonas Tomanga 
 * All rights reserved 
 */

/**
 * Users model
 * @module models/users.model
 * @see module:lib/api.database
 */
let db = require('../lib/api.database.js');
let ai = require('mongoose-auto-increment');
ai.initialize(db.connection);

/** User schema definitions */
const schema = {
    _id: { index: true, unique: true, type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: Number, required: true },
    mobileNumber: { type: String, unique: true },
    password: { type: String, required: true },
    dateOfBirth: { type: Date },
    date: { type: Date, default: Date.now },
    userStatus: { type: String, default: 'new' },
    driver: { type: Boolean, default: false },
    passenger: { type: Boolean, default: false }
}
/** User schema */
const modelSchema = new db.Schema(schema);

/** User dictionary */
const dictionary = {
    id: "_id",
    first_name: "firstName",
    last_name: "lastName",
    gender: "gender",
    mobile: "mobileNumber",
    password: "password",
    dob: "dateOfBirth",
    date: "date",
    status: "userStatus",
    driver: "driver",
    passenger: "passenger",
}
/** Fields to be excluded when a user is created */
const createExclude = ["id", "date", "status"];
/** Fields to be excluded when a user is updated */
const updateExclude = ["id", "date", "status", "password"]

modelSchema.plugin(ai.plugin, { model: 'users', field: '_id', startAt: 1 }); /** Add Auto increment plugin */
module.exports = {
    model: db.model('users', modelSchema),
    dictionary: dictionary,
    createExclude: createExclude,
    updateExclude: updateExclude,
    schema: schema
}