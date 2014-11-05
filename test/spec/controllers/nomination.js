'use strict';

describe('Controller: NominationCtrl', function () {

  // load the controller's module
  beforeEach(module('tedxUofT2015App'));

  var NominationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NominationCtrl = $controller('NominationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
