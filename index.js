/*
 * fis3-lint-htmlhint
 * fisker Cheung<lionkay@gmail.com>
 */

var HTMLHint = require('htmlhint').HTMLHint;

function readConfig(filename) {
  var fs = require('fs');
  var path = require('path');
  var currentFolder = process.cwd();
  var currentFile;
  var parentFolder;

  do {
    currentFolder = parentFolder || currentFolder;
    currentFile = path.normalize(path.join(currentFolder, filename));
    console.log(currentFile);

    if (fs.existsSync(currentFile)) {
      try {
        return JSON.parse(require('fs').readFileSync(currentFile, 'utf8'));
      }catch(_){
        return;
      }
    }

    parentFolder = path.resolve(currentFolder, '../');
  } while(parentFolder !== currentFolder);
}

var htmlrcConfig = readConfig('.htmlhintrcx');

module.exports = function(content, file, conf){
  if (!content) {
    return;
  }

  var ruleset = conf.rules || htmlrcConfig || {};

  var results = HTMLHint.verify(content, ruleset);
  var errorCount = {};

  results.forEach(function(msg) {
    errorCount[msg.type] = errorCount[msg.type] || 0;
    errorCount[msg.type] ++;
  });

  if (results.length) {
    console.log(HTMLHint.format(results));
  }

  if (errorCount.error) {
    fis.log.error('file lint failed with error [fis3-lint-htmlhint]');
    process.exit(1);
  }

  if (errorCount.warning) {
    fis.log.warn('file lint failed with warning [fis3-lint-htmlhint]');
  }
};


