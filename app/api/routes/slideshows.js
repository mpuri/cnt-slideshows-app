'use strict';

var prepareSlideshow = require('../lib/prepare-slideshow');

function cntServicesGallery(slug) {
  // TODO: actual hit cnt-services instead of using our mock data
  var o = require('../test/fixtures/women-slug.json');

  // ensure we get new object each time and don't mess with original
  return JSON.parse(JSON.stringify(o));

}

var go = module.exports = function (app) {
  app.get('/cnt-slideshows/:slug', function (req, res) {
    var gallery = cntServicesGallery(req.params.slug);
    var slideshow = prepareSlideshow(gallery);

    res.header('Content-Type', 'application/json');
    res.end(JSON.stringify(slideshow));
  });
};
