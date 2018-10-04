'use strict';

describe('Controller: dashboardTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  var ctrl, scope,$state,rootScope;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_$state_) {
    rootScope = $rootScope;
    scope = $rootScope.$new();
    $state = _$state_;
    $state.current.name="currentState";
    ctrl = $controller('dashboardController', {
      $scope: scope,
      $state:$state
    });
  }));
  it('dashboardController should be defined', function () {
    expect(ctrl).toBeDefined();
  });
  describe('Test the function definition',function(){
    it('fnGetCenterChartAreaClass should be defined',function(){
      expect(scope.fnGetCenterChartAreaClass).toBeDefined();
    });
    it('fnIsPrimaryConfigVisible  should be defined',function(){
      expect(scope.fnIsPrimaryConfigVisible ).toBeDefined();
    });
    it('fnGetColWidth   should be defined',function(){
      expect(scope.fnGetColWidth).toBeDefined();
    });
    it('currentState should be defined',function(){
      expect(rootScope.currentState).toBeDefined();
    });
  });
  describe('Test the functionalites of fnGetCenterChartAreaClass',function(){
    it('fnGetCenterChartAreaClass should return kpi-chart-center-content if current state name is dashboard.kpiDashboard',function(){
      $state.current = {name:"dashboard.kpiDashboard"};
      expect(scope.fnGetCenterChartAreaClass()).toEqual('kpi-chart-center-content');
    });
    it('fnGetCenterChartAreaClass should return kpi-chart-center-content if current state name is dashboard.landingPage',function(){
      $state.current = {name:"dashboard.landingPage"};
      expect(scope.fnGetCenterChartAreaClass()).toEqual('kpi-chart-center-content-landingPage');
    });
    it('fnGetCenterChartAreaClass should return kpi-chart-center-content if current state name is dashboard.scenario',function(){
      $state.current = {name:"dashboard.scenario"};
      expect(scope.fnGetCenterChartAreaClass()).toEqual('kpi-chart-center-content');
    });
    it('fnGetCenterChartAreaClass should return kpi-chart-center-content if current state name is dashboard.decisionWorkflow',function(){
      $state.current = {name:"dashboard.decisionWorkflow"};
      expect(scope.fnGetCenterChartAreaClass()).toEqual('kpi-chart-center-content');
    });
    it('fnGetCenterChartAreaClass should return kpi-chart-center-content if current state name is dashboard.decisionWorkflowPricing',function(){
      $state.current = {name:"dashboard.decisionWorkflowPricing"};
      expect(scope.fnGetCenterChartAreaClass()).toEqual('kpi-chart-center-content');
    });
    it('fnGetCenterChartAreaClass should return kpi-chart-center-content if current state name is dashboard.decisionWorkflowPromotions',function(){
      $state.current = {name:"dashboard.decisionWorkflowPromotions"};
      expect(scope.fnGetCenterChartAreaClass()).toEqual('kpi-chart-center-content');
    });
    it('fnGetCenterChartAreaClass should return kpi-chart-center-content if current state name is dashboard.decisionWorkflowProfitability',function(){
      $state.current = {name:"dashboard.decisionWorkflowProfitability"};
      expect(scope.fnGetCenterChartAreaClass()).toEqual('kpi-chart-center-content');
    });
    it('fnGetCenterChartAreaClass should return kpi-chart-center-content if current state name is dashboard.changeSecurityQuestions',function(){
      $state.current = {name:"dashboard.changeSecurityQuestions"};
      expect(scope.fnGetCenterChartAreaClass()).toEqual('kpi-chart-center-content');
    });
    it('fnGetCenterChartAreaClass should return kpi-chart-center-content if current state name is dashboard.bookmarks',function(){
      $state.current = {name:"dashboard.bookmarks"};
      expect(scope.fnGetCenterChartAreaClass()).toEqual('kpi-chart-center-content');
    });
    it('fnGetCenterChartAreaClass should return chart-center-content if current state name is other than items in fullCenterChartStates',function(){
      $state.current = {name:"dashboard"};
      expect(scope.fnGetCenterChartAreaClass()).toEqual('chart-center-content');
    });
  });

  describe('Test the functionalites of fnIsPrimaryConfigVisible',function(){
    it('fnIsPrimaryConfigVisible  should return false if current state name is dashboard.kpiDashboard',function(){
      $state.current = {name:"dashboard.kpiDashboard"};
      expect(scope.fnIsPrimaryConfigVisible()).toEqual(false);
    });
    it('fnIsPrimaryConfigVisible  should return false if current state name is dashboard.landingPage',function(){
      $state.current = {name:"dashboard.landingPage"};
      expect(scope.fnIsPrimaryConfigVisible()).toEqual(false);
    });
    it('fnIsPrimaryConfigVisible  should return false if current state name is dashboard.scenario',function(){
      $state.current = {name:"dashboard.scenario"};
      expect(scope.fnIsPrimaryConfigVisible()).toEqual(false);
    });
    it('fnIsPrimaryConfigVisible  should return false if current state name is dashboard.decisionWorkflow',function(){
      $state.current = {name:"dashboard.decisionWorkflow"};
      expect(scope.fnIsPrimaryConfigVisible()).toEqual(false);
    });
    it('fnIsPrimaryConfigVisible  should return false if current state name is dashboard.decisionWorkflowPricing',function(){
      $state.current = {name:"dashboard.decisionWorkflowPricing"};
      expect(scope.fnIsPrimaryConfigVisible()).toEqual(false);
    });
    it('fnIsPrimaryConfigVisible  should return false if current state name is dashboard.decisionWorkflowPromotions',function(){
      $state.current = {name:"dashboard.decisionWorkflowPromotions"};
      expect(scope.fnIsPrimaryConfigVisible()).toEqual(false);
    });
    it('fnIsPrimaryConfigVisible should return false if current state name is dashboard.decisionWorkflowProfitability',function(){
      $state.current = {name:"dashboard.decisionWorkflowProfitability"};
      expect(scope.fnIsPrimaryConfigVisible()).toEqual(false);
    });
    it('fnIsPrimaryConfigVisible should return false if current state name is dashboard.changeSecurityQuestions',function(){
      $state.current = {name:"dashboard.changeSecurityQuestions"};
      expect(scope.fnIsPrimaryConfigVisible()).toEqual(false);
    });
    it('fnIsPrimaryConfigVisible should return false if current state name is dashboard.bookmarks',function(){
      $state.current = {name:"dashboard.bookmarks"};
      expect(scope.fnIsPrimaryConfigVisible()).toEqual(false);
    });
    it('fnIsPrimaryConfigVisible should return true if current state name is other than items in primaryConfigNotVisibleStates ',function(){
      $state.current = {name:"dashboard"};
      expect(scope.fnIsPrimaryConfigVisible()).toEqual(true);
    });
  });

  describe('Test the functionalites of fnGetColWidth ',function(){
    it('fnGetColWidth should return col-sm-12 if current state name is dashboard.kpiDashboard',function(){
      $state.current = {name:"dashboard.kpiDashboard"};
      expect(scope.fnGetColWidth()).toEqual('col-sm-12');
    });
    it('fnGetColWidth   should return col-sm-12 if current state name is dashboard.landingPage',function(){
      $state.current = {name:"dashboard.landingPage"};
      expect(scope.fnGetColWidth()).toEqual('col-sm-12');
    });
    it('fnGetColWidth should return col-sm-12 if current state name is dashboard.scenario',function(){
      $state.current = {name:"dashboard.scenario"};
      expect(scope.fnGetColWidth()).toEqual('col-sm-12');
    });
    it('fnGetColWidth  should return col-sm-12 if current state name is dashboard.decisionWorkflow',function(){
      $state.current = {name:"dashboard.decisionWorkflow"};
      expect(scope.fnGetColWidth()).toEqual('col-sm-12');
    });
    it('fnGetColWidth  should return col-sm-12 if current state name is dashboard.decisionWorkflowPricing',function(){
      $state.current = {name:"dashboard.decisionWorkflowPricing"};
      expect(scope.fnGetColWidth()).toEqual('col-sm-12');
    });
    it('fnGetColWidth  should return col-sm-12 if current state name is dashboard.decisionWorkflowPromotions',function(){
      $state.current = {name:"dashboard.decisionWorkflowPromotions"};
      expect(scope.fnGetColWidth()).toEqual('col-sm-12');
    });
    it('fnGetColWidth should return col-sm-12 if current state name is dashboard.decisionWorkflowProfitability',function(){
      $state.current = {name:"dashboard.decisionWorkflowProfitability"};
      expect(scope.fnGetColWidth()).toEqual('col-sm-12');
    });
    it('fnGetColWidth should return col-sm-12 if current state name is dashboard.changeSecurityQuestions',function(){
      $state.current = {name:"dashboard.changeSecurityQuestions"};
      expect(scope.fnGetColWidth()).toEqual('col-sm-12');
    });
    it('fnGetColWidth should return col-sm-12 if current state name is dashboard.bookmarks',function(){
      $state.current = {name:"dashboard.bookmarks"};
      expect(scope.fnGetColWidth()).toEqual('col-sm-12');
    });
    it('fnGetColWidth should return col-sm-10 if current state name is other than items in fullColWidthStates ',function(){
      $state.current = {name:"dashboard"};
      expect(scope.fnGetColWidth()).toEqual('col-sm-10');
    });
  });

  describe('Test the functionalites of subConfigArrow event', function () {
    it('expect on of subConfigArrow event been called ', function () {
      scope.$broadcast('subConfigArrow',{displayArrow:"display_arrow"});
      expect(scope.displayArrow).toEqual('display_arrow');
    })
  });

  describe('Test the functionalites of currentState', function () {
    it('Should return current state name', function () {
      expect(rootScope.currentState()).toEqual('currentState')
    })
  });
});
