/*
 * fis3-lint-eslint-noisy
 * fisker Cheung<lionkay@gmail.com>
 */

var linter = require('./');

var testCode = '<br>';
var rules = {
  rules: {
    'tag-self-close': true
  }
};
var file = {
  id: 'test.html',
  realpath: 'test.html'
};

linter(testCode, file, rules);

console.log('should see one warning.');
