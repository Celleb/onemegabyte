Routes = require('./routes');
RoutesFactory = function () {
    return {
        create: function (controller) {
            console.log('Creating controller')
            return Routes(controller);
        }
    }
}
module.exports = RoutesFactory();
