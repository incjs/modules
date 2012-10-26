define("#module1/1.0.0/module1-debug", ["#widget/1.0.2/widget-debug", "#base/1.0.1/base-debug", "#class/1.0.0/class-debug", "#events/1.0.0/events-debug", "jquery/1.7.2/jquery-debug"], function(require, exports, module) {

    var Widget = require('#widget/1.0.2/widget-debug');

    var module1 = module.exports = Widget.extend({

        attrs: {
            'color': 'red'
        },

        events: {
            'click h3': 'heading',
            'mouseover p': 'paragraph'
        },

        heading: function() {
            this.$('h3').html('hello ');
        },

        paragraph: function() {
            this.$('p').css('background-color', this.get('color'));
        }
    });
});

