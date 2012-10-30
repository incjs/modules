define("#module/1.0.0/util-debug", [], function(require, exports) {
    exports.random = function(min, max){
        return min + Math.round(Math.random() * (max - min));
    };
});


define("#module/1.0.0/handle-text-debug", ["./util-debug", "#jquery/1.7.2/jquery-debug"], function(require, exports, module) {
    var $ = require('#jquery/1.7.2/jquery-debug')
    var random = require('./util-debug').random
    
    function handleText(text){
        var min = random(30,70)
        var max = random(50,120)
        var rt = ''
        for(var i = 0, len = text.length; i < len; i++){
            rt += '<span style="font-size:' + random(min, max) + 'px;">' + text[i] + '</span>'
        }
        return rt
    }
    
    module.exports = handleText
})


define("#module/1.0.0/module-debug", ["./util-debug", "./handle-text-debug", "#jquery/1.7.2/jquery-debug"], function(require, exports, module) {
    var $ = require('#jquery/1.7.2/jquery-debug');
    var random = require('./util-debug').random;
    var handleText= require('./handle-text-debug');
    
    function Hello() {
        this.render();
        this.bindAction();
        seajs.log('new Hello() called.');
    }
    
    Hello.prototype.render = function() {
        this.el = $('<div style="position:fixed;' 
            + 'left:' + random(0,70) + '%;'
            + 'top:' + random(10,80)+ '%;">'
            + handleText('Hello SPM !')
            + '</div>').appendTo('body');
    };
    
    Hello.prototype.bindAction = function() {
        var el = this.el;
        setTimeout(function(){ el.fadeOut() }, random(500,5000));
    }
    
    module.exports = Hello;
});

