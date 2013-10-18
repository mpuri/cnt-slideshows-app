'use strict';

var prepareSlideshow = require('../lib/prepare-slideshow');

function cntServicesGallery(slug) {
  // TODO: actual hit cnt-services instead of using our mock data
  return require('../test/fixtures/women-slug.json');

}

var go = module.exports = function (app) {
  app.get('/cnt-slideshows/:slug', function (req, res) {
    var gallery = cntServicesGallery(req.params.slug);
    var slideshow = prepareSlideshow(gallery);

    res.header('Content-Type', 'application/json');
    res.end(JSON.stringify(slideshow));
  });
};
