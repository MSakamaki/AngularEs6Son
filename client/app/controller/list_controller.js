import { BEANS_URL, REGIONS_URL } from 'app/urls';

export class ListController {
  constructor($http) {
    var list = this;
    $http.get(BEANS_URL)
      .success(function(data) {
        list.beans = data;
      });
    $http.get(REGIONS_URL)
      .success(function(data) {
        list.regions = data;
      });
  }

  delete(id) {
    $http.delete(`${BEANS_URL}/${id}`)
      .success(function() {
        $http.get(BEANS_URL)
          .success(function(data) {
            list.beans = data;
          });
      });
  }
}
