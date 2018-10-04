'use strict';

describe('Controller: kpiPromotionTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  beforeEach(module('ui.router'));
  var ctrl, scope,rootScope, chartService, KPIInfo, $q;
  var store = {
    userInfo: {
      clientConfig: {
        "KPIDashboardPromotion": {
          "chartTitle": "kpiDashboardPromotion",
          "companyProduct": "{{Company Product}}",
          "prodLevel2": "{{Product Level 2}}",
          "primaryParameters": {
            "customerName": "{{Customer Name}}",
            "customerChannel": "{{Customer Level 1}}",
            "quarterWeekEndDate": "QUARTER(POS Week End Date)",
            "monthWeekEndDate": "MONTH(POS Week End Date)",
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
    rootScope = $rootScope;
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
    ctrl = $controller('kpiPromotionController', {
      $scope: scope,
      $rootScope: rootScope,
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
    it('initializePromotionsDashboard should be defined', function () {
      expect(scope.initializePromotionsDashboard).toBeDefined();
    });
  });
  xdescribe('Test the functionalities of initializePromotionsDashboard ', function () {
    it('expect the usableAlerts should have only one object as Negative ROI event is unchecked', function () {
      scope.initializePromotionsDashboard();
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
  xdescribe('Test the functionalities of kpiDashboardByTimePeriodFilters event ', function () {
    it('expect on of kpiDashboardByTimePeriodFilters to have been called', function () {
      scope.$broadcast('kpiDashboardByTimePeriodFilters', {
        filterValue: 'December',
        type: 'YTD'
      });
    });
  });
  xdescribe('Test the functionalities of kpiDashboardByTimePeriodFilters event ', function () {
    it('expect on of kpiDashboardByTimePeriodFilters to have been called', function () {
      rootScope.$broadcast('kpiDashboardByTimePeriodFilters', {});
    });
  });
});

