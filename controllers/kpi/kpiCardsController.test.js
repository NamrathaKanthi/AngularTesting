'use strict';

describe('Controller: kpiCardsTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  beforeEach(module('ui.router'));
  var ctrl, scope, chartService, KPIInfo, $q;
  var store = {
    userInfo: {
      clientConfig: {
        "KPIDashboardCard": {
          "primaryParameters": {
            "customerName": "{{Customer Name}}",
            "customerChannel": "{{Customer Level 1}}",
            "yearWeekEndDate": "YEAR({{POS Week End Date}})",
            "quarterWeekEndDate": "QUARTER({{POS Week End Date}})",
            "monthWeekEndDate": "MONTH({{POS Week End Date}})",
            "yearTransactionDate": "YEAR({{Transaction Date}})",
            "quarterTransactionDate": "QUARTER({{Transaction Date}})",
            "monthTranscationDate": "MONTH({{Transaction Date}})"
          }
        }
      }
    }
  };
  var _Constants = {
    isTrusted: true,
    'kpiAlerts': {
      'all': 'rest/alerts',
      'customerNames': 'rest/alerts/custdetails/',
      'customerChannels': 'rest/alerts/channeldetails/'
    }
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
  beforeEach(inject(function ($controller, $rootScope, $q, _$state_, _chartService_) {
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
    chartService = _chartService_;
    spyOn(chartService, 'fnGetKPIURL').and.callFake(function (title) {
      return '/views/KPI_Tiles/';
    });
    ctrl = $controller('kpiCardsController', {
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
    it('formatMetrics should be defined', function () {
      expect(scope.formatMetrics).toBeDefined();
    });
    it('initializeKpiMetrics should be defined', function () {
      expect(scope.initializeKpiMetrics).toBeDefined();
    });
  });
  describe('Test the functionalities of formatMetrics ', function () {
    it('expect the return value is -16.0% for -16%', function () {
      expect(scope.formatMetrics('-16%')).toEqual('-16.0%');
    });
    it('expect the return value is 1.0 for 1M', function () {
      expect(scope.formatMetrics('1M')).toEqual('1.0');
    });
    it('expect the return value is 1.0 for 1K', function () {
      expect(scope.formatMetrics('1K')).toEqual('1.0');
    });
    it('expect the return value is 1200 for 1.2K', function () {
      expect(scope.formatMetrics('1200')).toEqual('1.2K');
    });
    it('expect the return value is 1200000 for 1.2M', function () {
      expect(scope.formatMetrics('1200000')).toEqual('1.2M');
    });
    it('expect the return value is 1200000000 for 1.2B', function () {
      expect(scope.formatMetrics('1200000000')).toEqual('1.2B');
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
    it('expect on of kpiDashboardByTimePeriodFilters to have been called', function () {
      scope.$broadcast('kpiDashboardByTimePeriodFilters', {
        filterValue: 'December',
        type: 'YTD'
      });
    });
  });
});

