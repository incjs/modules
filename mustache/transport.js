/**
 * @package https://raw.github.com/janl/mustache.js/2f4ccb950f064d56b473f184b5d5a7986b85e40d/wrappers/commonjs/package.json
 *
 * @version 0.4.0
 * @src https://raw.github.com/janl/mustache.js/master/mustache.js
 */

(function(factory) {

  if (typeof define === 'function') {
    define('#{{id}}', [], factory);
  }
  else if (typeof module !== 'undefined') {
    module.exports = factory();
  }
  else {
    this.Mustache = factory();
  }

})(function() {

/*{{code}}*/
return Mustache;
});
