/**
 * @name blockui
 *
 * @description The jQuery BlockUI Plugin lets you simulate synchronous behavior
 * when using AJAX, without locking the browser[1]. When activated, it will
 * prevent user activity with the page (or part of the page) until it is
 * deactivated. BlockUI adds elements to the DOM to give it both the appearance
 * and behavior of blocking user interaction.
 *
 * @author John Resig
 * @url http://malsup.com/jquery/block/
 * @keywords jquery plugin
 *
 * @version 2.39.0
 * @src https://raw.github.com/malsup/blockui/master/jquery.blockUI.js
 */

define('#{{id}}', ['jquery'], function(require, exports) {

  var $ = require('jquery').sub();
  var jQuery = $;


/*{{code}}*/


  exports.version = $.blockUI.version + '.0';


  exports.defaults = $.blockUI.defaults;


  exports.block = function(element, options) {
    if (arguments.length === 1 && typeof element === 'object') {
      options = element;
      element = undefined;
    }

    if (element === undefined) {
      $.blockUI(options);
    }
    else {
      $(element).block(options);
    }

    return exports;
  };


  exports.unblock = function(element, options) {
    if (arguments.length === 1 && typeof element === 'object') {
      options = element;
      element = undefined;
    }

    if (element === undefined) {
      $.unblockUI(options);
    }
    else {
      $(element).unblock(options);
    }

    return exports;
  };


  exports.growl = $.growlUI;

});
