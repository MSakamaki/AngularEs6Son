export class EditController {
  constructor($state, $stateParams, $http) {
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
  }

  update() {
    $http.put('http://localhost:8000/api/beans/' + $stateParams.id, {
      brand: edit.bean.brand,
      amount: edit.bean.amount,
      importDate: edit.bean.importDate && edit.bean.importDate.toISOString(),
      region: edit.bean.region
    }).success(function() {
      $state.go('app.root.list');
    });
  }
}
