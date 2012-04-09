/**
 * @package https://raw.github.com/lifesinger/zepto/master/package.json
 *
 * @src https://raw.github.com/lifesinger/zepto/master/dist/zepto.js
 */

(function(factory) {

  if (typeof define === 'function') {
    define('#{{id}}', [], factory);
  }
  else {
    factory();
  }

})(function(require) {

  var _zepto = window.Zepto;
  var _$ = window.$;

  /*{{code}}*/

  if (require) {
    window.Zepto = _zepto;
    window.$ = _$;

    return Zepto;
  }

});
