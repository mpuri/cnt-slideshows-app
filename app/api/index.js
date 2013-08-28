'use strict';

var core = require('ses-core');

exports.init = function (app, restify) {
  // We don't have any routes at this point, but simply dropping a file that exports a function 
  // that takes (app, restify) as parameters into ./routes will add one to the api part of the app
  core.registerEndpoints(__dirname, 'routes', app, restify);
};

exports.postInit = function (apiApp, apiServer, restify) { /* noop for now */ };
