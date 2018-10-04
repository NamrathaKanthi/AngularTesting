'use strict';

describe('Controller: landingPageTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  var ctrl, scope, $state;
  var store = {
    userInfo: {
      userDetails: {
        firstName: 'Bill',
        lastName: 'Rose',
        company: 'B',
        email: 'BillRose@deloitte.com'
      }
    }
  };
  var _localStorage = {};
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$state_) {
    scope = $rootScope.$new();
    $state = _$state_;

    spyOn($state, 'go').and.callFake(function () {
      return true;
    });

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
    ctrl = $controller('landingPageController', {
      $scope: scope,
      $state: $state,
      $localStorage: _localStorage,
    });
  }));
  it('landingPageController is defined', function () {
    expect(ctrl).toBeDefined();
  });
  describe('Test the function definition', function () {
    it('fnNavigateTo should be defined', function () {
      expect(scope.fnNavigateTo).toBeDefined();
    });
  });

  describe('Test the fnNavigateTo functionalities ', function () {
    it('fnNavigateTo should be defined', function () {
      var stateName = 'state_name';
      scope.fnNavigateTo(stateName);
      expect($state.go).toHaveBeenCalledWith('dashboard.state_name', Object({ stateID: '0' }));
    });
  });

  describe('Test the fnHighlightUserMessage functionalities ', function () {
    it('fnHighlightUserMessage should be defined', function () {
      scope.fnHighlightUserMessage();
      expect(scope.fnHighlightUserMessage).toBeDefined();
    });
  });




});
