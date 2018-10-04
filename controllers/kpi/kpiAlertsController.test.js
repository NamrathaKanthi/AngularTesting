'use strict';

describe('Controller: kpiAlertsTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  beforeEach(module('ui.router'));
  var ctrl, scope, localStorage, chartFilterAndParamService, alertManagementService, chartNavigationService, chartService, filterDataService, restAPIService, bookMarkService, chartConfigurationService, chartMenus, $q;
  var activeSheet, def, alert, timestamp, name, index, pinAlerts;
  var store = {
    userInfo: {
      clientConfig: {
        'KPIDashboardPricing': {
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
  var usableAlerts = [{
    answer: 'Back-to-School Promotion-Battery-356',
    customer_channel: 'Division 5',
    customer_name: 'Walker Foods',
    metric: 'Negative ROI Event',
    selected: false,
    time_period: '8/2015',
    value: '-0.16'
  }, {
    answer: 'Back-to-School Promotion-Battery-4',
    customer_channel: 'Division 5',
    customer_name: 'Fernandez Foods',
    metric: 'Promotion Planned Spend Above Actual Spend',
    selected: false,
    time_period: '8/2015',
    value: '-0.30'
  }, {
    answer: 'Back-to-School Promotion-Battery-356',
    customer_channel: 'Division 6',
    customer_name: 'Walker Foods',
    metric: 'Promotion Planned Spend Above Actual Spend',
    selected: false,
    time_period: '8/2015',
    value: '-0.16'
  }, {
    answer: 'Back-to-School Promotion-Battery-4',
    customer_channel: 'Division 6',
    customer_name: 'Fernandez Foods',
    metric: 'Negative ROI Event',
    selected: false,
    time_period: '8/2015',
    value: '-0.30'
  }];
  var _Constants = {
    isTrusted: true,
    'kpiAlerts': {
      'all': 'rest/alerts',
      'customerNames': 'rest/alerts/custdetails/',
      'customerChannels': 'rest/alerts/channeldetails/'
    }
  };
  chartMenus = {
    'menuMapping': {
      'KPI_Dashboard_Pricing': 'KPI_Dashboard_Pricing'
    },
    'chartTitles': {
      'kpiPricing': 'KPI_Dashboard_Pricing'
    }
  };
  var _localStorage = {}, _chartFilterAndParamService = {}, arr = [], $state;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, restAPIService, $q, _$state_, _alertManagementService_, _filterDataService_) {
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
    spyOn(restAPIService, 'invokeService').and.callFake(function (url) {
      def = $q.defer();
      def.resolve({ data: {} });
      return def.promise;
    });
    alertManagementService = _alertManagementService_;
    filterDataService = _filterDataService_;
    spyOn(alertManagementService, 'getParentAlerts').and.callFake(function () {
      return usableAlerts;
    });
    spyOn(alertManagementService, 'setParentAlerts').and.callFake(function (obj) {
      usableAlerts.push(obj);
      return usableAlerts;
    });
    spyOn(filterDataService, 'setIsNavigationFromKPIDashboard').and.callFake(function (boolean) {
      return boolean;
    });
    $state = _$state_;
    spyOn($state, 'go').and.callFake(function () {
      return true;
    });

    ctrl = $controller('kpiAlertsController', {
      $scope: scope,
      $rootScope: $rootScope,
      $localStorage: _localStorage,
      Constants: _Constants,
      chartFilterAndParamService: chartFilterAndParamService,
      chartNavigationService: chartNavigationService,
      chartService: chartService,
      filterDataService: filterDataService,
      restAPIService: restAPIService,
      bookMarkService: bookMarkService,
      alertManagementService: alertManagementService,
      chartConfigurationService: chartConfigurationService,
      chartMenus: chartMenus,
      $state: $state
    });

    alert = {
      metric: "metric",
      answer: "",
      customer_name: "",
      value: ""
    };
    timestamp = {
      split: function () {
        return {
          reverse: function () {
            return {
              join: function () {
                return '';
              }
            }
          }
        }
      }
    };
    name: "";
    index: 2;
    scope.pinAlerts = [];
  }));

  it('Controller should be defined', function () {
    expect(ctrl).toBeDefined();
  });
  describe('Test the functions', function () {
    it('fnCheckAppliedKpiFilters should be defined', function () {
      expect(scope.fnCheckAppliedKpiFilters).toBeDefined();
    });
    it('fnGetIndividualValue should be defined', function () {
      expect(scope.fnGetIndividualValue).toBeDefined();
    });
    it('fnGetIndividualValue should be defined', function () {
      expect(scope.fnUpdateAlertSelection).toBeDefined();
    });
    it('fnGetMonthYear should be defined', function () {
      scope.fnGetMonthYear(timestamp);
      expect(scope.fnGetMonthYear).toBeDefined();
    });
    it('fnAlertClick should be defined', function () {
      expect(scope.fnAlertClick).toBeDefined();
    });
    it('fnGetMetricName should be defined', function () {
      scope.fnGetMetricName(name);
      expect(scope.fnGetMetricName).toBeDefined();
    });
    it('fnGetPreview should be defined', function () {
      expect(scope.fnGetPreview).toBeDefined();
    });
    it('fnDelAlert should be defined', function () {
      scope.fnDelAlert(index, alert);
      expect(scope.fnDelAlert).toBeDefined();
    });
    it('fnSelect should be defined', function () {
      scope.fnSelect(alert);
      expect(scope.fnSelect).toBeDefined();
    });
    it('fnGetMessageFromAlert should be defined', function () {
      scope.fnGetMessageFromAlert(alert);
      expect(scope.fnGetMessageFromAlert).toBeDefined();
    });
    it('fnGetIconClass should be defined', function () {
      expect(scope.fnGetIconClass).toBeDefined();
    });
    it('formatMetrics should be defined', function () {
      expect(scope.formatMetrics).toBeDefined();
    });
    it('fnOutDivClickAlert should be defined', function () {
      scope.fnOutDivClickAlert();
      expect(scope.fnOutDivClickAlert).toBeDefined();
    });
    it('fnHoverAlert should be defined', function () {
      scope.fnHoverAlert(index);
      expect(scope.fnHoverAlert).toBeDefined();
    });
    it('fnHoverOutAlert should be defined', function () {
      scope.fnHoverOutAlert(index);
      expect(scope.fnHoverOutAlert).toBeDefined();
    });
  });
  describe('Test the functionalities of fnCheckAppliedKpiFilters', function () {
    it('expect the usableAlerts should have only one object as Negative ROI event is unchecked', function () {
      scope.usableAlerts = usableAlerts;
      scope.fnCheckAppliedKpiFilters('Negative ROI Event', false, 'metric');
      expect(scope.usableAlerts.length).toEqual(2);
      expect(scope.usableAlerts[0].metric).toEqual('Promotion Planned Spend Above Actual Spend');
      expect(scope.usableAlerts[0].metric).not.toEqual('Negative ROI Event');
    });
    it('expect the usableAlerts should have only one object as Negative ROI event is unchecked', function () {
      scope.usableAlerts = usableAlerts;
      scope.fnCheckAppliedKpiFilters('Negative ROI Event', false, 'metric');
      expect(scope.usableAlerts.length).toEqual(2);
      scope.fnCheckAppliedKpiFilters('Negative ROI Event', true, 'metric');
      expect(scope.usableAlerts.length).toEqual(4);
    });
  });
  describe('Test the functionalities of fnGetIndividualValue', function () {
    it('expect the return value should be in % ex: if the value is 0.16 it should return 16%', function () {
      expect(scope.fnGetIndividualValue(-0.16)).toEqual('-16%');
    });
    it('expect the return value should be in % ex: if the value is 0.16 it should return 16%', function () {
      expect(scope.fnGetIndividualValue('-0.16')).toEqual('-16%');
    });
    it('expect the return value should be empty if the value is not number', function () {
      expect(scope.fnGetIndividualValue('kpi')).toEqual('');
    });
  });
  describe('Test the functionalities of fnUpdateAlertSelection', function () {
    it('expect the getParentAlerts in alertManagementService to be called when selected is true', function () {
      usableAlerts[0].selected = true;
      scope.fnUpdateAlertSelection(usableAlerts[0]);
      expect(alertManagementService.getParentAlerts).toHaveBeenCalled();
    });
    it('expect the getParentAlerts in alertManagementService to be called when selected is false', function () {
      scope.fnUpdateAlertSelection(usableAlerts[2]);
      expect(alertManagementService.getParentAlerts).toHaveBeenCalled();
    });
    it('expect the getParentAlerts in alertManagementService to be called when selected is false', function () {
      scope.fnUpdateAlertSelection(usableAlerts[2]);
      expect(alertManagementService.getParentAlerts).toHaveBeenCalled();
      expect(usableAlerts.length).toEqual(6);
    });
  });
  xdescribe('Test the functionalities of fnGetMonthYear', function () {
    it('expect the return value will be like Aug,2016 ', function () {
      expect(scope.fnGetMonthYear("08/2016")).toEqual('Aug, 2016');
    });
    it('expect the return value will be like Jan,2016 ', function () {
      expect(scope.fnGetMonthYear('1/2016')).toEqual('Jan, 2016');
    });
    it('expect the return value will be like Feb,2016 ', function () {
      expect(scope.fnGetMonthYear('2/2016')).toEqual('Feb, 2016');
    });
    it('expect the return value will be like Mar,2016 ', function () {
      expect(scope.fnGetMonthYear('3/2016')).toEqual('Mar, 2016');
    });
    it('expect the return value will be like Apr,2016 ', function () {
      expect(scope.fnGetMonthYear('4/2016')).toEqual('Apr, 2016');
    });
    it('expect the return value will be like May,2016 ', function () {
      expect(scope.fnGetMonthYear('5/2016')).toEqual('May, 2016');
    });
    it('expect the return value will be like Jun,2016 ', function () {
      expect(scope.fnGetMonthYear('6/2016')).toEqual('Jun, 2016');
    });
    it('expect the return value will be like Jul,2016 ', function () {
      expect(scope.fnGetMonthYear('7/2016')).toEqual('Jul, 2016');
    });
    it('expect the return value will be like Sep,2016 ', function () {
      expect(scope.fnGetMonthYear('9/2016')).toEqual('Sep, 2016');
    });
    it('expect the return value will be like Oct,2016 ', function () {
      expect(scope.fnGetMonthYear('10/2016')).toEqual('Oct, 2016');
    });
    it('expect the return value will be like Nov,2016 ', function () {
      expect(scope.fnGetMonthYear('11/2016')).toEqual('Nov, 2016');
    });
    it('expect the return value will be like Dec,2016 ', function () {
      expect(scope.fnGetMonthYear('12/2016')).toEqual('Dec, 2016');
    });
  });
  describe('Test the functionalities of fnAlertClick', function () {
    it('expect the $state.go is not called if we call alertClick with no parameter', function () {
      scope.fnAlertClick();
      expect($state.go).not.toHaveBeenCalled();
    });
    it('expect the $state.go should be called if we call alertClick with Market Share Spike', function () {
      scope.fnAlertClick('Market Share Spike');
      expect($state.go).toHaveBeenCalled();
    });
    it('expect the $state.go should be called if we call alertClick with Negative ROI Event', function () {
      scope.fnAlertClick('Negative ROI Event');
      expect($state.go).toHaveBeenCalled();
    });
    it('expect the $state.go should be called if we call alertClick with Net Margin Spike', function () {
      scope.fnAlertClick('Net Margin Spike');
      expect($state.go).toHaveBeenCalled();
    });
    it('expect the $state.go should be called if we call alertClick with Promotion Planned Spend Above Actual Spend', function () {
      scope.fnAlertClick('Promotion Planned Spend Above Actual Spend');
      expect($state.go).toHaveBeenCalled();
    });
    it('expect the $state.go should be called if we call alertClick with Gross Revenue Spike', function () {
      scope.fnAlertClick('Gross Revenue Spike');
      expect($state.go).toHaveBeenCalled();
    });
  });
  describe('Test the functionalities of fnGetMetricName', function () {
    it('expect the return value will be Promotion Spend > Plan if we pass Promotion Planned Spend Above Actual Spend ', function () {
      expect(scope.fnGetMetricName('Promotion Planned Spend Above Actual Spend')).toEqual('Promotion Spend > Plan');
    });
    it('expect the return value will be same as what we pass ', function () {
      expect(scope.fnGetMetricName('Promotion Planned')).toEqual('Promotion Planned');
    });
  });
  describe('Test the functionalities of fnGetPreview', function () {
    it('expect the return value will be images/Chart_001.png for Market Share Spike', function () {
      var alert = {
        metric: 'Market Share Spike'
      };
      expect(scope.fnGetPreview(alert)).toEqual('images/Chart_001.png');
    });
    it('expect the return value will be images/Chart_003.png for Negative ROI Event', function () {
      var alert = {
        metric: 'Negative ROI Event'
      };
      expect(scope.fnGetPreview(alert)).toEqual('images/Chart_003.png');
    });
    it('expect the return value will be images/Chart_002.png for Net Margin Spike', function () {
      var alert = {
        metric: 'Net Margin Spike'
      };
      expect(scope.fnGetPreview(alert)).toEqual('images/Chart_002.png');
    });
    it('expect the return value will be images/planned_spend_actual.png for Promotion Planned Spend Above Actual Spend', function () {
      var alert = {
        metric: 'Promotion Planned Spend Above Actual Spend'
      };
      expect(scope.fnGetPreview(alert)).toEqual('images/planned_spend_actual.png');
    });
    it('expect the return value will be images/revenue_spike.png for Gross Revenue Spike', function () {
      var alert = {
        metric: 'Gross Revenue Spike'
      };
      expect(scope.fnGetPreview(alert)).toEqual('images/revenue_spike.png');
    });
    it('expect the return value will be images/Chart_001.png for any other value (default case)', function () {
      var alert = {
        metric: 'Gross'
      };
      expect(scope.fnGetPreview(alert)).toEqual('images/Chart_001.png');
    });
  });
  xdescribe('Test the functionalities of fnGetMessageFromAlert ', function () {
    it('expect the return value for "Promotion Planned Spend Above Actual Spend" ', function () {
      var alert = {
        answer: 'Back-to-School Promotion-Battery-356',
        customer_channel: 'Division 6',
        customer_name: 'Walker Foods',
        metric: 'Promotion Planned Spend Above Actual Spend',
        selected: false,
        time_period: '8/2015',
        value: '-0.16'
      };
      expect(scope.fnGetMessageFromAlert(alert)).toEqual('Promotional event Back-to-School Promotion-Battery-356 at Walker Foods (ending Aug, 2015) spent at a rate -16.0% above plan');
    });
    it('expect the return value for "Negative ROI Event" ', function () {
      var alert = {
        answer: 'Back-to-School Promotion-Battery-356',
        customer_channel: 'Division 5',
        customer_name: 'Walker Foods',
        metric: 'Negative ROI Event',
        selected: false,
        time_period: '8/2015',
        value: '-0.16'
      };
      expect(scope.fnGetMessageFromAlert(alert)).toEqual('Promotional event Back-to-School Promotion-Battery-356 at Walker Foods (ending Aug, 2015) experienced a Negative ROI -16.0%');
    });
    it('expect the return value for "Market Share Spike" ', function () {
      var alert = {
        answer: 'Back-to-School Promotion-Battery-356',
        customer_channel: 'Division 5',
        customer_name: 'Walker Foods',
        metric: 'Market Share Spike',
        selected: false,
        time_period: '8/2015',
        value: '-0.16'
      };
      expect(scope.fnGetMessageFromAlert(alert)).toEqual('Back-to-School Promotion-Battery-356 experienced a Market Share Spike of -16.0% at Walker Foods in Aug, 2015');
    });
    it('expect the return value for "Market Share Spike" with customer_name:ALL ', function () {
      var alert = {
        answer: 'Back-to-School Promotion-Battery-356',
        customer_channel: 'Division 5',
        customer_name: 'All',
        metric: 'Market Share Spike',
        selected: false,
        time_period: '8/2015',
        value: '-0.16'
      };
      expect(scope.fnGetMessageFromAlert(alert)).toEqual('Back-to-School Promotion-Battery-356 experienced a Market Share Spike of -16.0% across all customers in the Division 5 channel in Aug, 2015');
    });

    it('expect the return value for "Net Margin Spike" ', function () {
      var alert = {
        answer: 'Back-to-School Promotion-Battery-356',
        customer_channel: 'Division 5',
        customer_name: 'Walker Foods',
        metric: 'Net Margin Spike',
        selected: false,
        time_period: '8/2015',
        value: '-0.16'
      };
      expect(scope.fnGetMessageFromAlert(alert)).toEqual('Back-to-School Promotion-Battery-356 experienced a Net Margin Spike of -16.0% at Walker Foods in Aug, 2015');
    });
    it('expect the return value for "Net Margin Spike" with customer_name:ALL ', function () {
      var alert = {
        answer: 'Back-to-School Promotion-Battery-356',
        customer_channel: 'Division 5',
        customer_name: 'All',
        metric: 'Market Share Spike',
        selected: false,
        time_period: '8/2015',
        value: '-0.16'
      };
      expect(scope.fnGetMessageFromAlert(alert)).toEqual('Back-to-School Promotion-Battery-356 experienced a Market Share Spike of -16.0% across all customers in the Division 5 channel in Aug, 2015');
    });

    it('expect the return value for "Gross Revenue Spike" ', function () {
      var alert = {
        answer: 'Back-to-School Promotion-Battery-356',
        customer_channel: 'Division 5',
        customer_name: 'Walker Foods',
        metric: 'Gross Revenue Spike',
        selected: false,
        time_period: '8/2015',
        value: '-0.16'
      };
      expect(scope.fnGetMessageFromAlert(alert)).toEqual('Back-to-School Promotion-Battery-356 experienced a Gross Revenue Spike of -16.0% at Walker Foods in Aug, 2015');
    });
    it('expect the return value for "Gross Revenue Spike" with customer_name:ALL ', function () {
      var alert = {
        answer: 'Back-to-School Promotion-Battery-356',
        customer_channel: 'Division 5',
        customer_name: 'All',
        metric: 'Gross Revenue Spike',
        selected: false,
        time_period: '8/2015',
        value: '-0.16'
      };
      expect(scope.fnGetMessageFromAlert(alert)).toEqual('Back-to-School Promotion-Battery-356 experienced a Gross Revenue Spike of -16.0% across all customers in the Division 5 channel in Aug, 2015');
    });


  });
  describe('Test the functionalities of fnGetIconClass ', function () {
    it('expect the return value is upArrow for positive value >2%', function () {
      expect(scope.fnGetIconClass(1)).toEqual('upArrow');
    });
    it('expect the return value is redArrow for parseFloat(value)*100 <-2', function () {
      expect(scope.fnGetIconClass(-1)).toEqual('redArrow');
    });
    it('expect the return value is yellowCircle for ((parseFloat(value)*100)>-2) && ((parseFloat(value)*100)<2)', function () {
      expect(scope.fnGetIconClass(0.01)).toEqual('yellowCircle');
    });
  });
  describe('Test the functionalities of formatMetrics ', function () {
    it('expect the return value is 0 for empty string', function () {
      expect(scope.formatMetrics('')).toEqual('0');
    });
    it('expect the return value is -16.0% for -16%', function () {
      expect(scope.formatMetrics('-16%')).toEqual('-16.0%');
    });
    it('expect the return value is 1M for 1M', function () {
      expect(scope.formatMetrics('1M')).toEqual('1M');
    });
    it('expect the return value is 1K for 1K', function () {
      expect(scope.formatMetrics('1K')).toEqual('1K');
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
  describe('Test the functionalities of deselectKPIAlerts event ', function () {
    it('expect on of deselectKPIAlerts to have been called', function () {
      scope.$broadcast('deselectKPIAlerts', {
        deletedAlert: 'December'
      });
    });
  });
  describe('Test the functionalities of updateKpiAlerts event ', function () {
    it('expect on of updateKpiAlerts to have been called', function () {
      scope.$broadcast('updateKpiAlerts', {});
    });
  });
});

