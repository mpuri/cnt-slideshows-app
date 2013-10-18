'use strict';

var core = require('ses-core');
var _ = require('underscore');

// TODO: rename this to the name of your feature and update the reference in ./init.js
exports.init = function () {

  core.init();

  console.log('Initialized cntslideshows module, please edit ./client/init.js and ./client/cntslideshows.js to match your feature');

  // init views and return main view here instead
  return 'cntslideshows';
};
