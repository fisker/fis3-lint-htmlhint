/*
 * fis3-lint-htmlhint
 * fisker Cheung<lionkay@gmail.com>
 */

var HTMLHint = require('htmlhint').HTMLHint;

module.exports = function(content, file, conf){
  if (!content) {
    return;
  }

  var ruleset = conf.rules;
  var results = HTMLHint.verify(content, ruleset || {});
  var errorCount = 0;

  results.forEach(function(msg) {
    if (msg.type === 'error') {
      errorCount ++;
    }
  });

  console.log(HTMLHint.format(results));

  if (errorCount) {
    fis.log.error('file did not pass linter[fis3-lint-htmlhint]');
  }
};

module.exports.defaultOptions = {
  rules: HTMLHint.defaultRuleset
};
