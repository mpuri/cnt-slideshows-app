var dirs = require('../../../config/directories');

var go = module.exports = function (app, express) {
    app.use('/ses-cntslideshows-html', express.static(dirs.html));
};