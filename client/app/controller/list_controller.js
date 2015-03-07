export class ListController {
  constructor($http) {
    var list = this;
    $http.get('http://localhost:8000/api/beans')
      .success(function(data) {
        list.beans = data;
      });
    $http.get('http://localhost:8000/api/regions')
      .success(function(data) {
        list.regions = data;
      });
  }

  delete(id) {
    $http.delete('http://localhost:8000/api/beans/' + id)
      .success(function() {
        $http.get('http://localhost:8000/api/beans')
          .success(function(data) {
            list.beans = data;
          });
      });
  }
}
