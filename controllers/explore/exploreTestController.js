'use strict';

describe('Controller: exploreController', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  var ctrl, scope, $state;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$state_) {
    scope = $rootScope.$new();
    $state = _$state_;
    spyOn($state, 'go').and.callFake(function () {
      return true;
    });
    ctrl = $controller('exploreController', {
      $scope: scope,
      $state: $state
    });
  }));
  it('exploreController should be defined', function () {
    expect(ctrl).toBeDefined();
  });

  it('exploreController fnNavigateTo should be defined', function () {
    scope.fnNavigateTo('dashboard');
    expect($state.go).toHaveBeenCalled();
    expect(scope.fnNavigateTo).toBeDefined();
  });

  it('exploreController fnHighlightUserMessage should be defined', function () {
    scope.fnNavigateTo();
    expect(scope.fnNavigateTo()).not.toBeDefined();
  });
});
