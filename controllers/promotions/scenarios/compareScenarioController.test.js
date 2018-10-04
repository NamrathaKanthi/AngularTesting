/**
 * Created by sdamodiran on 19-07-2017.
 */
'use strict';

describe('Controller: CompareScenario Controller', function () {
  beforeEach(module('polarisApp'));
  beforeEach(module('ui.router'));
  var $controller, controller, rootScope, scope, restAPIService, Constants, scenarioService, $q;
  var KpiMetric = ["roi", "margin", "currentVSOD", "currentSales", "volumeLift", "discountDepth", "totalDiscount", "spend", "marginPercentage", "netRevenue", "grossRevenue", "baselineVSOD", "incrementalVSOD", "retailerMargin", "retailerMarginPercentage", "distributorMargin", "distributorMarginPercentage"];
  var def, requiredMetrics, color;
  var _color = ["dummy", "amber", "green", "pink"];
  var pricingscenario, subMetrics, value, scenarioSelected, selectedScenarios, item, changeviewfn, step, id, bool, submetrics;
  beforeEach(function () {
    angular.mock.module('polarisApp');
    angular.mock.module('ui.router');
    angular.mock.inject(function (_$controller_, _$rootScope_, _restAPIService_, _Constants_, _scenarioService_, _$q_) {
      $controller = _$controller_;
      scope = _$rootScope_.$new();
      Constants = _Constants_;
      restAPIService = _restAPIService_;
      scenarioService = _scenarioService_;
      $q = _$q_;
      spyOn(restAPIService, 'invokeService').and.callFake(function (url) {
        def = $q.defer();
        def.resolve({ data: {} });
        return def.promise;
      });
      controller = $controller('CompareScenario', {
        $scope: scope
      });
      pricingscenario = {
        name: "",
        pricingMetricsDetails: {},
        priceChangesApplied: ''
      };
      controller.submetrics = {
        "ROI": ["discountDepth", "totalDiscount", "spend"],
        "Own Margin": ["marginPercentage", "netRevenue", "grossRevenue"],
        "Current VSOD": ["baselineVSOD", "incrementalVSOD"],
        "Current Sales": ["retailerMargin", "retailerMarginPercentage", "distributorMargin", "distributorMarginPercentage"],
        "VSOD": ["baselineVSOD", "incrementalVSOD"],
        "Sales": ["retailerMargin", "retailerMarginPercentage", "distributorMargin", "distributorMarginPercentage"]
      };
      subMetrics = {
        "ownMarginPercentage": [
          { id: "ownVolume", name: "Own Volume" },
          { id: "ownValue", name: "Own Value" },
          { id: "ownMarketValuePerCase", name: "Own Value/case" },
          { id: "ownMargin", name: "Own Margin" }
        ],
        "distributorMarginPercentage": [
          { id: "distributorValue", name: "Distributor Value" },
          { id: "distributorMargin", name: "Distributor Margin" }
        ],
        "retailerMarginPercentage": [
          { id: "retailerValue", name: "Retailer Value" },
          { id: "retailerMargin", name: "Retailer Margin" }
        ]
      };
      controller.scenarioSelected = '';
      value = 'polaris';
      scope.selectedScenarios = "";
      item = {
        scenarioId: ''
      };
      step = 1;
      id = 12;
      bool = true;
      //scope.changeviewfn({ input: controller.pricingscenario });
    });
  });

  it('should exists', function () {
    expect(controller).toBeDefined();
  });
  it('Should have dependencies', function () {
    expect(scope).toBeDefined();
    expect(Constants).toBeDefined();
    expect(restAPIService).toBeDefined();
    expect(scenarioService).toBeDefined();
  });
  it('Should have predefined values', function () {
    expect(controller.step).toBe(1);
    expect(controller.scenarioSelected).toBe('');
    expect(controller.isShowmore).toBe(true);
    expect(controller.simulatedValues).toEqual([]);
    expect(controller.toggle).toBe(false);
    expect(controller.step2to3).toBe(false);
    //expect(requiredMetrics).toBe(5);
    expect(controller.kpiMetrics).toEqual(KpiMetric);
    //expect(controller.allScenarios).toEqual([]);
    expect(controller.subMetrics).toEqual(submetrics);
    //expect(color).toEqual(_color);
  });
  it('testing showMoreLess functionality', function () {
    //controller.showMoreLess(value);
    expect(controller.showMoreLess).toBeDefined();
  });
  it('testing checkShow functionality', function () {
    controller.checkShow();
    expect(controller.checkShow).toBeDefined();
  });

  it('testing changeKPIOrder functionality', function () {
    var subMetrics = {
      "ownMarginPercentage": [
        { id: "ownVolume", name: "Own Volume" },
        { id: "ownValue", name: "Own Value" },
        { id: "ownMarketValuePerCase", name: "Own Value/case" },
        { id: "ownMargin", name: "Own Margin" }
      ],
      "distributorMarginPercentage": [
        { id: "distributorValue", name: "Distributor Value" },
        { id: "distributorMargin", name: "Distributor Margin" }
      ],
      "retailerMarginPercentage": [
        { id: "retailerValue", name: "Retailer Value" },
        { id: "retailerMargin", name: "Retailer Margin" }
      ]
    };
    expect(controller.subMetrics).toBe(subMetrics);
  });

  it('filterScenarios testing tobedefined', function () {
    expect(controller.filterScenarios(item)).toBeDefined();
  });

  it('details testing tobedefined', function () {
    // scope.changeviewfn({ input: controller.pricingscenario });
    // controller.details();
    expect(controller.details).toBeDefined();
  });

  it('changeStep testing tobedefined', function () {
    controller.changeStep(step, id, bool);
    expect(controller.changeStep).toBeDefined();
    step = 1;
    controller.changeStep(step, id, bool);
    expect(controller.changeStep).toBeDefined();
    step = 2;
    controller.changeStep(step, id, bool);
    expect(controller.changeStep).toBeDefined();
  });

  it('fninitPricing testing tobedefined', function () {
    expect(controller.fninitPricing).toBeDefined();
  });

  it('resetDefault should be defined', function () {
    scope.$broadcast('resetDefault', { e: "e" });
    expect(scope.e).toBe(undefined);
  });
});
