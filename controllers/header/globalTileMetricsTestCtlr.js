'use strict';

describe('Controller: globalTileMetricsTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  var ctrl, scope;
  var store = {
    userInfo: {
      clientConfig: {
        'KPI_Dashboard_Pricing': {
          'workbookName': 'Sales Volume Sheet',
          'primaryParameters': {
            'customerName': '{{Customer Name}}',
            'customerChannel': '{{Customer Level 1}}',
            'quarterPOSWeekEndDate': 'QUARTER({{POS Week End Date}})',
            'monthPOSWeekEndDate': 'MONTH({{POS Week End Date}})',
            'relativePriceLabel': 'AGG(#CALC: Relative Price)',
            'priceRealizationLabel': 'Measure Names',
            'marketShareLabel': 'AGG(#CALC: Market Share - Y %)',
            'timePeriodParameter': '#CTRL: Date Control'
          },
          'filterMapping': {
            'headers': [
              'Customer',
              'Product',
              'Time Period'
            ],
            'Customer': [],
            'Product': [],
            'Time Period': [
              'YEAR',
              'QUARTER',
              'MONTH',
              'WEEK'
            ]
          }
        }
      }
    }
  };
  var _localStorage = {};
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
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
    ctrl = $controller('globalTileMetricsController', {
      $scope: scope,
      $localStorage: _localStorage
    });
  }));
  it('globalTileMetricsController should be defined', function () {
    expect(ctrl).toBeDefined();
  });

  describe('Test the functions for there definitions', function () {
    it('openGlobalTitle should be defined', function () {
      expect(scope.openGlobalTitle).toBeDefined();
    });
    it('globalTileIsVisible should be defined', function () {
      expect(scope.globalTileIsVisible).toBeDefined();
    });
    it('formatMetrics should be defined', function () {
      expect(scope.formatMetrics).toBeDefined();
    });
    it('replaceTile should be defined', function () {
      expect(scope.replaceTile).toBeDefined();
    });
    it('tileOrder should be defined', function () {
      expect(scope.tileOrder).toBeDefined();
    });
  });

  describe('tileOrder functionality test', function () {
    it('It should return order', function () {
      var title = { 'tile': 'This istestgross revenue ' };
      expect(scope.tileOrder(title)).not.toBeNull();
      expect(scope.tileOrder(title)).toEqual(1);
    });
    it('It should return order 16 if there is no string as keys in titleWithOrders object', function () {
      var title = { 'tile': 'This is test string ' };
      expect(scope.tileOrder(title)).not.toBeNull();
      expect(scope.tileOrder(title)).toEqual(16);
    });
  });
  describe('globalTileIsVisible functionality test', function () {
    it('It should return true', function () {
      expect(scope.globalTileIsVisible()).toBeTruthy();
    });
  });
  describe('replaceTile functionality test', function () {
    it('It should return substring of the input string from 12th index', function () {
      var sTestString = 'This istest string ';
      expect(scope.replaceTile(sTestString)).toEqual(' string')
    });
    it('It should replace Freight Cost if argument string contains FPE Freiht Cost', function () {
      var sTestString = 'This istestFPE Freiht Cost ';
      expect(scope.replaceTile(sTestString)).toEqual('Freight Cost')
    });
    it('It should replace Freight Recovery if argument string contains FPE Freight Recovery', function () {
      var sTestString = 'This istestFPE Freight Recovery ';
      expect(scope.replaceTile(sTestString)).toEqual('Freight Recovery')
    });
  });

  describe('formatMetrics functionality test', function () {
    it('It should return "0" if the input string is empty', function () {
      var sTestString = '';
      expect(scope.formatMetrics(sTestString)).toEqual('0')
    });

    it('It should return "10.0K" if the input string is 100,20', function () {
      var sTestString = '100,20';
      expect(scope.formatMetrics(sTestString)).toEqual('10.0K')
    });

    it('It should return "10.0M" if the input string is 100,00,020', function () {
      var sTestString = '100,00,020';
      expect(scope.formatMetrics(sTestString)).toEqual('10.0M')
    });

    it('It should return "10.0B" if the input string is 100000,00,020', function () {
      var sTestString = '100000,00,020';
      expect(scope.formatMetrics(sTestString)).toEqual('10.0B')
    });

    it('It should return same string if the input string contains K', function () {
      var sTestString = '10K';
      expect(scope.formatMetrics(sTestString)).toEqual('10K')
    });
    it('It should return same string if the input string contains K', function () {
      var sTestString = 'test K';
      expect(scope.formatMetrics(sTestString)).toEqual('test K')
    });

    it('It should return same string if the input string contains M', function () {
      var sTestString = '10M';
      expect(scope.formatMetrics(sTestString)).toEqual('10M')
    });

    it('It should return "100.0%" if the input string is "100.022%"', function () {
      var sTestString = '100.022%';
      expect(scope.formatMetrics(sTestString)).toEqual('100.0%')
    });
  });
});
