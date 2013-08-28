'use strict';

var core = require('ses-core');
var dirs = require('../../config/directories');

exports.init = function (app, express) {
  core.registerEndpoints(__dirname, 'middleware', app, express);

  // We don't have any routes at this point, but simply dropping a file that exports a function 
  // that takes (app, express) as parameters into ./routes will add one to the pages part of the app
  core.registerEndpoints(__dirname, 'routes', app, express);

  // TODO: change prefix to match your feature name
  core.registerPartials(dirs.partials, 'ses-id-');
};

exports.postInit = function (app, server, express) { /* noop for now */ };
