'use strict';

var test = require('tape');
var prepareSlideshow = require('../../lib/prepare-slideshow');
var gallery = require('../fixtures/women-slug');

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

test('when preparing a slide show', function (t) {
  var slideshow = prepareSlideshow(gallery);
  
  slideshow.items.forEach(checkCaptions);

  function checkCaptions(item) {
    // TODO: once we have a custom parser change this to expect rendered html to include custom semantic tags
    t.equal(
      item.captionHtml,
      '<h1>women</h1>\n<ul>\n<li>are females<ul>\n<li>like clothes</li>\n</ul>\n</li>\n</ul>\n<p>Therefore we put this nice photo below</p>\n',
      'renders caption and attaches it as captionHtml'
    );
    t.equal(
      item.caption,
      '# women\n - are females\n  - like clothes\n\nTherefore we put this nice photo below',
      'leaves markdown caption field unchanged'
    );
  }

  t.end();
});
