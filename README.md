jspmプロジェクト雛形
----

JSフレームワーク非依存のプロジェクトテンプレート

| Project | status |
| ------ | ------ |
| Build Status | [![Build Status](https://travis-ci.org/MSakamaki/gulpJSPM.svg?branch=master)](https://travis-ci.org/MSakamaki/gulpJSPM) |
| Code Climate | [![Code Climate](https://codeclimate.com/github/MSakamaki/gulpJSPM/badges/gpa.svg)](https://codeclimate.com/github/MSakamaki/gulpJSPM) |
| Dependency Status | [![Dependency Status](https://gemnasium.com/MSakamaki/gulpJSPM.svg)](https://gemnasium.com/MSakamaki/gulpJSPM) |
| Application Covoiturage | [![Test Coverage](https://codeclimate.com/github/MSakamaki/gulpJSPM/badges/coverage.svg)](https://codeclimate.com/github/MSakamaki/gulpJSPM) |

### Get Started

```sh

# jspmをグローバルインストール
npm install -g jspm

git clone https://github.com/MSakamaki/gulpJSPM
cd gulpJSPM

npm install
jspm install

```

### es6 transpiler use switching

```sh
jspm dl-loader --6to5
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
 + 説明は`gulp/taskDescription.json`に書く

### Roadmap

 + **Develop**
    + [x] ライブリロード開発
 + **DOCUMENT** [yuidoc](http://yui.github.io/yuidoc/)
    + [x] ドキュメントを作成＆表示(ライブリロード作成)
    + [x] ドキュメントを作成
 + **TEST**
    + [x] karmaの実行
    + [x] End to End Test
    + [ ] apiに対するテスト
 + **REPORT**
    + [x] covorage
      + [ ] [jspm covorage][covorage report optimization](https://github.com/Workiva/karma-jspm/issues/22)
      + [x] [isparta es6(6to5) covorage](https://github.com/douglasduteil/isparta)
    + [ ] software metrix(plato)
      + [ ] [plato](https://github.com/es-analysis/plato/issues/127)
 + **BUILD**
    + [ ] build task
    + [ ] altJS対応
    + [ ] cssプリプロセッサ系(sass/less)
    + [ ] minify
 + **OPTION**
   + [ ] 環境別動作
     + [ ] `--env=unit` 単体テスト用の設定ファイルを使う
     + [ ] `--env=it` 結合テスト用の設定ファイルを使う
     + [ ] `--env=releace` リリース用の設定ファイルを使う
 + cross platform
   + [ ] Firefox OS アプリ対応
     + [x] Firefox OSエミュレータ起動
     + [ ] ライブリロード開発
     + [ ] デプロイ
   + [ ] Cordova対応
   + [ ] appnium

## 参考資料

 + [jspm公式ページ](http://jspm.io/)
 + [BrowserSync](http://www.browsersync.io/)
 + [React Webapp Starter kit](https://github.com/kriasoft/react-starter-kit)
 + [react-jspm](https://github.com/tinkertrain/jspm-react)
 + [JSファイル以外のimport](https://github.com/systemjs/systemjs)
 + [coverage](https://github.com/Workiva/karma-jspm/issues/22)
 + [Aurelia Skeleton](https://github.com/aurelia/skeleton-navigation)
 + gulp
   + [Gulp Delete files and folders](https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md)
   + [help](https://www.npmjs.com/package/gulp-help)
 + ES6
   + [ES6 features](https://github.com/lukehoban/es6features)
   + [SublimeText ES6 Syntax](https://packagecontrol.io/packages/JavaScriptNext%20-%20ES6%20Syntax)
   + [babeljs--6to5-- Features](https://babeljs.io/docs/learn-es6/)
   + [traceur Features](https://github.com/google/traceur-compiler/wiki/LanguageFeatures)
 + firefox os
   + [node firefox os](http://nicola.github.io/node-fxos/)
   + [node firefox client](https://github.com/harthur/firefox-client)
 + covorage
   + [isparta(es6 covorage tool)](https://github.com/douglasduteil/isparta)
   + [istanbul](https://github.com/gotwarlost/istanbul)
   + [ismailia(old es6 covorage tool)](https://github.com/Spote/ismailia)

```sh
# nodeのes6対応調べるコマンド
nodebrew exec v0.11.14 node --v8-options | grep harmony

#ES6ベースのnode v.0.11.*を使う場合(例：nodebrewを使用する場合)
nodebrew exec v0.11.14 node --harmony node_modules/.bin/gulp
```