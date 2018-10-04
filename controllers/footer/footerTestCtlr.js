'use strict';

describe('Controller: footerTestCtrl', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  var ctrl, scope,
    ngDialogInstance = {
      openConfirm: jasmine.createSpy('ngDialogInstance.open')
    };
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('footerController', {
      $scope: scope
    });
  }));
  it('footerController should be defined', function () {
    expect(ctrl).toBeDefined();
  });
  describe('Test the function definition', function () {
    it('exportToggle should be defined', function () {
      expect(scope.exportToggle).toBeDefined();
    });
    it('openTerm should be defined', function () {
      expect(scope.openTerm).toBeDefined();
    });
    it('openPrivacy should be defined', function () {
      expect(scope.openPrivacy).toBeDefined();
    });
  });
  describe('Test the openTerm functionality', function () {
    it('openTerm should open modal pop up', function () {
      ngDialogInstance.openConfirm();
      scope.openTerm();
      expect(ngDialogInstance.openConfirm).toHaveBeenCalled()
    })
  });
  describe('Test the openPrivacy functionality', function () {
    it('openPrivacy should open modal pop up', function () {
      ngDialogInstance.openConfirm();
      scope.openPrivacy();
      expect(ngDialogInstance.openConfirm).toHaveBeenCalled()
    })
  });
  describe('Test the exportToggle functionality', function () {
    it('exportToggle should be called when exportToggle is called', function () {
      spyOn(scope,'exportToggle').and.callFake(function(){
        return true;
      });
      scope.exportToggle();
      expect(scope.exportToggle).toHaveBeenCalled()
    })
  });
});
