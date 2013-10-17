var dirs = require('../../../config/directories');

var go = module.exports = function (app, express) {
    app.use('/ses-cntslideshows-partials', express.static(dirs.partials));
};