'use strict';

describe('Controller: notificationTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  var ctrl, scope, alertManagementService;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _alertManagementService_) {
    scope = $rootScope.$new();
    alertManagementService = _alertManagementService_;
    spyOn(alertManagementService, 'hideAllPopups').and.callFake(function () {
      return true;
    });
    ctrl = $controller('notificationController', {
      $scope: scope,
      alertManagementService: _alertManagementService_
    });
  }));
  it('notificationController should be defined', function () {
    expect(ctrl).toBeDefined();
  });
  describe('Test the function definition', function () {
    it('outDivClickNotif will call alertManagementService.hideAllPopups', function () {
      scope.outDivClickNotif();
      expect(alertManagementService.hideAllPopups).toHaveBeenCalled();
    })
  });
});
