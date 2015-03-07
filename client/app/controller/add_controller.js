import { BEANS_URL, REGIONS_URL } from 'app/urls';

export class AddController {
  constructor($state, $http) {
    add.regions = [];
    $http.get(REGIONS_URL)
      .success(function(data) {
        this.regions = data;
      });
    this.register = function() {
      $http.post(BEANS_URL, {
        brand: this.bean.brand,
        amount: this.bean.amount,
        importDate: this.bean.importDate && this.bean.importDate.toISOString(),
        region: this.bean.region
      }).success(function() {
        $state.go('app.root.list');
      });
    };
  }
}
