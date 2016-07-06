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

## config with .htmlhintrc (Recommended)
simply leave htmlhintConf.rules blank (null OR undefined, NOT *{}*)
```
// fis-conf.js
var htmlhintConf = {};

// or
fis.match('*.html', {
  lint: fis.plugin('htmlhint')
});
```

## links
fis3: [http://fis.baidu.com/](http://fis.baidu.com/)

htmlhint: [http://htmlhint.com/](http://htmlhint.com/)
