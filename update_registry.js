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
var zlib = require('zlib');

var Transport = require('../lib/actions/transport.js');


var registry = {};

var items = fs.readdirSync(__dirname).filter(function(item) {
  return fs.statSync(item).isDirectory() && item.charAt(0) !== '.';
});


processItem(items.shift());


function processItem(item) {
  if (item) {
    var filepath = path.join(__dirname, item, 'transport.js');

    Transport.getMeta(filepath, function(meta) {
      registry[meta.name.toLowerCase()] = meta;

      // delete unnecessary properties
      delete meta.transportFile;

      if (meta.root.indexOf(':') !== -1) { // not local path
        if (meta.extra) {
          meta.extra = meta.extra.map(function(p) {
            return p.replace(meta.root, '');
          });
        }
        cutRoot(meta, 'src');
        cutRoot(meta, 'min');
      }
      else {
        delete meta.root;
      }

      // get file size info
      getFileSize(meta, function() {
        processItem(items.shift());
      });
    });
  }
  else {
    output();
  }
}


function cutRoot(meta, name) {
  if (meta[name]) {
    meta[name] = meta[name].replace(meta.root, '');
  }
}


function getFileSize(meta, callback) {
  var filename = meta['filename'];
  var minFile = path.join(__dirname, meta['name'], meta.version, filename + '.js');
  var srcFile = minFile.replace(/\.js$/, '-debug.js');

  console.log('  ... Reading %s', minFile);

  zlib.gzip(fs.readFileSync(minFile, 'utf8'), function(err, data) {
    if (err) throw err;
    meta['gzipped'] = formatSize(data.length);

    if (path.existsSync(srcFile)) {
      console.log('  ... Reading %s', srcFile);
      meta['raw'] = formatSize(fs.statSync(srcFile).size);
    }

    callback();
  });
}


function formatSize(size) {
  return Math.round(size / 1024) + 'KB';
}


function output() {
  var ast = jsp.parse('define(' + JSON.stringify(registry) + ')');
  var code = pro.gen_code(ast, {
    'beautify': true,
    'indent_level': 2,
    'quote_keys': true
  });
  //code = code.replace('define({', '{').replace('});', '}');

  var outputFile = path.join(__dirname, 'registry.js');

  fs.writeFile(outputFile, code, 'utf8', function() {
    console.log('  Done!');
  });
}
