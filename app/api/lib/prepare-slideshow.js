'use strict';

var renderMarkdown = require('./render-markdown');
var trimGallery = require('./trim-gallery');

function renderCaption(item) {
  item.captionHtml = renderMarkdown(item.caption);
}

/**
 * Prepares a gallery response received from cnt-services to be easier consumable.
 * - removes unneeded properties
 * - renames description to caption
 * - adds captionHtml field which is the rendered version of the caption field (markdown)
 * 
 * @name prepareSlideshow
 * @function
 * @param gallery {Object} as returned from a /galleries/ request from cnt-services
 * @return {Object} prepared slideshow
 */
var go = module.exports = function (gallery) {
  var slideshow = trimGallery(gallery);
  var items = slideshow.items;
  if (items) items.forEach(renderCaption);
  return slideshow;
};
