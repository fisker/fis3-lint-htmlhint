# fis3-lint-htmlhint

A lint plugin for fis3 to validate html file.

## usage

    $ npm i -g fis3-lint-htmlhint

```
// fis-conf.js

var htmlhintConf = {
    rules: {
        "tagname-lowercase": true,
        "attr-lowercase": true,
        "attr-value-double-quotes": true,
        "doctype-first": true,
        "tag-pair": true,
        "spec-char-escape": true,
        "id-unique": true,
        "src-not-empty": true,
        "attr-no-duplication": true,
        "title-require": true
    }
};

fis.match('*.html', {
    lint: fis.plugin('htmlhint', htmlhintConf)
});
```

[more options](https://github.com/yaniswang/HTMLHint/wiki/Usage)

## how to use .htmlhintrc
it seems HTMLHint Module only support .htmlhintrc in cli, anyway we can use this hack
```
// fis-conf.js

// first we create a function like this
function readConfig(file) {
    try {
      return JSON.parse(require('fs').readFileSync(file));
    }catch(_){}
}

// then
var htmlhintConf = {
  rules: readConfig('.htmlhintrc'),
};
```


## links
fis3: [http://fis.baidu.com/](http://fis.baidu.com/)


htmlhint: [http://htmlhint.com/](http://htmlhint.com/)
