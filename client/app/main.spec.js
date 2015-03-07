/* jshint -W097 */

describe('Controller: AddController', ()=> {
  // load the controller's module
  beforeEach(angular.module('Es6SonApp'));
  var subject = {};
  var scope = {};

  beforeEach(inject([$controller, $rootScope, ()=> {
    scope = $rootScope.$new();
    subject = $controller('AddControler', {
      $scope: scope
    });
  }]));

  it('test one...', () => {
    console.log(subject);
    expect(0).to.equal(0);
  });
});
