/**
 * @name jquery
 * @description A new kind of JavaScript Library.
 * @author John Resig
 * @url http://jquery.com/
 * @keywords dom
 * @keywords event
 * @keywords library
 *
 * @version 1.7.1
 * @src http://code.jquery.com/jquery-1.7rc1.js
 * @min http://code.jquery.com/jquery-1.7rc1.min.js
 *
 * @notes jQuery can not be run in node due to some browser proprietary objects
 *        such as window, document. And do NOT bother me with some jsdom
 *        module that is not robust.
 */

(function(factory) {

  if (typeof define === 'function' && define.cmd) {
    define('#{{id}}', [], factory);
  }
  else {
    factory();
  }

})(function(require) {

  /*{{code}}*/

  if (require) return $.noConflict(true);
});
