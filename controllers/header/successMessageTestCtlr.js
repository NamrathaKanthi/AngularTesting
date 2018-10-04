'use strict';

describe('Controller: successMessageTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  var ctrl, scope, event, args;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, Constants) {
    scope = $rootScope.$new();
    ctrl = $controller('successMessageController', {
      $scope: scope,
      Constants: Constants
    });
    event = "";
    args = {
      data: {
        status: 200,
        data: {
          bookmarksId: ""
        }
      }
    }
  }));
  it('successMessageController should be defined', function () {
    expect(ctrl).toBeDefined();
  });
  it('bookmarkSuccess should be defined', function () {
    scope.$broadcast('bookmarkSuccess', { data: "data" });
    expect(scope.data).toBe(undefined);
  });
});
