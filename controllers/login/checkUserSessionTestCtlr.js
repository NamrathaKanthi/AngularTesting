'use strict';

describe('Controller: checkUserSessionTestCtlr', function() {
  // load the controller's module
  beforeEach(module('polarisApp'));
  var ctrl, scope;
  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('checkUserSession', {
      $scope: scope
    });
  }));
  it('checkUserSession is defined', function() {
    expect(ctrl).toBeDefined();
  });
});
