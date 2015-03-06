AngularJS ES6 ハッカソンテンプレート
----


### Get Started

```sh

# jspmをグローバルインストール
npm install -g jspm

git clone https://github.com/MSakamaki/AngularEs6Son.git
cd AngularEs6Son

npm install
jspm install
jspm install angular-ui-router -o "{ main: 'angular-ui-router', 'angular-ui-router': {'deps': ['angular'] } }"

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
