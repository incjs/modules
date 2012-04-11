define({
  "async": {
    "package": "https://raw.github.com/caolan/async/master/package.json",
    "src": "https://github.com/caolan/async/raw/master/lib/async.js",
    "min": "https://raw.github.com/caolan/async/master/dist/async.min.js",
    "name": "async",
    "description": "Higher-order functions and common patterns for asynchronous code",
    "main": "./index",
    "author": "Caolan McMahon",
    "version": "0.1.18",
    "repository": {
      "type": "git",
      "url": "http://github.com/caolan/async.git"
    },
    "bugs": {
      "url": "http://github.com/caolan/async/issues"
    },
    "licenses": [ {
      "type": "MIT",
      "url": "http://github.com/caolan/async/raw/master/LICENSE"
    } ],
    "devDependencies": {
      "nodeunit": ">0.0.0",
      "uglify-js": "1.2.x",
      "nodelint": ">0.0.0"
    },
    "filename": "async",
    "dirpath": "async",
    "gzipped": "2KB",
    "raw": "21KB"
  },
  "backbone": {
    "package": "https://raw.github.com/documentcloud/backbone/master/package.json",
    "src": "http://documentcloud.github.com/backbone/backbone.js",
    "min": "http://documentcloud.github.com/backbone/backbone-min.js",
    "name": "backbone",
    "description": "Give your JS App some Backbone with Models, Views, Collections, and Events.",
    "url": "http://backbonejs.org",
    "keywords": [ "util", "functional", "server", "client", "browser" ],
    "author": "Jeremy Ashkenas <jeremy@documentcloud.org>",
    "contributors": [],
    "dependencies": {
      "underscore": ">=1.3.1"
    },
    "lib": ".",
    "main": "backbone.js",
    "version": "0.9.2",
    "filename": "backbone",
    "dirpath": "backbone",
    "gzipped": "6KB",
    "raw": "52KB"
  },
  "coffee": {
    "package": "https://raw.github.com/jashkenas/coffee-script/master/package.json",
    "name": "coffee",
    "filename": "coffee-script",
    "min": "http://jashkenas.github.com/coffee-script/extras/coffee-script.js",
    "description": "Unfancy JavaScript",
    "keywords": [ "javascript", "language", "coffeescript", "compiler" ],
    "author": "Jeremy Ashkenas",
    "version": "1.3.1",
    "licenses": [ {
      "type": "MIT",
      "url": "http://github.com/jashkenas/coffee-script/raw/master/LICENSE"
    } ],
    "engines": {
      "node": ">=0.4.0"
    },
    "directories": {
      "lib": "./lib/coffee-script"
    },
    "main": "./lib/coffee-script/coffee-script",
    "bin": {
      "coffee": "./bin/coffee",
      "cake": "./bin/cake"
    },
    "homepage": "http://coffeescript.org",
    "repository": {
      "type": "git",
      "url": "git://github.com/jashkenas/coffee-script.git"
    },
    "devDependencies": {
      "uglify-js": ">=1.0.0",
      "jison": ">=0.2.0"
    },
    "dirpath": "coffee",
    "gzipped": "41KB"
  },
  "cookie": {
    "package": "https://raw.github.com/seajs/dew/master/src/cookie/package.json",
    "name": "cookie",
    "description": "Provides utilities for dealing with cookies.",
    "url": "https://github.com/seajs/dew/tree/master/src/cookie",
    "keywords": [ "util" ],
    "author": "Frank Wang <lifesinger@gmail.com>",
    "version": "1.0.2",
    "src": "https://raw.github.com/seajs/dew/master/build/cookie/cookie-debug.js",
    "min": "https://raw.github.com/seajs/dew/master/build/cookie/cookie.js",
    "filename": "cookie",
    "dirpath": "cookie",
    "gzipped": "1KB",
    "raw": "5KB"
  },
  "es5-safe": {
    "package": "https://raw.github.com/seajs/dew/master/src/es5-safe/package.json",
    "name": "es5-safe",
    "description": "Provides compatibility shims so that legacy JavaScript engines behave as closely as possible to ES5.",
    "url": "https://github.com/seajs/dew/tree/master/src/es5-safe",
    "keywords": [ "util" ],
    "author": "Frank Wang <lifesinger@gmail.com>",
    "version": "0.9.2",
    "src": "https://raw.github.com/seajs/dew/master/build/es5-safe/es5-safe-debug.js",
    "min": "https://raw.github.com/seajs/dew/master/build/es5-safe/es5-safe.js",
    "filename": "es5-safe",
    "dirpath": "es5-safe",
    "gzipped": "1KB",
    "raw": "10KB"
  },
  "jquery": {
    "name": "jquery",
    "description": "A new kind of JavaScript Library.",
    "author": "John Resig",
    "url": "http://jquery.com/",
    "keywords": [ "dom", "event", "library" ],
    "src": "http://code.jquery.com/jquery-latest.js",
    "min": "http://code.jquery.com/jquery-latest.min.js",
    "version": "1.7.2",
    "filename": "jquery",
    "dirpath": "jquery",
    "gzipped": "33KB",
    "raw": "247KB"
  },
  "json": {
    "package": "https://raw.github.com/seajs/dew/master/src/json/package.json",
    "name": "json",
    "description": "JSON in JavaScript",
    "url": "https://github.com/seajs/dew/tree/master/src/json",
    "keywords": [ "util" ],
    "author": "Frank Wang <lifesinger@gmail.com>",
    "version": "1.0.1",
    "src": "https://raw.github.com/seajs/dew/master/build/json/json-debug.js",
    "min": "https://raw.github.com/seajs/dew/master/build/json/json.js",
    "filename": "json",
    "dirpath": "json",
    "gzipped": "1KB",
    "raw": "17KB"
  },
  "labjs": {
    "name": "labjs",
    "description": "Loading And Blocking JavaScript.",
    "author": "Kyle Simpson",
    "url": "http://labjs.com/",
    "keywords": [ "loader", "performance" ],
    "filename": "lab",
    "src": "https://raw.github.com/getify/LABjs/master/LAB.src.js",
    "min": "https://raw.github.com/getify/LABjs/master/LAB.js",
    "notes": "Run LABjs in node is not significant.",
    "version": "2.0.3",
    "dirpath": "labjs",
    "gzipped": "2KB",
    "raw": "19KB"
  },
  "less": {
    "package": "https://raw.github.com/cloudhead/less.js/master/package.json",
    "src": "https://raw.github.com/cloudhead/less.js/master/dist/less-1.3.0.js",
    "min": "https://raw.github.com/cloudhead/less.js/master/dist/less-1.3.0.min.js",
    "name": "less",
    "description": "Leaner CSS",
    "url": "http://lesscss.org",
    "keywords": [ "css", "parser", "lesscss", "browser" ],
    "author": "Alexis Sellier <self@cloudhead.net>",
    "contributors": [],
    "version": "1.3.0",
    "bin": {
      "lessc": "./bin/lessc"
    },
    "main": "./lib/less/index",
    "directories": {
      "test": "./test"
    },
    "engines": {
      "node": ">=0.4.0"
    },
    "filename": "less",
    "dirpath": "less",
    "gzipped": "15KB",
    "raw": "115KB"
  },
  "mustache": {
    "package": "https://raw.github.com/janl/mustache.js/master/package.json",
    "version": "0.5.0",
    "src": "https://raw.github.com/janl/mustache.js/master/mustache.js",
    "name": "mustache",
    "description": "Logic-less {{mustache}} templates with JavaScript",
    "author": "mustache.js Authors <http://github.com/janl/mustache.js>",
    "keywords": [ "mustache", "template", "templates", "ejs" ],
    "main": "./mustache",
    "filename": "mustache",
    "dirpath": "mustache",
    "gzipped": "2KB",
    "raw": "14KB"
  },
  "querystring": {
    "package": "https://raw.github.com/seajs/dew/master/src/querystring/package.json",
    "name": "querystring",
    "description": "Provides utilities for dealing with query strings.",
    "url": "https://github.com/seajs/dew/tree/master/src/querystring",
    "keywords": [ "util" ],
    "author": "Frank Wang <lifesinger@gmail.com>",
    "version": "1.0.1",
    "src": "https://raw.github.com/seajs/dew/master/build/querystring/querystring-debug.js",
    "min": "https://raw.github.com/seajs/dew/master/build/querystring/querystring.js",
    "filename": "querystring",
    "dirpath": "querystring",
    "gzipped": "1KB",
    "raw": "5KB"
  },
  "seajs": {
    "package": "https://raw.github.com/seajs/seajs/master/package.json",
    "filename": "sea",
    "root": "https://raw.github.com/seajs/seajs/master/build/",
    "src": "sea-debug.js",
    "min": "sea.js",
    "extra": [ "plugin-base.js", "plugin-map.js", "plugin-text.js", "plugin-json.js", "plugin-coffee.js", "plugin-less.js" ],
    "name": "seajs",
    "version": "1.1.0",
    "description": "A Module Loader for the Web",
    "homepage": "https://seajs.org/",
    "keywords": [ "loader", "module", "commonjs", "browser", "nodejs" ],
    "author": "Frank Wang <lifesinger@gmail.com>",
    "engines": {
      "node": ">= 0.6.3"
    },
    "dependencies": [],
    "repository": {
      "type": "git",
      "url": "git://github.com/seajs/seajs.git"
    },
    "main": "./lib/sea-node.js",
    "preferGlobal": true,
    "dirpath": "seajs",
    "gzipped": "4KB",
    "raw": "32KB"
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
    "repository": {
      "type": "git",
      "url": "git://github.com/documentcloud/underscore.git"
    },
    "main": "underscore.js",
    "version": "1.3.3",
    "filename": "underscore",
    "dirpath": "underscore",
    "gzipped": "4KB",
    "raw": "37KB"
  },
  "jq-blockui": {
    "name": "jq-blockui",
    "description": "The jQuery BlockUI Plugin lets you simulate synchronous behavior when using AJAX, without locking the browser[1]. When activated, it will prevent user activity with the page (or part of the page) until it is deactivated. BlockUI adds elements to the DOM to give it both the appearance and behavior of blocking user interaction.",
    "author": "John Resig",
    "url": "http://malsup.com/jquery/block/",
    "keywords": "jquery plugin",
    "filename": "blockui",
    "version": "2.39.0",
    "src": "https://raw.github.com/malsup/blockui/master/jquery.blockUI.js",
    "dirpath": "jq-modules/blockui",
    "gzipped": "3KB",
    "raw": "17KB"
  },
  "iscroll": {
    "package": "https://raw.github.com/cubiq/iscroll/master/package.json",
    "src": "https://raw.github.com/cubiq/iscroll/master/src/iscroll.js",
    "name": "iscroll",
    "description": "smooth scrolling for mobile webkit",
    "version": "4.1.9",
    "homepage": "http://cubiq.org/iscroll-4",
    "author": "Matteo Spinelli <> (http://cubiq.org)",
    "keywords": [ "ender", "iscroll", "scrolling", "webkit", "iphone", "android" ],
    "main": "./src/iscroll.js",
    "ender": "./src/ender.js",
    "repository": {
      "type": "git",
      "url": "https://github.com/cubiq/iscroll.git"
    },
    "filename": "iscroll",
    "dirpath": "iscroll",
    "gzipped": "6KB",
    "raw": "33KB"
  },
  "zepto": {
    "package": "https://raw.github.com/lifesinger/zepto/master/package.json",
    "src": "https://raw.github.com/lifesinger/zepto/master/dist/zepto.js",
    "name": "zepto",
    "description": "Zepto is a minimalist JavaScript framework for modern browsers with a largely jQuery-compatible API.",
    "url": "http://zeptojs.com",
    "keywords": [ "dom", "webkit", "util" ],
    "author": "Thomas Fuchs",
    "version": "0.8.0",
    "filename": "zepto",
    "dirpath": "zepto",
    "gzipped": "9KB",
    "raw": "51KB"
  }
});