/**
 * @name coffee
 * @description CoffeeScript is a little language that compiles into JavaScript.
 * @author Jeremy Ashkenas
 * @url http://coffeescript.org
 * @keywords compiler
 *
 * @version 1.1.2
 * @filename coffee-script
 * @min http://jashkenas.github.com/coffee-script/extras/coffee-script.js
 *
 */

(function(factory) {

  if (typeof define === 'function') {
    define('#{{id}}', [], factory);
  }
  else {
    factory();
  }

})(function() {

  /*{{code}}*/

  return CoffeeScript;
});
