'use strict';

describe('Controller: EleviCtrl', function () {

  // load the controller's module
  beforeEach(module('scoalaaltfel2015App'));

  var EleviCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EleviCtrl = $controller('EleviCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
