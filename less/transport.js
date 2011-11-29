/**
 * @package https://raw.github.com/cloudhead/less.js/master/package.json
 *
 * @src https://raw.github.com/cloudhead/less.js/master/dist/less-{{version}}.js
 * @min https://raw.github.com/cloudhead/less.js/master/dist/less-{{version}}.min.js
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

  return less;
});
