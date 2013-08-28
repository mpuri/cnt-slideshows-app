'use strict';

var core = require('ses-core');

// TODO: rename this to the name of your feature and update the reference in ./init.js
exports.init = function () {
  core.init();
  console.log('Initialized id module, please edit ./client/init.js and ./client/id.js to match your feature');

  // init views and return main view here instead
  return 'id';
};
