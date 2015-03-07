import { REGIONS_URL } from 'app/urls';

export function regionNameFilter($http) {
  var region = [];
  $http.get(REGIONS_URL)
    .success((data) => region = data)
  return (input) => {
    var ret = ''
    angular.forEach(region, (v) => { if (v.id === input) ret = v.name })
    return ret
  }
}
