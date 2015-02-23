import angular from 'angular';

// ここにひたすらAngularJSのコードを書いて行く
var app = angular.module('Es6SonApp', []);

app.controller('MainCtroller', function ($scope) {
    this.hello = 'AngularJS';
  });

