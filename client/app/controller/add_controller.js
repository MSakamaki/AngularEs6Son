import { BEANS_URL, REGIONS_URL } from 'app/urls';

export class AddController {
  constructor($state, $http) {
    var add = this;
    add.regions = [];
    $http.get(REGIONS_URL)
      .success(function(data) {
        add.regions = data;
      });
    add.register = function() {
      $http.post(BEANS_URL, {
        brand: add.bean.brand,
        amount: add.bean.amount,
        importDate: add.bean.importDate && add.bean.importDate.toISOString(),
        region: add.bean.region
      }).success(function() {
        $state.go('app.root.list');
      });
    };
  }
}
