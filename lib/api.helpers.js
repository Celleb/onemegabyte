const _ = require('lodash');
let Promise = require('bluebird');
module.exports = {
    map: function (data, dict) {
        console.log('Tranformation')
        return new Promise((resolve, reject) => {
            let map = {};
            _.each(data, (value, key) => {
                if (_.has(dict, key)) {
                    map[dict[key]] = value;
                }
            });
            resolve(map);
        });
    },
    mapInverse: function (data, dict) {
        console.log('Reverse tranformation');
        let collection = [];

        console.log(dict);
        dict = _.invert(dict);
        if (!_.isArray(data)) {
            collection = mapper(data);
        } else {
            _.each(data, (values) => {
                map = mapper(values);
                console.log(map);
                !_.isEmpty(map) ? collection.push(map) : void (null);
            });
        }

        function mapper(values) {
            let map = {};
            for (key in values) {
                if (_.has(dict, key)) {
                    map[dict[key]] = values[key];
                }
            }
            return map;
        }
        console.log(collection);
        return Promise.resolve(collection);
    }
}