/**
 * @package https://raw.github.com/caolan/async/master/package.json
 *
 * @src https://github.com/caolan/async/raw/master/lib/async.js
 * @min https://raw.github.com/caolan/async/master/dist/async.min.js
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

});
