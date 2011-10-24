/**
 * @name labjs
 * @description Loading And Blocking JavaScript.
 * @author Kyle Simpson
 * @url http://labjs.com/
 * @keywords loader
 * @keywords performance
 *
 * @version 2.0.3
 * @filename lab
 * @src https://raw.github.com/getify/LABjs/master/LAB.src.js
 * @min https://raw.github.com/getify/LABjs/master/LAB.js
 *
 * @notes Run LABjs in node is not significant.
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

  if (require) return $LAB.noConflict();
});
