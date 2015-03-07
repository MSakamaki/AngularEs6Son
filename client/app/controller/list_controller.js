import { BEANS_URL, REGIONS_URL } from 'app/urls';

export class ListController {
  constructor($http) {
    $http.get(BEANS_URL)
      .success((data) => this.beans = data)
    $http.get(REGIONS_URL)
      .success((data) => this.regions = data)
  }

  delete(id) {
    $http.delete(`${BEANS_URL}/${id}`)
      .success(() => {
        $http.get(BEANS_URL)
          .success((data) => this.beans = data)
      })
  }
}
