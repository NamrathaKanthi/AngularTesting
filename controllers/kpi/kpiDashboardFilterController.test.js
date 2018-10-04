'use strict';

describe('Controller: kpiDashboardFilterTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  beforeEach(module('ui.router'));
  var ctrl, scope, KPIInfo, $q;
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
  var _localStorage = {}, $state, def, kpiDashboardFilterService;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q, _kpiDashboardFilterService_, _ngDialog_) {
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
    spyOn(kpiDashboardFilterService, 'setTypeSelected').and.callFake(function (mappedCustomerName) {
      return true;
    });
    spyOn(kpiDashboardFilterService, 'getCustomerNames').and.callFake(function () {
      return true;
    });
    spyOn(kpiDashboardFilterService, 'getCustomerChannels').and.callFake(function () {
      return true;
    });
    spyOn(kpiDashboardFilterService, 'setSelectedCustomerChannels').and.callFake(function (mappedCustomerName) {
      return true;
    });
    spyOn(kpiDashboardFilterService, 'setSelectedCustomerNames').and.callFake(function (mappedCustomerName) {
      return true;
    });
    spyOn(kpiDashboardFilterService, 'resetCustomerChannels').and.callFake(function (mappedCustomerName) {
      return true;
    });
    ctrl = $controller('kpiDashboardFilterController', {
      $scope: scope,
      $rootScope: $rootScope,
      $localStorage: _localStorage,
      Constants: _Constants,
      KPIInfo: KPIInfo
    });
  }));
  it('Controller should be defined', function () {
    expect(ctrl).toBeDefined();
  });
  describe('Test the functions', function () {
    it('storeSelectedFiltersinService should be defined', function () {
      expect(scope.storeSelectedFiltersinService).toBeDefined();
    });
  });
  describe('Test the functionalities of storeSelectedFiltersinService ', function () {
    it('expect the kpiDashboardFilterService To have been called when filterHeader is ME', function () {
      scope.all = {
        filter: 'Adams Market'
      };
      scope.filterHeader = 'ME';
      scope.storeSelectedFiltersinService();
      expect(kpiDashboardFilterService.setTypeSelected).toHaveBeenCalled();
    });
    it('expect the kpiDashboardFilterService To have been called when filterHeader is Group', function () {
      scope.all = {
        filter: 'Division 5'
      };
      scope.filterHeader = 'GROUP';
      scope.storeSelectedFiltersinService();
      expect(kpiDashboardFilterService.setSelectedCustomerChannels).toHaveBeenCalled();
    });
  });

  describe('Test the functionalities of openKpiDashboardFilter event ', function () {
    it('expect the kpiDashboardFilterService To have been called when filterHeader is ME and selected Item is Adams Market', function () {
      spyOn(kpiDashboardFilterService, 'getSelectedCustomerNames').and.callFake(function () {
        return 'Adams Market';
      });
      scope.$broadcast('openKpiDashboardFilter', {
        btnName: 'ME'
      });
      expect(kpiDashboardFilterService.getCustomerNames).toHaveBeenCalled();
    });
    it('expect the kpiDashboardFilterService To have been called when filterHeader is ME and Selected Item is All', function () {
      spyOn(kpiDashboardFilterService, 'getSelectedCustomerNames').and.callFake(function () {
        return 'All';
      });
      scope.$broadcast('openKpiDashboardFilter', {
        btnName: 'ME'
      });
      expect(kpiDashboardFilterService.getCustomerNames).toHaveBeenCalled();
    });
    it('expect the kpiDashboardFilterService To have been called when filterHeader is GROUP and selected Item is Adams Market', function () {
      spyOn(kpiDashboardFilterService, 'getSelectedCustomerChannels').and.callFake(function () {
        return 'Adams Market';
      });
      scope.$broadcast('openKpiDashboardFilter', {
        btnName: 'GROUP'
      });
      expect(kpiDashboardFilterService.getCustomerChannels).toHaveBeenCalled();
    });
    it('expect the kpiDashboardFilterService To have been called when filterHeader is GROUP and Selected Item is All', function () {
      spyOn(kpiDashboardFilterService, 'getSelectedCustomerChannels').and.callFake(function () {
        return 'All';
      });
      scope.$broadcast('openKpiDashboardFilter', {
        btnName: 'GROUP'
      });
      expect(kpiDashboardFilterService.getCustomerChannels).toHaveBeenCalled();
    });
    it('expect the kpiDashboardFilterService To have been called when filterHeader is COMPANY', function () {
      scope.$broadcast('openKpiDashboardFilter', {
        btnName: 'COMPANY'
      });
      expect(scope.all.filter).toBe('All');
      expect(kpiDashboardFilterService.resetCustomerChannels).toHaveBeenCalled();
      expect(kpiDashboardFilterService.setSelectedCustomerNames).toHaveBeenCalled();
    });
  });

});

