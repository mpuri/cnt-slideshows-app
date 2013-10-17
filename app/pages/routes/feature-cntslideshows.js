'use strict';

var core = require('ses-core');
var dirs = require('../../../config/directories');
var path = require('path');

var cntslideshowsData = {};

module.exports = function (app, express) {
    app.get('/', function (req, res, next) {
        core.renderView(path.join(dirs.templates, 'cntslideshows-index.hbs'), cntslideshowsData, function (err, html) {
            if (err) return next(err);
            res.send(html);
        });
    });
};