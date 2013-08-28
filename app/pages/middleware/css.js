'use strict';

var dirs = require('../../../config/directories');

// TODO: change prefix to match your feature name
var go = module.exports = function (app, express) {
  app.use('/ses-id-css', express.static(dirs.css));
};
