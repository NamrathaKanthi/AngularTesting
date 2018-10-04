'use strict';

describe('Controller: navigationTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  var ctrl, scope, rootScope, $state,chartNavigationService;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$state_,_chartNavigationService_) {
    rootScope = $rootScope;
    chartNavigationService=_chartNavigationService_;
    scope = $rootScope.$new();
    $state = _$state_;
    spyOn($state, 'go').and.callFake(function () {
      return true;
    });
    spyOn(chartNavigationService,'getMenuNameByHashValue').and.callFake(function(next){
      return next;
    });
    ctrl = $controller('navigationController', {
      $rootScope: rootScope,
      $scope: scope,
      $state: $state,
      chartNavigationService:chartNavigationService
    });
  }));
  it('navigationController should be defined', function () {
    expect(ctrl).toBeDefined();
  });
  describe('Test the functions', function () {
    it('updateNextChartChoice should be defined', function () {
      expect(scope.updateNextChartChoice).toBeDefined();
    });
    it('fnNavigateTo should be defined', function () {
      expect(scope.fnNavigateTo).toBeDefined();
    });
  });
  describe('Test the functionalities of fnNavigateTo',function(){
    it('expect the $state.go should be called if we call fnNavigateTo with Benchmark Waterfall', function () {
      scope.fnNavigateTo('Benchmark Waterfall');
      expect($state.go).toHaveBeenCalled();
    });
    it('expect the $state.go should be called if we call fnNavigateTo with Driver Specific Profitability', function () {
      scope.fnNavigateTo('Driver Specific Profitability');
      expect($state.go).toHaveBeenCalled();
    });
    it('expect the $state.go should be called if we call fnNavigateTo with Base & Incremental Sales', function () {
      scope.fnNavigateTo('Base & Incremental Sales');
      expect($state.go).toHaveBeenCalled();
    });
    it('expect the $state.go should be called if we call fnNavigateTo with Price Ladders', function () {
      scope.fnNavigateTo('Price Ladders');
      expect($state.go).toHaveBeenCalled();
    });
    it('expect the $state.go should be called if we call fnNavigateTo with Premium vs Market Share Volume', function () {
      scope.fnNavigateTo('Premium vs Market Share Volume');
      expect($state.go).toHaveBeenCalled();
    });
    it('expect the $state.go should be called if we call fnNavigateTo with Event Evaluator', function () {
      scope.fnNavigateTo('Event Evaluator');
      expect($state.go).toHaveBeenCalled();
    });
    it('expect the $state.go should be called if we call fnNavigateTo with Investment Performance', function () {
      scope.fnNavigateTo('Investment Performance');
      expect($state.go).toHaveBeenCalled();
    });
  });
  // describe('Test the locationChangeSuccess event',function(){
  //   it('on locationChangeSuccess should call chartNavigationService',function(){
  //     scope.$broadcast('locationChangeSuccess',{},'Customer Margin Spread');
  //     expect(chartNavigationService.getMenuNameByHashValue).toHaveBeenCalledWith('');
  //     //expect(scope.subMenuSelected).toBe('Customer Margin Spread')
  //   })
  // })
});
