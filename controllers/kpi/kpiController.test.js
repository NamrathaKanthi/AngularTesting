'use strict';

describe('Controller: kpiTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  beforeEach(module('ui.router'));
  var ctrl, scope, chartMenus, $q, kpiDashboardFilterService, timePeriodSelected, btnName;
  var store = {
    userInfo: {
      clientConfig: {
        "KPI_Dashboard_Card": {
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
  chartMenus = {
    'kpi_dashboard': {
      "me": "ME",
      "group": "GROUP",
      "company": "COMPANY",
      "mtd": "MTD",
      "qtd": "QTD",
      "ytd": "YTD",
      "kpi_dashboard_pricing": "Sales Volume Sheet",
      "kpi_dashboard_pricing_realization": "KPI Dashboard Pricing",
      "kpi_dashboard_profitability": "KPI",
      "kpi_dashboard_promotion": "KPI",
      "kpiTimeSeries": "Time Series"
    },
    "controllerParameters": {
      "monthArray": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      "ctrl": "#CTRL: ",
      "search": "Search",
      "Event": "Event",
      "Product": "Product",
      "timePeriod": "Time Period",
      "all": "All"
    }
  };
  var _localStorage = {}, def;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q, _kpiDashboardFilterService_) {
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
    kpiDashboardFilterService = _kpiDashboardFilterService_;
    spyOn(kpiDashboardFilterService, 'getCurrentQuarter').and.callFake(function (monthIndex) {
      return '/views/KPI_Tiles/';
    });
    ctrl = $controller('kpiController', {
      $scope: scope,
      $rootScope: $rootScope,
      $localStorage: _localStorage,
      Constants: _Constants,
      chartMenus: chartMenus
    });
    timePeriodSelected = {};
    btnName = {};
  }));
  it('Controller should be defined', function () {
    expect(ctrl).toBeDefined();
  });
  describe('Test the functions', function () {
    it('fnKpiDashboardFilterByTimePeriod should be defined', function () {
      expect(scope.fnKpiDashboardFilterByTimePeriod).toBeDefined();
    });
    it('fnFilterKPIDashboardBy should be defined', function () {
      expect(scope.fnFilterKPIDashboardBy).toBeDefined();
    });
  });
  describe('Test the functionalities of fnKpiDashboardFilterByTimePeriod', function () {
    it('Expect timePeriodTypeClicked will have qtd', function () {
      scope.fnKpiDashboardFilterByTimePeriod(chartMenus.kpi_dashboard.qtd);
      expect(scope.timePeriodTypeClicked).toEqual(chartMenus.kpi_dashboard.qtd);
    });
    it('Expect timePeriodTypeClicked will have mtd', function () {
      scope.fnKpiDashboardFilterByTimePeriod(chartMenus.kpi_dashboard.mtd);
      expect(scope.timePeriodTypeClicked).toEqual(chartMenus.kpi_dashboard.mtd);
    });
  });
  describe('Test the functionalities of fnFilterKPIDashboardBy', function () {
    it('Expect timePeriodTypeClicked will have qtd', function () {
      scope.fnFilterKPIDashboardBy('ME');
      //Need to expect broadcast have called or not
    });
  });
  describe('Test the functionalities of doKpiDashboardFilter event', function () {
    it('Expect on event got called ', function () {
      scope.$broadcast('doKpiDashboardFilter', {
        selectedList: 'Adams Market',
        type: 'COMPANY'
      });
      expect(scope.type).toEqual('');
    });
    it('Expect on event got called ', function () {
      scope.$broadcast('doKpiDashboardFilter', {
        selectedList: 'Adams Market',
        type: 'ME'
      });
      expect(scope.type).toBe('ME');
      expect(scope.listNames).toEqual(['Adams Market']);
    });

  });
  describe('Test the functionalities of updateBtnSelection event', function () {
    it('Expect on event got called ', function () {
      scope.$broadcast('updateBtnSelection', {
        name: 'ME'
      });
      expect(scope.globalFilterTypeClicked).toEqual('ME');
    });
  });
});

