Controller = require('./controller');
let ControllerFactory = function () {
    return {
        create: function (model) {
            console.log('Creating controller through Factory');
            console.log('Loading models');
            Model = require("../models/" + model);
            return new Controller(Model);
        }
    }
}
module.exports = ControllerFactory();