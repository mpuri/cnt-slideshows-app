var dirs = require('../../../config/directories');

var go = module.exports = function (app, express) {
    app.use('/ses-cntslideshows-images', express.static(dirs.images));
};