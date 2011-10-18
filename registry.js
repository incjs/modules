define({
  "jquery": {
    "name": "jQuery",
    "description": "A new kind of JavaScript Library.",
    "author": "John Resig",
    "url": "http://jquery.com/",
    "keywords": [ "dom", "event", "library" ],
    "version": "1.6.4",
    "src": "http://code.jquery.com/jquery-1.6.4.js",
    "min": "http://code.jquery.com/jquery-1.6.4.min.js",
    "gzipped": 32090
  },
  "es5-safe": {
    "package": "https://raw.github.com/seajs/dew/master/src/es5-safe/package.json",
    "name": "es5-safe",
    "description": "Provides compatibility shims so that legacy JavaScript engines behave as closely as possible to ES5.",
    "url": "https://github.com/seajs/dew/tree/master/src/es5-safe",
    "keywords": [ "util" ],
    "author": "Frank Wang <lifesinger@gmail.com>",
    "version": "0.9.1",
    "src": "https://raw.github.com/seajs/dew/master/build/es5-safe/es5-safe-debug.js",
    "min": "https://raw.github.com/seajs/dew/master/build/es5-safe/es5-safe.js",
    "gzipped": 1286
  },
  "backbone": {
    "package": "https://raw.github.com/documentcloud/backbone/master/package.json",
    "src": "http://documentcloud.github.com/backbone/backbone.js",
    "min": "http://documentcloud.github.com/backbone/backbone-min.js",
    "name": "backbone",
    "description": "Give your JS App some Backbone with Models, Views, Collections, and Events.",
    "url": "http://documentcloud.github.com/backbone/",
    "keywords": [ "util", "functional", "server", "client", "browser" ],
    "author": "Jeremy Ashkenas <jeremy@documentcloud.org>",
    "contributors": [],
    "dependencies": {
      "underscore": ">=1.1.2"
    },
    "lib": ".",
    "main": "backbone.js",
    "version": "0.5.3",
    "gzipped": 4944
  },
  "json": {
    "package": "https://raw.github.com/seajs/dew/master/src/json/package.json",
    "name": "JSON",
    "description": "JSON in JavaScript",
    "url": "https://github.com/seajs/dew/tree/master/src/json",
    "keywords": [ "util" ],
    "author": "Frank Wang <lifesinger@gmail.com>",
    "version": "1.0.0",
    "src": "https://raw.github.com/seajs/dew/master/build/json/json-debug.js",
    "min": "https://raw.github.com/seajs/dew/master/build/json/json.js",
    "gzipped": 1303
  },
  "querystring": {
    "package": "https://raw.github.com/seajs/dew/master/src/querystring/package.json",
    "name": "QueryString",
    "description": "Provides utilities for dealing with query strings.",
    "url": "https://github.com/seajs/dew/tree/master/src/querystring",
    "keywords": [ "util" ],
    "author": "Frank Wang <lifesinger@gmail.com>",
    "version": "1.0.0",
    "src": "https://raw.github.com/seajs/dew/master/build/querystring/querystring-debug.js",
    "min": "https://raw.github.com/seajs/dew/master/build/querystring/querystring.js",
    "gzipped": 709
  },
  "seajs": {
    "package": "https://raw.github.com/seajs/seajs/master/package.json",
    "filename": "sea",
    "src": "https://raw.github.com/seajs/seajs/master/build/sea-debug.js",
    "min": "https://raw.github.com/seajs/seajs/master/build/sea.js",
    "extra": "https://raw.github.com/seajs/seajs/master/build/plugin-map.js",
    "name": "SeaJS",
    "description": "SeaJS is a new kind of JavaScript Loader that makes it easy to build scalable web applications. SeaJS is designed to change the way you organize JavaScript.",
    "homepage": "https://seajs.com/",
    "keywords": [ "loader", "modular", "CommonJS", "browser", "framework" ],
    "author": "Frank Wang <lifesinger@gmail.com>",
    "contributors": [],
    "dependencies": [],
    "repository": {
      "type": "git",
      "url": "git://github.com/lifesinger/seajs.git"
    },
    "main": "build/sea.js",
    "version": "1.0.2",
    "gzipped": 3834
  },
  "underscore": {
    "package": "https://raw.github.com/documentcloud/underscore/master/package.json",
    "src": "http://documentcloud.github.com/underscore/underscore.js",
    "min": "http://documentcloud.github.com/underscore/underscore-min.js",
    "name": "underscore",
    "description": "JavaScript's functional programming helper library.",
    "homepage": "http://documentcloud.github.com/underscore/",
    "keywords": [ "util", "functional", "server", "client", "browser" ],
    "author": "Jeremy Ashkenas <jeremy@documentcloud.org>",
    "contributors": [],
    "dependencies": [],
    "repository": {
      "type": "git",
      "url": "git://github.com/documentcloud/underscore.git"
    },
    "main": "underscore.js",
    "version": "1.2.0",
    "gzipped": 3963
  }
});