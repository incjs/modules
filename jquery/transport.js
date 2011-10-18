/**
 * @name jquery
 * @description A new kind of JavaScript Library.
 * @author John Resig
 * @url http://jquery.com/
 * @keywords dom
 * @keywords event
 * @keywords library
 *
 * @version 1.6.4
 * @src http://code.jquery.com/jquery-1.6.4.js
 * @min http://code.jquery.com/jquery-1.6.4.min.js
 */

(function(factory) {

  if (typeof define === 'function') {
    define('jquery', [], factory);
  } else {
    factory();
  }

})(function() {

  /*{{code}}*/

  return $.noConflict(true);
});
