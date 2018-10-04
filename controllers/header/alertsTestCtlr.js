'use strict';

describe('Controller: alertsTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  var ctrl, rootScope, scope, $state, alertManagementService, alert, timestamp, index;
  var usableAlerts = [{
    answer: 'Back-to-School Promotion-Battery-356',
    customer_channel: 'Division 5',
    customer_name: 'Walker Foods',
    metric: 'Negative ROI Event',
    selected: false,
    time_period: 'Aug, 2015',
    value: '-0.16'
  }, {
    answer: 'Back-to-School Promotion-Battery-4',
    customer_channel: 'Division 5',
    customer_name: 'Fernandez Foods',
    metric: 'Promotion Planned Spend Above Actual Spend',
    selected: false,
    time_period: 'Aug, 2015',
    value: '-0.30'
  }, {
    answer: 'Back-to-School Promotion-Battery-356',
    customer_channel: 'Division 6',
    customer_name: 'Walker Foods',
    metric: 'Promotion Planned Spend Above Actual Spend',
    selected: false,
    time_period: 'Aug, 2015',
    value: '-0.16'
  }, {
    answer: 'Back-to-School Promotion-Battery-4',
    customer_channel: 'Division 6',
    customer_name: 'Fernandez Foods',
    metric: 'Negative ROI Event',
    selected: false,
    time_period: 'Aug, 2015',
    value: '-0.30'
  }];
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$state_, _alertManagementService_) {
    rootScope = $rootScope;
    scope = $rootScope.$new();
    $state = _$state_;
    alertManagementService = _alertManagementService_;
    spyOn(alertManagementService, 'hideAllPopups').and.callFake(function () {
      return true;
    });
    spyOn($state, 'go').and.callFake(function () {
      return true;
    });
    ctrl = $controller('alertsController', {
      $rootScope: rootScope,
      $scope: scope,
      $state: $state,
      alertManagementService: alertManagementService
    });
    alert = {
      metric: "",
      answer: "",
      customer_name: "",
      time_period: "",
      value: ""
    };
    timestamp = "";
    index = "";
  }));
  it('alertsController should be defined', function () {
    expect(ctrl).toBeDefined();
  });

  describe('Test the function definition', function () {
    it('fnUpdateAlertList should be defined', function () {
      expect(scope.fnUpdateAlertList).toBeDefined();
    });
    it('fnOutDivClickAlert  should be defined', function () {
      expect(scope.fnOutDivClickAlert).toBeDefined();
    });
    it('fnDelAlert should be defined', function () {
      expect(scope.fnDelAlert).toBeDefined();
    });
    it('fnAlertClick should be defined', function () {
      expect(scope.fnAlertClick).toBeDefined();
    });
    it('fnGetIndividualValue should be defined', function () {
      expect(scope.fnGetIndividualValue).toBeDefined();
    });
    it('fnGetIconClass should be defined', function () {
      expect(scope.fnGetIconClass).toBeDefined();
    });
    it('fnGetMetricName should be defined', function () {
      expect(scope.fnGetMetricName).toBeDefined();
    });
    it('fnGetPreview  should be defined', function () {
      expect(scope.fnGetPreview).toBeDefined();
    });

    it('fnGetMessageFromAlert  should be defined', function () {
      scope.fnGetMessageFromAlert(alert);
      expect(scope.fnGetMessageFromAlert).toBeDefined();
    });

    it('fnGetMonthYear  should be defined', function () {
      scope.fnGetMonthYear(timestamp);
      expect(scope.fnGetMonthYear).toBeDefined();
    });

    it('fnHoverAlert  should be defined', function () {
      scope.fnHoverAlert(index);
      expect(scope.fnHoverAlert).toBeDefined();
    });

    it('fnHoverOutAlert  should be defined', function () {
      scope.fnHoverOutAlert(index);
      expect(scope.fnHoverOutAlert).toBeDefined();
    });
  });

  describe('Test the functionalites of fnGetMessageFromAlert', function () {
    it('fnGetMessageFromAlert should return Promotional event if name contain Promotion Planned Spend Above Actual Spend at first position', function () {
      var alert = { name: 'Promotion Planned Spend Above Actual Spend' };
      expect(scope.fnGetMessageFromAlert(alert)).toBe("");
    });
    xit('orderByTime should return 2 if name contain QUARTER at first position', function () {
      var item = { name: 'QUARTER' };
      expect(scope.fnGetMessageFromAlert(item)).toBe(2)
    });
    xit('orderByTime should return 3 if name contain MONTH at first position', function () {
      var item = { name: 'MONTH' };
      expect(scope.orderByTime(item)).toBe(3)
    });
    xit('orderByTime should return 4 if name contain WEEK at first position', function () {
      var item = { name: 'WEEK' };
      expect(scope.orderByTime(item)).toBe(4)
    });
    xit('orderByTime should return 1 if name contain something other than YEAR,QUARTER,MONTH,WEEK', function () {
      var item = { name: 'Something' };
      expect(scope.orderByTime(item)).toBe(1)
    });

  })

  describe('Test the functionalities of fnUpdateAlertList', function () {
    it('fnUpdateAlertList should assign alerts length to rootScope.$storage.alertsLen if alertManagementService return data', function () {
      spyOn(alertManagementService, 'getParentAlerts').and.callFake(function () {
        return usableAlerts;
      });
      scope.fnUpdateAlertList();
      expect(alertManagementService.getParentAlerts).toHaveBeenCalled();
      expect(rootScope.$storage.alertsLen).toEqual(4);
    });
    it('fnUpdateAlertList should assign zero to rootScope.$storage.alertsLen if alertManagementService return undefined', function () {
      spyOn(alertManagementService, 'getParentAlerts').and.callFake(function () {
        var alerts;
        return alerts;
      });
      scope.fnUpdateAlertList();
      expect(rootScope.$storage.alertsLen).toEqual(0);
    });
  });

  describe('Test the fnOutDivClickAlert  functionalities', function () {
    it('fnOutDivClickAlert should call alertManagementService.hideAllPopups()', function () {
      scope.fnOutDivClickAlert();
      expect(alertManagementService.hideAllPopups).toHaveBeenCalled();
    })
  });

  describe('Test the functionalities of showAlerts event ', function () {
    it('expect on of showAlerts to have been called', function () {
      spyOn(alertManagementService, 'getParentAlerts').and.callFake(function () {
        return true;
      });
      rootScope.$broadcast('showAlerts', {});
      expect(alertManagementService.getParentAlerts).toHaveBeenCalled();
    });
  });

  describe('Test the functionalities of fnDelAlert ', function () {
    it('fnDelAlert should splice the item and trigger the broadcast event', function () {
      var index = 1;
      scope.alerts = usableAlerts;
      scope.fnDelAlert(index);
      expect(rootScope.$storage.alertsLen).toEqual(3);
      rootScope.$on('deselectKPIAlerts', function (event, args) {
        expect(args.deletedAlert).toEqual(usableAlerts[1]);
      });
    });
    it('fnDelAlert should splice the item and trigger the broadcast event', function () {
      var index = 0;
      scope.alerts = [{
        answer: 'Back-to-School Promotion-Battery-356',
        customer_channel: 'Division 5',
        customer_name: 'Walker Foods',
        metric: 'Negative ROI Event',
        selected: false,
        time_period: '8/2015',
        value: '-0.16'
      }];
      scope.fnDelAlert(index);
      expect(rootScope.$storage.alertsLen).toEqual(0);
      expect(alertManagementService.hideAllPopups).toHaveBeenCalled();
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

  describe('Test the functionalities of fnGetIndividualValue', function () {
    it('fnGetIndividualValue should return 450% if metric is a decimal number string "4.5"', function () {
      var metric = "4.5";
      expect(scope.fnGetIndividualValue(metric)).toEqual('450%');
    });
    it('fnGetIndividualValue should return 450% if metric is a decimal number 4.5', function () {
      var metric = 4.5;
      expect(scope.fnGetIndividualValue(metric)).toEqual('450%');
    });
    it('fnGetIndividualValue should return 450% if metric is a decimal number 4.5', function () {
      var metric = "nan";
      expect(scope.fnGetIndividualValue(metric)).toEqual('');
    });
  });

  describe('Test the functionalities of fnGetMetricName', function () {
    it('fnGetMetricName should return "Promotion Spend > Plan" if name is  "Promotion Planned Spend Above Actual Spend"', function () {
      var name = 'Promotion Planned Spend Above Actual Spend';
      expect(scope.fnGetMetricName(name)).toEqual('Promotion Spend > Plan');
    });
    it('fnGetMetricName should return name if name is other than "Promotion Planned Spend Above Actual Spend"', function () {
      var name = 'Promotion Planned';
      expect(scope.fnGetMetricName(name)).toEqual('Promotion Planned');
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
  });
});
