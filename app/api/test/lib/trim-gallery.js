'use strict';

var test = require('tape');
var trimGallery = require('../../lib/trim-gallery');

var gallery = require('../fixtures/women-slug');

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

test('when trimming a gallery provided by cnt-services', function (t) {
  
  var trimmed = trimGallery(gallery);
  inspect(trimmed);
  t.deepEqual(
    trimmed,
    { byline: [],
      tags: [],
      items:
      [ { isActive: true,
          description: '# women\n - are females\n  - like clothes\n\nTherefore we put this nice photo below',
          photoId: undefined,
          photo:
            { id: undefined,
              createdAt: undefined,
              images:
              { original:
                  { url: 'https://us-east.manta.joyent.com/condenast/public/gq/ci/2013/10/16/1381945808654_blob',
                    height: 1024,
                    width: 768,
                    format: 'JPEG' } },
              modifiedAt: undefined,
              name: 'blob' } },
        { isActive: true,
          description: '# women\n - are females\n  - like clothes\n\nTherefore we put this nice photo below',
          photoId: undefined,
          photo:
            { id: undefined,
              createdAt: undefined,
              images:
              { original:
                  { url: 'https://us-east.manta.joyent.com/condenast/public/gq/ci/2013/10/16/1381945808664_blob',
                    height: 648,
                    width: 474,
                    format: 'JPEG' } },
              modifiedAt: undefined,
              name: 'blob' } },
        { isActive: true,
          description: '# women\n - are females\n  - like clothes\n\nTherefore we put this nice photo below',
          photoId: undefined,
          photo:
            { id: undefined,
              createdAt: undefined,
              images:
              { original:
                  { url: 'https://us-east.manta.joyent.com/condenast/public/gq/ci/2013/10/16/1381945808701_blob',
                    height: 360,
                    width: 282,
                    format: 'JPEG' } },
              modifiedAt: undefined,
              name: 'blob' } },
        { isActive: true,
          description: '# women\n - are females\n  - like clothes\n\nTherefore we put this nice photo below',
          photoId: undefined,
          photo:
            { id: undefined,
              createdAt: undefined,
              images:
              { original:
                  { url: 'https://us-east.manta.joyent.com/condenast/public/gq/ci/2013/10/16/1381945808679_blob',
                    height: 700,
                    width: 467,
                    format: 'JPEG' } },
              modifiedAt: undefined,
              name: 'blob' } },
        { isActive: true,
          description: '# women\n - are females\n  - like clothes\n\nTherefore we put this nice photo below',
          photoId: undefined,
          photo:
            { id: undefined,
              createdAt: undefined,
              images:
              { original:
                  { url: 'https://us-east.manta.joyent.com/condenast/public/gq/ci/2013/10/16/1381945808709_blob',
                    height: 680,
                    width: 519,
                    format: 'JPEG' } },
              modifiedAt: undefined,
              name: 'blob' } } ],
      photos: undefined,
      channel: 'Women',
      subChannel: 'Photos',
      displayDate: '12/01/13',
      createdAt: '2013-10-16T17:47:09.716Z',
      hed: 'Test Gallery hed',
      dek: 'Test gallery dek',
      seoDescription: 'Test seo descriptino',
      id: undefined,
      revision: 44,
      revisionCreatedAt: '2013-10-16T20:59:07.685Z',
      publishHistory: undefined },
      'trims unneeded properties, but keeps the ones relative for the slideshow'
  );
  t.end();
});
