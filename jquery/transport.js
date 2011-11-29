/**
 * @name jquery
 * @description A new kind of JavaScript Library.
 * @author John Resig
 * @url http://jquery.com/
 * @keywords dom
 * @keywords event
 * @keywords library
 *
 * @src http://code.jquery.com/jquery-latest.js
 * @min http://code.jquery.com/jquery-latest.min.js
 */

(function(factory) {

  if (typeof define === 'function') {
    define('#{{id}}', [], factory);
  }
  else {
    factory();
  }

})(function(require) {

  /*{{code}}*/

  if (require) return $.noConflict(true);
});
