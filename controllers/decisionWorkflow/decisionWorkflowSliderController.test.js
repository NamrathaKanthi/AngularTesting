'use strict';

describe('Controller: decisionWorkflowSliderTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  var ctrl, rootScope, scope, restAPIService, arr, e, fromDW, node, nextState, str;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _restAPIService_) {
    rootScope = $rootScope;
    scope = $rootScope.$new();
    restAPIService = _restAPIService_;
    spyOn(restAPIService, 'invokeService').and.callFake(function (url) {
      return {
        then: function (cb) {
          cb({ data: { decision: 'decisionWorkflowCtrl' } });
        }
      };
    });
    ctrl = $controller('decisionWorkflowSliderController', {
      $scope: scope,
      $rootScope: rootScope,
      restAPIService: restAPIService
    });
    arr = [];
    fromDW = "polaris";
    e = "polaris";
    node = "";
    nextState = "";
    str = {
      replace: function (polaris) {
        return '';
      }
    };
  }));
  it('decisionWorkflowSliderController should be defined', function () {
    expect(ctrl).toBeDefined();
  });
  describe('Test the functions', function () {
    it('moduleOver should be defined', function () {
      expect(scope.moduleOver).toBeDefined();
    });
    it('moduleOut should be defined', function () {
      expect(scope.moduleOut).toBeDefined();
    });
    it('navToModule should be defined', function () {
      expect(scope.navToModule).toBeDefined();
    });
    it('getHeaderClass should be defined', function () {
      expect(scope.getHeaderClass).toBeDefined();
    });
    it('replaceSpaces should be defined', function () {
      scope.replaceSpaces(str);
      expect(scope.replaceSpaces).toBeDefined();
    });
    it('goToChart should be defined', function () {
      scope.goToChart(node, nextState);
      expect(scope.goToChart).toBeDefined();
    });
    it('isAutho should be defined', function () {
      scope.isAutho(arr);
      expect(scope.isAutho).toBeDefined();
    });
    it('expandModule should be defined', function () {
      scope.expandModule(e, fromDW);
      expect(scope.expandModule).toBeDefined();
    });
    it('expandLQ should be defined', function () {
      scope.expandLQ(e, fromDW);
      expect(scope.expandLQ).toBeDefined();
    });
    it('toggleToDW should be defined', function () {
      rootScope.toggleToDW();
      expect(rootScope.toggleToDW).toBeDefined();
    });
    it('toggleToDW should be defined', function () {
      rootScope.toggleToDW();
      expect(rootScope.toggleToDW).toBeDefined();
    });
    it('$locationChangeSuccess should be defined', function () {
      scope.$broadcast('$locationChangeSuccess', { next: "next" });
      expect(scope.next).toBe(undefined);
    });
    it('DWSliderSelect should be defined', function () {
      rootScope.$broadcast('DWSliderSelect', { moduleDW: "data" });
      expect(scope.data).toBeDefined();
    });



  });
  describe('Test the functionalities of moduleOver', function () {
    it('expect the iconsMap in pricing will have  images/pricing_icon_white.svg', function () {
      scope.moduleOver('Pricing');
      expect(scope.iconsMap['Pricing']).toEqual('images/pricing_icon_white.svg');
    });
    it('expect the iconsMap in Promotion will have  images/promotion_icon_white.svg', function () {
      scope.moduleOver('Promotions');
      expect(scope.iconsMap['Promotions']).toEqual('images/promotion_icon_white.svg');
    });
    it('expect the iconsMap in Profitability will have  images/pricing_icon_white.svg', function () {
      scope.moduleOver('Profitability');
      expect(scope.iconsMap['Profitability']).toEqual('images/Piggy_Assets_v01_white.svg');
    });
  });
  describe('Test the functionalities of moduleOut', function () {
    it('expect the iconsMap in pricing will have  images/pricing_icon.svg', function () {
      scope.moduleOut('Pricing');
      expect(scope.iconsMap['Pricing']).toEqual('images/pricing_icon.svg');
    });
    it('expect the iconsMap in Promotion will have  images/promotion_icon.svg', function () {
      scope.moduleOut('Promotions');
      expect(scope.iconsMap['Promotions']).toEqual('images/promotion_icon.svg');
    });
    it('expect the iconsMap in Profitability will have  images/Piggy_Assets_v01.svg', function () {
      scope.moduleOut('Profitability');
      expect(scope.iconsMap['Profitability']).toEqual('images/Piggy_Assets_v01.svg');
    });
  });
  describe('Test the functionalities of navToModule', function () {
    it('expect the scope.dataTree should be object with decision as parameter', function () {
      scope.level1 = 'Module';
      scope.navToModule();
      expect(scope.dataTree).toEqual('Module');
    });
  });
  describe('Test the functionalities of navToLQ', function () {
    it('expect the scope.dataTree should be LQ', function () {
      scope.level3 = 'LQ';
      scope.navToLQ();
      expect(scope.dataTree).toEqual('LQ');
    });
  });
  describe('Test the functionalities of getHeaderClass', function () {
    it('expect the scope.dataTree should be LQ', function () {
      scope.selected = 'LQ'
      expect(scope.getHeaderClass('LQ')).toEqual('DWHeaderSelected');
    });
    it('expect the scope.dataTree should be LQ', function () {
      scope.selected = 'qa'
      expect(scope.getHeaderClass('LQ')).toEqual('DWHeader');
    });
  });
  describe('Test the functionalities of replaceSpaces', function () {
    it('expect the spaces and special characters will be replaced with _', function () {
      expect(scope.replaceSpaces('decision workflow')).toEqual('decision_workflow');
      expect(scope.replaceSpaces('decision workflow$')).toEqual('decision_workflow_');
    });
  });
  describe('Test the functionalities of goToChart', function () {
    xit('expect the scope.selected has the value of the node and invokeService to have been called', function () {
      scope.goToChart('decision', 0);
      expect(scope.selected).toEqual('decision');
      expect(restAPIService.invokeService).toHaveBeenCalled();
    });
  });

});
