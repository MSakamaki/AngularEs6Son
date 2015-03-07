AngularJS ES6 ハッカソンテンプレート
----

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/youchan/AngularEs6Son?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

### Get Started

```sh

# jspmをグローバルインストール
npm install -g jspm

git clone https://github.com/MSakamaki/AngularEs6Son.git
cd AngularEs6Son

npm install
jspm inject
jspm install

```

### es6 transpiler use switching

```sh
jspm dl-loader --Babel
# or
jspm dl-loader --traceur
```

### using js libs CDN Settings

```sh
# use CDN
jspm setmode remote
# use local javascript file
jspm setmode local
```

### gulp tasks

##### use command

```sh
gulp help
```

### 補足資料

 + [jspm公式ページ](http://jspm.io/)
 + Codeing
   + [Effective transpiling of ES6](https://gist.github.com/rauchg/93d8b831e286bcb30d84)
 + ES6
   + [ECMA-262 6th Draft](https://people.mozilla.org/~jorendorff/es6-draft.html#)
   + [ES6 features](https://github.com/lukehoban/es6features)
   + [SublimeText ES6 Syntax](https://packagecontrol.io/packages/JavaScriptNext%20-%20ES6%20Syntax)
   + [babeljs--6to5-- Features](https://babeljs.io/docs/learn-es6/)
   + [traceur Features](https://github.com/google/traceur-compiler/wiki/LanguageFeatures)
   + [ES6の判りやすい解説](http://ilikekillnerds.com/2015/02/a-guide-to-es6-classes/)

