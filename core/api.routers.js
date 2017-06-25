/**
 * @author Jonas Tomanga <celleb@mrcelleb.com> 
 * @copyright (c) 2017 Jonas Tomanga 
 * All rights reserved 
 */
/**
 * Add routes and its handlers to the express app
 * @module routers
 * @version 1.0.0
 * @requires lodash external:lodash
 * @requires module:routers.factory
 * @requires module:controller.factory
 * @requires module:../api.config
 */
const api = require('../api.config');
let ControllerFactory = require('./controller.factory');
let RoutesFactory = require('./routes.factory');
const _ = require('lodash');
/**
 * Creates a new Routers
 * @class
 * @property {object} app - Express app object
 */
function Routers() {
    /**
     * Adds a route handler
     * @member {function}
     * @param {string} route - The path to be added
     * @param {function} handler - Express router handler
     * @returns {object} - Returns this object
     */
    this.add = (route, handler) => {
        this.app.use(route, handler);
        return this;
    };
    /**
     * Adds multiple route handlers
     * @member {function}
     * @param {object} routes - Routes object
     * @returns {object} - Returns this object
     */
    this.addMany = (routes) => {
        _.each(routes, (route) => {
            let controller = ControllerFactory.create(route.model);
            let handler = RoutesFactory.create(controller);
            this.add(route.path, handler);
        });
        return this;
    };
    /**
     * Adds the default routes defined in @see {@link ../ap.config}
     * @member {function}
     * @param {object} [app] - Express object
     * @returns {object} - Returns this object
     */
    this.initialize = (app) => {
        if (app) {
            this.app = app;
        }
        this.addMany(api.routes);
        return this;
    };
    /**
     * Sets the app property of this object, should
     * @member
     * @param {object} app - Express app object
     * @returns {object} - Returns this object
     */
    this.setApp = (app) => {
        this.app = app;
        return this;
    }
}
module.exports = new Routers;