
var https = require('https');
var url = require('url');

const API_URL = 'https://api.github.com/repos/';


exports.getLatestVersion = function(repos, callback) {

  getTags(repos, function(tags) {
    var names = tags.map(function(tag) {
      return tag.name.replace(/[^\.\d]/g, '');
    });

    callback(names.sort().pop());
  });

};


function getTags(repos, callback) {
  var uri = API_URL + repos + '/tags';
  console.log('  ... Fetching ' + uri);

  var req = https.get(url.parse(uri), function(res) {
    if (res.statusCode === 200) {
      var data = '';

      res.on('data', function(chuck) {
        data += chuck;
      });
      res.on('end', function() {
        callback(JSON.parse(data));
      });
    }
    else {
      throw 'Error: No data received from ' + uri;
    }
  });

  req.on('error', function(e) {
    throw 'Got error: ' + e.message;
  });
}
