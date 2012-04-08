

使用说明
---

首先，要在配置里指明模块版本：

````javascript
seajs.config({

  alias: {
    'jquery': 'jquery/1.7.2/jquery',
    'blockui': 'jq-modules/blockui/2.39.0/blockui'
  }

});
````

然后就可以直接调用：

````javascript
define(function(require, exports) {

  var BlockUI = require('blockui');

  // Page Blocking
  BlockUI.block();
  BlockUI.block({ message: '<h1><img src="busy.gif" /> Just a moment...</h1>' })
  BlockUI.block({ css: { backgroundColor: '#f00', color: '#fff' } });

  // Elements Blocking
  BlockUI.block('div.test', {
                message: '<h1>Processing</h1>',
                css: { border: '3px solid #a00' }
            });

  // Unblocking
  BlockUI.unblock();

  // Growling
  BlockUI.growl();

  // Override default options
  BlockUI.defaults.fadeOut = 200;

});
````

演示页面：[docs/demo.html](http://modules.seajs.org/jq-modules/blockui/docs/demo.html)



来源项目
---

* code: https://github.com/malsup/blockui/
* docs: http://malsup.com/jquery/block/
