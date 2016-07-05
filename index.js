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
  var results = HTMLHint.verify(content, ruleset);
  var errorLength = 0;

  results.forEach(function(msg) {
    if (msg.type === 'error') {
      errorLength ++;
    }
  });

  if (results && results.length) {
    console.log(HTMLHint.format(results));
  }

  if (errorLength) {
    fis.log.error('file did not pass linter[fis3-lint-htmlhint]');
  }
};

module.exports.defaultOptions = {
  rules: HTMLHint.defaultRuleset
};
