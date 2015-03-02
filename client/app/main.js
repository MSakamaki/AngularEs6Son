import angular from 'angular';
import 'angular-ui-router';

// ここにひたすらAngularJSのコードを書いて行く
var app = angular.module('Es6SonApp', ['ui.router']);

app.config(function($locationProvider, $httpProvider, $urlRouterProvider, $stateProvider){

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/list');

    $stateProvider.state('app', {
        abstract: true,
        url: '/#',
        template: '<div ui-view="header"></div>' +
                  '<div ui-view="contents"></div>' +
                  '<div ui-view="footer"></div>'
      })

    // アプリルート
    .state('app.root', {
      url: '^/',
      abstract: true,
      views: {
        'header@app': {
          templateUrl: 'app/view/header.html'
        },
        'contents@app': {
          templateUrl: 'app/view/home.html'
        },
        'footer@app': {
          templateUrl: 'app/view/footer.html'
        }
      }
    })

    // メンバー一覧
    .state('app.root.list', {
      url: '^/list',
      views: {
        'contents@app': {
          templateUrl: 'app/view/list.html',
          controllerAs: 'list',
          controller: 'ListController'
        }
      }
    })

    // メンバー登録
    .state('app.root.add', {
      url: '^/add',
      views: {
        'contents@app': {
          templateUrl: 'app/view/add.html',
          controllerAs: 'add',
          controller: 'AddController'
        }
      }
    })

    // メンバー編集
    .state('app.root.edit', {
      url: '^/edit/:id',
      views: {
        'contents@app': {
          templateUrl: 'app/view/edit.html',
          controllerAs: 'edit',
          controller: 'EditController'
        }
      }
    });
});

app.controller('ListController', function ($http) {
  var list = this;
  $http.get('http://localhost:8000/api/menbers')
    .success(function(data) {
      list.members = data;
  });
  list.delete = function(id){
    $http.delete('http://localhost:8000/api/menbers/' + id)
    .success(function() {
      $http.get('http://localhost:8000/api/menbers')
      .success(function(data) {
        list.members = data;
      });
    });
  };
});
app.controller('AddController', function ($state, $http) {
  var add = this;
  this.register = function(){
    console.log(add);
    $http.post('http://localhost:8000/api/menbers',
      {name: add.member.name})
      .success(function(){
        $state.go('app.root.list');
      });
  };
});
app.controller('EditController', function ($state, $stateParams, $http) {
  var edit = this;
  $http.get('http://localhost:8000/api/menbers/' + $stateParams.id)
    .success(function(data) {
      edit.member = data;
  });
  edit.update = function(){
    $http.put('http://localhost:8000/api/menbers/' + $stateParams.id,
      {name: edit.member.name})
    .success(function() {
      $state.go('app.root.list');
    });
  };
});

