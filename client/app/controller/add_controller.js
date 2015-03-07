export function addController($state, $http) {
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
}
