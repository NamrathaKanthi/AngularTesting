'use strict';

describe('Controller: kpiProfitabilityTestCtlr', function() {
  // load the controller's module
  beforeEach(module('polarisApp'));
  beforeEach(module('ui.router'));
  var ctrl, scope, chartService, KPIInfo, $q;
  var store = {
    userInfo: {
      clientConfig: {
        "KPIDashboardProfitability": {
          "primaryParameters": {
            "customerName": "{{Customer Name}}",
            "customerChannel": "{{Customer Level 1}}",
            "yearTranscationDate": "YEAR({{Transaction Date}})",
            "quarterTranscationDate": "QUARTER({{Transaction Date}})",
            "monthTranscationDate": "MONTH({{Transaction Date}})",
            "timePeriodParameter": "#CTRL: Date Control"
          }
        }
      }
    }
  };
  var _Constants = {
    isTrusted: true
  };
  KPIInfo = {
    "kpiDashboardButtons": {
      "me": "ME",
      "group": "GROUP",
      "company": "COMPANY",
      "mtd": "MTD",
      "qtd": "QTD",
      "ytd": "YTD"
    }
  };
  var _localStorage = {}, $state, def;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, restAPIService, $q, _$state_, _chartService_) {
    scope = $rootScope.$new();
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
    $state = _$state_;
    spyOn($state, 'go').and.callFake(function () {
      return true;
    });
    chartService=_chartService_;
    spyOn(chartService, 'fnGetKPIURL').and.callFake(function (title) {
      return '/views/KPI_Tiles/';
    });
    ctrl = $controller('kpiProfitabilityController', {
      $scope: scope,
      $rootScope: $rootScope,
      $localStorage: _localStorage,
      Constants: _Constants,
      chartService: chartService,
      KPIInfo: KPIInfo,
      $state: {}
    });
  }));
  it('Controller should be defined', function () {
    expect(ctrl).toBeDefined();
  });
  describe('Test the functions', function () {
    it('initializeProfitabilityDashboard should be defined', function () {
      expect(scope.initializeProfitabilityDashboard).toBeDefined();
    });
  });
  xdescribe('Test the functionalities of initializeProfitabilityDashboard', function () {
    it('expect the usableAlerts should have only one object as Negative ROI event is unchecked', function () {
      scope.initializeProfitabilityDashboard();
      expect(chartService.fnGetKPIURL).toHaveBeenCalled();
    });
  });
  describe('Test the functionalities of doKpiDashboardFilter event ', function () {
    it('expect on of doKpiDashboardFilter to have been called', function () {
      scope.$broadcast('doKpiDashboardFilter', {
        selectedList: 'Adams Market',
        type: 'ME'
      });
    });
    it('expect on of doKpiDashboardFilter to have been called', function () {
      scope.$broadcast('doKpiDashboardFilter', {
        selectedList: 'Adams Market',
        type: 'COMPANY'
      });
    });
  });
  describe('Test the functionalities of kpiDashboardByTimePeriodFilters event ', function () {
    xit('expect on of kpiDashboardByTimePeriodFilters to have been called', function () {
      scope.$broadcast('kpiDashboardByTimePeriodFilters', {
        filterValue :'December',
        type: 'YTD'
      });
    });
  });
});
