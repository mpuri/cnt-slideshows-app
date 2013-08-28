'use strict';

var core = require('ses-core');
var pages= require('./pages');
var api= require('./api');

exports.initPages = function (pagesApp, express, apiServerInfo) {
  core.initPages(pagesApp, express, apiServerInfo);
  pages.init(pagesApp, express, apiServerInfo);
};

exports.postInitPages = function (pagesApp, pagesServer, express) {
  core.postInitPages(pagesApp, pagesServer, express);
  pages.postInit(pagesApp, pagesServer, express);
};

exports.initApi = function (apiApp, restify) {
  core.initApi(apiApp, restify);
  api.init(apiApp, restify);
};

exports.postInitApi = function (apiApp, apiServer, restify) {
  core.postInitApi(apiApp, apiServer, restify);
  api.postInit(apiApp, apiServer, restify);
};
