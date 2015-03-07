import { BEANS_URL, REGIONS_URL } from 'app/urls';

export class EditController {
  constructor($state, $stateParams, $http) {
    this.regions = []
    $http.get(REGIONS_URL)
      .success((data) => {
        this.regions = data

        $http.get(`${BEANS_URL}/${$stateParams.id}`)
          .success((data) => {
            data.importDate = data.importDate && new Date(data.importDate)
            this.bean = data
          })
      });
  }

  update() {
    $http.put(`${BEANS_URL}/${$stateParams.id}`, {
      brand: this.bean.brand,
      amount: this.bean.amount,
      importDate: this.bean.importDate && this.bean.importDate.toISOString(),
      region: this.bean.region
    }).success(() => $state.go('app.root.list'))
  }
}
