import { BEANS_URL, REGIONS_URL } from 'app/urls';

export class EditController {
  constructor($state, $stateParams, $http) {
    var edit = this;
    edit.regions = [];
    $http.get(REGIONS_URL)
      .success(function(data) {
        edit.regions = data;

        $http.get(`${BEANS_URL}/${$stateParams.id}`)
          .success(function(data) {
            data.importDate = data.importDate && new Date(data.importDate);
            edit.bean = data;
          });
      });
  }

  update() {
    $http.put(`${BEANS_URL}/${$stateParams.id}`, {
      brand: edit.bean.brand,
      amount: edit.bean.amount,
      importDate: edit.bean.importDate && edit.bean.importDate.toISOString(),
      region: edit.bean.region
    }).success(function() {
      $state.go('app.root.list');
    });
  }
}
