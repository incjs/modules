/**
 * @package https://raw.github.com/lifesinger/zepto/master/package.json
 *
 * @src https://raw.github.com/lifesinger/zepto/master/dist/zepto.js
 */

define('#{{id}}', [], function(require) {

  var _zepto = window.Zepto;
  var _$ = window.$;

  /*{{code}}*/

  window.Zepto = _zepto;
  window.$ = _$;

  return Zepto;
});
