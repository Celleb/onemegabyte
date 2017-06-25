const Promise = require('bluebird');
const bodyParser = require('body-parser');
const compression = require('compression');
const multer = require('multer');
const methodOverride = require('method-override');
const express = require('express');
const app = express();
let router = require('./core/api.routers').setApp(app);
/* set response header */
app.use(compression())
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .use(bodyParser.json())
    .use(methodOverride());
router.initialize(app);
app.listen(8080, () => {
    console.log('OMBAPI Running');
});