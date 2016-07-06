/*
 * fis3-lint-htmlhint
 * fisker Cheung<lionkay@gmail.com>
 */

var HTMLHint = require('htmlhint').HTMLHint;

function readConfig(file) {
  var fs = require('fs');
  var path = require("path");
  var currentFolder = process.cwd();
  var filename = path.normalize(path.join(currentFolder, file));
  var parentFolder;

  while(true) {
    filename = path.normalize(path.join(currentFolder, file));
    if (fs.existsSync(filename)) {
      try {
        return JSON.parse(require('fs').readFileSync(filename, 'utf8'));
      }catch(_){
        return;
      }
    }

    parentFolder = path.resolve(currentFolder, '../');
    if (parentFolder === currentFolder) {
      return;
    }
    currentFolder = parentFolder;
  }
}

module.exports = function(content, file, conf){
  if (!content) {
    return;
  }

  var ruleset = conf.rules || readConfig('.htmlhintrc');

  var results = HTMLHint.verify(content, ruleset || {});
  var errorCount = 0;

  results.forEach(function(msg) {
    if (msg.type === 'error') {
      errorCount ++;
    }
  });

  if (results.length) {
    console.log(HTMLHint.format(results));
  }

  if (errorCount) {
    fis.log.error('file did not pass linter[fis3-lint-htmlhint]');
  }
};


