/**
 * @fileoverview update registry.json
 * @usage node update_registry.js
 * @author lifesinger@gmail.com <Frank Wang>
 */

var fs = require('fs');
var path = require('path');

var uglifyjs = require('uglify-js');
var jsp = uglifyjs.parser;
var pro = uglifyjs.uglify;
var gzip = require('gzip');

var Transport = require('../lib/actions/Transport');


var registry = {};

var items = fs.readdirSync(__dirname).filter(function(item) {
  return fs.statSync(item).isDirectory() && item.charAt(0) !== '.';
});

items.forEach(function(item, i) {
  var filepath = path.join(__dirname, item, 'transport.js');

  Transport.prototype.getMeta(filepath, function(meta) {
    registry[meta.name.toLowerCase()] = meta;

    gzipSize(meta, function() {
      if (i === items.length - 1) {
        output();
      }
    });
  });
});


function gzipSize(meta, callback) {
  var filename = (meta['filename'] || meta['name']).toLowerCase();
  var minFile = path.join(__dirname, meta['name'], meta.version, filename + '.js');

  gzip(fs.readFileSync(minFile, 'utf8'), function(err, data) {
    if (err) {
      throw err;
    }

    meta['gzipped'] = data.length;
    callback();
  })
}


function output() {
  var ast = jsp.parse('define(' + JSON.stringify(registry) + ')');
  var code = pro.gen_code(ast, {
    beautify: true,
    indent_level: 2,
    quote_keys: true
  });
  code = code.replace('define({', '{').replace('});', '}');

  var outputFile = path.join(__dirname, 'registry.json');

  fs.writeFile(outputFile, code, 'utf8', function() {
    console.log('  Done!');
  });
}
