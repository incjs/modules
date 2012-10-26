define(function(require, exports, module) {

    var Widget = require('widget');

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

