import angular from 'angular';
import 'angular-ui-router';

// ここにひたすらAngularJSのコードを書いて行く
var app = angular.module('Es6SonApp', ['ui.router']);

app.controller('MainCtroller', function ($state) {
    this.hello = 'AngularJS';
  });

