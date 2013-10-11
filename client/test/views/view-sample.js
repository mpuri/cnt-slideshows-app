'use strict';

var assert = require('assert');

// TODO: change to name of your feature
var cntslideshows = require('../../cntslideshows');

describe('contrived views test', function () {
  // TODO: add tests that ensure that your views are working here instead
  it('returns cntslideshows when initialized', function () {
    assert.equal(cntslideshows.init(), 'cntslideshows');
  });
});
