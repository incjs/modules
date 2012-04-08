
seajs.config({
  alias: {
    'jquery': 'jquery/1.7.2/jquery',
    'blockui': 'jq-modules/blockui/2.39.0/blockui'
  }
});


define(function(require) {

  var $ = require('jquery');
  var BlockUI = require('blockui');


  $('#waiting').hide();
  $('.section').show();


  function test() {
    setTimeout(function() {
      BlockUI.unblock();
    }, 2000);
    //$.ajax({ url: 'wait2.php', cache: false });
  }

  // global hook - unblock UI when ajax request completes
  //$(document).ajaxStop(BlockUI.unblock);



  //
  // page blocking example
  //
  $('#pageDemo1').click(function() {
    BlockUI.block();
    test();
  });

  $('#pageDemo2').click(function() {
    BlockUI.block({ message: '<h1><img src="http://malsup.com/jquery/block/busy.gif" /> Just a moment...</h1>' });
    test();
  });

  $('#pageDemo3').click(function() {
    BlockUI.block({ css: {backgroundColor: '#f00', color: '#fff' }});
    test();
  });

  $('#pageDemo4').click(function() {
    BlockUI.block({ message: $('#domMessage') });
    test();
  });


  //
  // dialog example
  //
  $('#showDialog').click(function() {
    BlockUI.block({ message: $('#question'), css: { width: '275px' }});
  });

  $('#yes').click(function() {
    // update the block message
    BlockUI.unblock({ fadeOut: 200 });
    BlockUI.block({ message: '<h1>Remote call in progress...</h1>' });

    test();
  });

  $('#no').bind('click', BlockUI.unblock);



  //
  // elements blocking example
  //
  $('#blockButton').click(function() {
    BlockUI.block('div.blockMe', { message: null });
  });

  $('#blockButton2').click(function() {
    BlockUI.block('div.blockMe', {
      message: '<h1>Processing...</h1>',
      css: { border: '3px solid #a00' }
    });
  });

  $('#unblockButton').click(function() {
    BlockUI.unblock('div.blockMe');
  });

});
