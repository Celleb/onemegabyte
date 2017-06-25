/**
 * Description controller.js
 *
 * @author Jonas Tomanga <celleb@mrcelleb.com> 
 * @copyright (c) 2017 Jonas Tomanga 
 * All rights reserved 
 */
let Promise = require('bluebird');
const helpers = require('../lib/api.helpers');
const _ = require('lodash');
let prototype = {
    getAll: function (req) {
        return this.model.find().then(this.reverse);
    },
    create: function (req) {
        return helpers.map(_.omit(req.body, this.createExclude), this.dictionary).then(data => {
            return this.model.create(data).then(this.reverse);
        });
    },
    delete: function (req) {
        return this.model.findOneAndRemove({ _id: req.params.id });
    },
    update: function (req) {
        return helpers.map(_.omit(req.body, this.updateExclude), this.dictionary).then(data => {
            return this.model.findOneAndUpdate({ _id: req.params.id }, data);
        });
    },
    getOne: function (req) {
        return this.model.findOne({ _id: req.params.id });
    }
    /** @todo search api */
}
function Controller(model) {
    this.model = model.model;
    this.dictionary = model.dictionary;
    this.updateExclude = model.updateExclude;
    this.createExclude = model.createExclude;

    this.reverse = (data) => {
        console.log(this.dictionary);
        return helpers.mapInverse(data, this.dictionary);
    }
};
Controller.prototype = prototype
module.exports = Controller;


