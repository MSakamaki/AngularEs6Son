import { BEANS_URL, REGIONS_URL } from 'app/urls';

export class EditController {
  constructor($state, $stateParams, $http) {
    this.regions = [];
    $http.get(REGIONS_URL)
      .success(function(data) {
        this.regions = data;

        $http.get(`${BEANS_URL}/${$stateParams.id}`)
          .success(function(data) {
            data.importDate = data.importDate && new Date(data.importDate);
            this.bean = data;
          });
      });
  }

  update() {
    $http.put(`${BEANS_URL}/${$stateParams.id}`, {
      brand: this.bean.brand,
      amount: this.bean.amount,
      importDate: this.bean.importDate && this.bean.importDate.toISOString(),
      region: this.bean.region
    }).success(function() {
      $state.go('app.root.list');
    });
  }
}
