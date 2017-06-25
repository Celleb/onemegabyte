let express = require('express');
let router = express.Router();

let Routes = function (controller) {
    /** sub operations */
    router.route('/:id').get(function (req, res, next) {
        controller.getOne(req).then((doc) => {
            res.status(200).json(doc);
        }).catch((error) => {
            res.status(500).json(error);
        });
    }).put(function (req, res, next) {
        controller.update(req).then((doc) => {
            res.status(200).json(doc);
        }).catch((error) => {
            res.status(500).json(error);
        });
    }).delete(function (req, res, next) {
        controller.delete(req).then((doc) => {
            res.status(200).json(doc);
        }).catch((error) => {
            res.status(500).json(error);
        });
    });
    /** main operations */
    router.route('/').get(function (req, res, next) {
        controller.getAll().then((doc) => {
            res.status(200).json(doc);
        }).catch((error) => {
            res.status(500).json(error);
        });
    }).post(function (req, res, next) {
        controller.create(req).then((doc) => {
            res.status(200).json(doc);
        }).catch((error) => {
            res.status(500).json(error);
        });
    });
    return router;
}
module.exports = Routes;