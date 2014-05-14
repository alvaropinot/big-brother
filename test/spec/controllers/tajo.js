'use strict';

describe('Controller: TajoCtrl', function () {

  // load the controller's module
  beforeEach(module('bigBrotherApp'));

  var TajoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TajoCtrl = $controller('TajoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
