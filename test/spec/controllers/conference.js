'use strict';

describe('Controller: ConferenceCtrl', function () {

  // load the controller's module
  beforeEach(module('tedxUofT2015App'));

  var ConferenceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConferenceCtrl = $controller('ConferenceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
