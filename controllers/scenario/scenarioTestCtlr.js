'use strict';

describe('Controller: scenarioTestCtlr', function () {
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
    ctrl = $controller('scenarioController', {
      $scope: scope,
      $state: $state
    });
  }));
  it('scenarioController should be defined', function () {
    expect(ctrl).toBeDefined();
  });

  it('scenarioController toPromotion should be defined', function () {
    scope.toPromotion('dashboard.kpiDashboard');
    expect($state.go).toHaveBeenCalled();
  });

  it('scenarioController showPromotion should be defined', function () {
    scope.showPromotion('dashboard.scenarioDetails');
    expect($state.go).toHaveBeenCalled();
  });

  it('scenarioController showPricing should be defined', function () {
    scope.showPricing('dashboard.priceScenario');
    expect($state.go).toHaveBeenCalled();
  });
  it('scenarioController toProfitability should be defined', function () {
    scope.toProfitability('dashboard.kpiDashboard');
    expect($state.go).toHaveBeenCalled();
  });

  it('scenarioController showProfitability should be defined', function () {
    expect(scope.showProfitability()).not.toBeDefined(undefined);
  });

  it('scenarioController hoverPromotionEvent should be defined', function () {
    expect(scope.hoverPromotionEvent()).not.toBeDefined(undefined);
  });
  it('scenarioController hoverPricingEvent should be defined', function () {
    expect(scope.hoverPricingEvent()).not.toBeDefined(undefined);
  });

  it('scenarioController hoverProfitabilityEvent should be defined', function () {
    expect(scope.hoverProfitabilityEvent()).not.toBeDefined(undefined);
  });

});
