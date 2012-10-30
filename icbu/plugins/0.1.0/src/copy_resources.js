var path = require('path');
var devCheck = module.exports = Plugin.create('resourcesCopy');
devCheck.run = function(project, callback) {
  var testDir = path.join(project.baseDirectory, 'tests');
  var exampleDir = path.join(project.baseDirectory, 'examples');

  if (fsExt.existsSync(testDir)) {
    fsExt.copydirSync(testDir, path.join(project.distDirectory, 'tests')); 
  }

  if (fsExt.existsSync(exampleDir)) {
    fsExt.copydirSync(exampleDir, path.join(project.distDirectory, 'examples')); 
  }

  callback();
};
