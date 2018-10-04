'use strict';

describe('Controller: kpiPricingTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  beforeEach(module('ui.router'));
  var ctrl, scope, KPIInfo, $q, kpiDashboardFilterService;
  var store = {
    userInfo: {
      clientConfig: {
        "KPIDashboardPricing": {
          "workbookName": "Sales Volume Sheet",
          "primaryParameters": {
            "customerName": "{{Customer Name}}",
            "customerChannel": "{{Customer Level 1}}",
            "quarterPOSWeekEndDate": "QUARTER({{POS Week End Date}})",
            "monthPOSWeekEndDate": "MONTH({{POS Week End Date}})",
            "relativePriceLabel": "AGG(#CALC: Relative Price)",
            "priceRealizationLabel": "Measure Names",
            "marketShareLabel": "AGG(#CALC: Market Share - Y %)",
            "timePeriodParameter": "#CTRL: Date Control"
          },
          "filterMapping": {
            "headers": [
              "Customer",
              "Product",
              "Time Period"
            ],
            "Customer": [],
            "Product": [],
            "Time Period": [
              "YEAR",
              "QUARTER",
              "MONTH",
              "WEEK"
            ]
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
  var _localStorage = {}, def, chartService;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q, _kpiDashboardFilterService_, _chartService_) {
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
    chartService = _chartService_;
    spyOn(kpiDashboardFilterService, 'getCurrentQuarter').and.callFake(function (monthIndex) {
      return '/views/KPI_Tiles/';
    });
    spyOn(chartService, 'fnGetKPIURL').and.callFake(function (title) {
      return '/views/KPI_Tiles/';
    });
    ctrl = $controller('kpiPricingController', {
      $scope: scope,
      $rootScope: $rootScope,
      $localStorage: _localStorage,
      Constants: _Constants,
      chartService: chartService,
      KPIInfo: KPIInfo
    });
  }));
  it('Controller should be defined', function () {
    expect(ctrl).toBeDefined();
  });
  describe('Test the functions', function () {
    it('initializePricingDashboard should be defined', function () {
      expect(scope.initializePricingDashboard).toBeDefined();
    });
  });
  xdescribe('Test the functionalities of initializePricingDashboard', function () {
    it('expect the usableAlerts should have only one object as Negative ROI event is unchecked', function () {
      scope.initializePricingDashboard();
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
        filterValue: 'December',
        type: 'YTD'
      });
    });
  });
});

