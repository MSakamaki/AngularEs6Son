import angular from 'angular';
import 'angular-ui-router';

// ここにひたすらAngularJSのコードを書いて行く
var app = angular.module('Es6SonApp', ['ui.router']);

app.config(function($locationProvider, $httpProvider, $urlRouterProvider, $stateProvider) {

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

app.controller('ListController', function($http) {
  var list = this;
  $http.get('http://localhost:8000/api/beans')
    .success(function(data) {
      list.beans = data;
    });
  $http.get('http://localhost:8000/api/regions')
    .success(function(data) {
      list.regions = data;
    });
  list.delete = function(id) {
    $http.delete('http://localhost:8000/api/beans/' + id)
      .success(function() {
        $http.get('http://localhost:8000/api/beans')
          .success(function(data) {
            list.beans = data;
          });
      });
  };
});
app.controller('AddController', function($state, $http) {
  var add = this;
  add.regions = [];
  $http.get('http://localhost:8000/api/regions')
    .success(function(data) {
      add.regions = data;
    });
  add.register = function() {
    $http.post('http://localhost:8000/api/beans', {
      brand: add.bean.brand,
      amount: add.bean.amount,
      importDate: add.bean.importDate && add.bean.importDate.toISOString(),
      region: add.bean.region
    }).success(function() {
      $state.go('app.root.list');
    });
  };
});
app.controller('EditController', function($state, $stateParams, $http) {
  var edit = this;
  edit.regions = [];
  $http.get('http://localhost:8000/api/regions')
    .success(function(data) {
      edit.regions = data;

      $http.get('http://localhost:8000/api/beans/' + $stateParams.id)
        .success(function(data) {
          data.importDate = data.importDate && new Date(data.importDate);
          edit.bean = data;
        });
    });

  edit.update = function() {
    $http.put('http://localhost:8000/api/beans/' + $stateParams.id, {
      brand: edit.bean.brand,
      amount: edit.bean.amount,
      importDate: edit.bean.importDate && edit.bean.importDate.toISOString(),
      region: edit.bean.region
    }).success(function() {
      $state.go('app.root.list');
    });
  };
});
app.filter('dateFormat', function() {
  var lpad = function(value, str, len) {
    var padStr = "";
    var addlen = 0;
    if (value === null) {
      addlen = len;
    } else {
      addlen = parseInt(len) - parseInt(String(value).length);
      padStr = String(value);
    }
    for (var i = 0; i < addlen; i++) {
      padStr = "" + str + padStr;
    }
    return padStr;
  };

  return function(input) {
    var dt = new Date(input);
    return dt.getFullYear() + '/' +
      lpad((dt.getMonth() + 1), '0', 2) + '/' +
      lpad(dt.getDate(), '0', 2);
  };
});
app.filter('regionName', function($http) {
  var region = [];
  $http.get('http://localhost:8000/api/regions')
    .success(function(data) {
      region = data;
    });
  return function(input) {
    var ret = '';
    angular.forEach(region, function(v) {
      if (v.id === input) ret = v.name;
    });
    return ret;
  };
});
app.factory('bean', function() {
  var bean = {};
  return bean;
});
