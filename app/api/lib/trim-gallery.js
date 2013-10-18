'use strict';

function trimItem(item) {
  item.photoId = void 0;

  // normalize API
  // slideshow considers the text sent to as description to be the caption
  item.caption = item.description;
  item.description = void 0;

  var photo = item.photo;
  if (!photo) return;

  photo.id = void 0;
  photo.createdAt = void 0;
  photo.modifiedAt = void 0;
}

/**
 * Takes in data provided by cnt-services and trims it to only retain data that the slideshow actually needs
 * 
 * @function trimGallery
 * @param gallery {Object} provided by cnt-services
 */
var go = module.exports = function (gallery) {
  // Setting all unneeded props to void 0 since that is more than 10x faster than deleting it
  // http://jsperf.com/delete-vs-undefined-vs-null/22

  gallery.publishHistory = void 0;
  gallery.id = void 0;
  gallery.photos = void 0;

  var items = gallery.items;
  if (items) items.forEach(trimItem);
   
  return gallery;
};
