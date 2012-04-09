/**
 * @package https://raw.github.com/cubiq/iscroll/master/package.json
 *
 * @src https://raw.github.com/cubiq/iscroll/master/src/iscroll.js
 */

(function(factory) {

  if (typeof define === 'function') {
    define('#{{id}}', [], factory);
  }
  else if (typeof exports !== 'undefined') {
    factory(require, exports, module);
  }
  else {
    factory();
  }

})(function(require, exports, module) {

  /*{{code}}*/

  module.exports = exports.iScroll;

});
