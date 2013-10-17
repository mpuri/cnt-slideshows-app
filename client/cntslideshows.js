'use strict';

var core = require('ses-core');
var _ = require('underscore');

// TODO: rename this to the name of your feature and update the reference in ./init.js
exports.init = function () {

  core.init();

  function slideChange(idx, elem) {
    console.log('Index: ' + idx);
  }

  window.cntslider = $('#cntslider').Swipe({
    continuous: false,
    callback: slideChange
  }).data('Swipe');

  var paneLeft = document.getElementById('previewPaneLeft');
  var paneRight = document.getElementById('previewPaneRight');

  function loadPreviewPane(pane, img) {
    var whichPane = (pane === 'left') ? paneLeft : paneRight;
    var context = whichPane.getContext('2d');

    whichPane.width = 100;
    whichPane.height = img.height;
    context.globalAlpha = 0.3;
    context.drawImage(img, 0, 0, img.width, img.height);
  }

  $(document).ready(function () {
    loadPreviewPane('left', $('.swipe-wrap img').get(3));
    loadPreviewPane('right', $('.swipe-wrap img').get(1));

    $('.swipe-wrap').eq(0).on('gumby.onChange', function(e) {
      Gumby.debug('Image src has changed');
    }).trigger('gumby.trigger').trigger('gumby.initialize');
  });

  console.log('Initialized cntslideshows module, please edit ./client/init.js and ./client/cntslideshows.js to match your feature');

  // init views and return main view here instead
  return 'cntslideshows';
};
