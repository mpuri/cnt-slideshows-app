'use strict';

var assert = require('assert');

// TODO: change to name of your feature
var id = require('../id');

describe('contrived test', function () {
  // TODO: add tests that ensure that your app is working here instead
  it('returns id when initialized', function () {
    assert.equal(id.init(), 'id');
  });
});
