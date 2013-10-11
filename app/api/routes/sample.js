'use strict';

var go = module.exports = function (app) {
  app.get('/ses-cntslideshows/sample', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.send({ sampleData: [1, 2, 3] });
  });
};
