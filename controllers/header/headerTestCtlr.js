'use strict';

describe('Controller: headerTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  var ctrl, scope, $state, alertManagementService, rootScope, state, option;
  var store = {
    userInfo: {
      userDetails: {
        'firstName': 'Bill',
        'lastName': 'Rose',
        'roles': [
          "CN=polaris_CEO,OU=groups,OU=polaris_External,OU=polaris,OU=Applications,OU=DCI DEV,OU=SiteMinder,DC=DCI,DC=local"
        ]
      }
    }
  };
  var _localStorage = {};
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$state_, _alertManagementService_) {
    rootScope = $rootScope;
    scope = rootScope.$new();
    alertManagementService = _alertManagementService_;
    $state = _$state_;
    // LocalStorage mock.
    _localStorage.getItem = jasmine.createSpy('getItem').and.callFake(function (key) {
      return JSON.stringify(store[key]);
    });
    _localStorage.setItem = jasmine.createSpy('setItem').and.callFake(function (key, value) {
      store[key] = value;
    });

    _localStorage.userInfo = JSON.stringify(store['userInfo']);
    _localStorage.$default = jasmine.createSpy('$default').and.callFake(function (value) {
      return value;
    });
    spyOn($state, 'go').and.callFake(function () {
      return true;
    });

    spyOn(alertManagementService, 'showAlert').and.callFake(function () {
      return true;
    });
    spyOn(alertManagementService, 'showNotification').and.callFake(function () {
      return true;
    });
    ctrl = $controller('headerController', {
      $scope: scope,
      $localStorage: _localStorage,
      $state: $state,
      alertManagementService: alertManagementService
    });
    state = "";
    option = "";
  }));
  it('headerController should be defined', function () {
    expect(ctrl).toBeDefined();
  });
  describe('Test  the function definition', function () {
    it('fnNotificationsClicked  should be defined', function () {
      expect(scope.fnNotificationsClicked).toBeDefined();
    });
    it('fnAlertsClicked should be defined', function () {
      expect(scope.fnAlertsClicked).toBeDefined();
    });
    it('fnLogoImageClicked should be defined', function () {
      expect(scope.fnLogoImageClicked).toBeDefined();
    });
    it('toNormalCase should be defined', function () {
      expect(scope.toNormalCase).toBeDefined();
    });
    it('fnMenuClicked should be defined', function () {
      scope.fnMenuClicked(state);
      expect(scope.fnMenuClicked).toBeDefined();
    });
    it('fnUserOptionClicked should be defined', function () {
      scope.fnUserOptionClicked(option);
      expect(scope.fnUserOptionClicked).toBeDefined();
    });
    it('fnUserOptionClicked should be defined', function () {
      option = "addChart";
      scope.fnUserOptionClicked(option);
      expect($state.go).toHaveBeenCalledWith("dashboard.addChart");
    });
    it('fnUserOptionClicked should be defined', function () {
      option = "bookmarks"
      scope.fnUserOptionClicked(option);
      expect($state.go).toHaveBeenCalledWith('dashboard.bookmarks');
    });
    xit('fnUserOptionClicked should be defined', function () {
      option = "signout"
      scope.fnUserOptionClicked(option);
      expect($state.go).toHaveBeenCalled();
    });
    it('fnUserOptionClicked should be defined', function () {
      option = "DIY Workflow"
      scope.fnUserOptionClicked(option);
      expect($state.go).toHaveBeenCalledWith('dashboard.diyWorkflow');
    });
  });

  describe('Test the functionalities of fnNotificationsClicked  ', function () {
    it('fnNotificationsClicked  should call alertManagementService.showNotification', function () {
      scope.fnNotificationsClicked();
      expect(alertManagementService.showNotification).toHaveBeenCalled();
    })
  });

  describe('Test the functionalities of fnAlertsClicked ', function () {
    it('fnAlertsClicked should call alertManagementService.showAlert', function () {
      scope.fnAlertsClicked();
      expect(alertManagementService.showAlert).toHaveBeenCalled();
    })
  });

  describe('Test the functionalities of fnLogoImageClicked', function () {
    it('fnLogoImageClicked should call $state.go', function () {
      scope.fnLogoImageClicked();
      expect($state.go).toHaveBeenCalled();
    })
  });
  describe('Test the functionalities of toNormalCase', function () {
    it('toNormalCase should return normal case string', function () {
      var sTest = "testCase";
      expect(scope.toNormalCase(sTest)).toEqual('test Case');
    })
  });
  describe('Test the functionalities of isAdmin', function () {
    it('isAdmin should return true if user role is Admin', function () {
      rootScope.userRole = 'Admin';
      expect(scope.isAdmin()).toBeTruthy();
    });
    it('isAdmin should return false if user role is Not Admin', function () {
      rootScope.userRole = 'NotAdmin';
      expect(scope.isAdmin()).toBeFalsy();
    })
  });
});

