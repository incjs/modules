/**
 * @package https://raw.github.com/jashkenas/coffee-script/master/package.json
 *
 * @name coffee
 * @filename coffee-script
 *
 * @min http://jashkenas.github.com/coffee-script/extras/coffee-script.js
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
