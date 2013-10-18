'use strict';

var marked = require('marked');

marked.setOptions({
  gfm       :  true,
  pedantic  :  false,
  sanitize  :  true
});


/**
 * Renders given markdown with custom markdown parser.
 * Note: at this point still using marked, but a custom markdown parser
 *       supporting custom tags will be provided by the copilot team in the future
 * 
 * @name renderMarkdown
 * @function
 * @param md {String} markdown to render
 * @return {String} html rendition of the given markdown
 */
var go = module.exports = function (md) {
  if (!md || !md.length) return '';
  return marked(md);
};
