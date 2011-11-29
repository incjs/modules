/**
 * @package https://raw.github.com/jashkenas/coffee-script/master/package.json
 *
 * @version 1.1.3
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
