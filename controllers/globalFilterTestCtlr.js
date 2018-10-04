'use strict';

describe('Controller: globalFilterTestCtlr', function() {
  // load the controller's module
  beforeEach(module('polarisApp'));
  var ctrl, scope,names;
  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('globalFilterController', {
      $scope: scope
    });
    names = [];
  }));
  it('is defined', function() {
    expect(ctrl).toBeDefined();
  });

  it('is defined', function() {
    var names = [{
      'name': 'What are you interested in analyzing?'
    }, {
      'name': 'How long ago whould you like to analyze?'
    }, {
      'name': 'What would you like to filter on?'
    }];
    expect(scope.names).toBeDefined(names);
  });
});
