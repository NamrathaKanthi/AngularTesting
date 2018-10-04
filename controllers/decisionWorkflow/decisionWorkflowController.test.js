'use strict';

describe('Controller: decisionWorkflowTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  var ctrl, scope, restAPIService, rootScope, arr;
  var httpbackend;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _restAPIService_, $injector) {
    rootScope = $rootScope;
    scope = rootScope.$new();
    restAPIService = _restAPIService_;
    httpbackend = $injector.get('$httpBackend')
    httpbackend.whenGET().respond({});
    spyOn(restAPIService, 'invokeService').and.callFake(function (url) {
      return {
        then: function (cb) {
          cb({ data: { decision: 'decisionWorkflowCtrl' } });
        }
      };
    });
    ctrl = $controller('decisionWorkflowController', {
      $scope: scope,
      restAPIService: restAPIService
    });
    arr = [];
  }));
  it('decisionWorkflowController should be defined', function () {
    expect(ctrl).toBeDefined();
  });
  describe('Test the functions', function () {
    it('pick should be defined', function () {
      expect(scope.pick).toBeDefined();
    });
    it('navigateFromDecision should be defined', function () {
      expect(scope.navigateFromDecision).toBeDefined();
    });
    it('getDecisionQueries  should be defined', function () {
      scope.getDecisionQueries();
      expect(scope.getDecisionQueries).toBeDefined();
    });
    it('isAutho should be defined', function () {
      scope.isAutho(arr);
      expect(scope.isAutho).toBeDefined();
    });
  });
  describe('Test the functionalities of pick', function () {
    it('expect the decisionOpen will have 0 when pick has parameter value 0 ', function () {
      scope.decisionOpen = '';
      scope.decisionQueriesObject = [{
        'decision': 'decision'
      }];
      scope.pick(0);
      expect(scope.decisionOpen).toEqual(0);
    });
    it('expect the decisionOpen will be 2 when pick has parameter value 2', function () {
      scope.decisionOpen = 0;
      scope.decisionQueriesObject = [{
        'decision': 'decision'
      }];
      scope.pick(2);
      expect(scope.decisionOpen).toEqual(2);
    });
    it('expect the decisionOpen will be length of the decisionQueriesObject if decisionOpen and the parameter value is same ', function () {
      scope.decisionOpen = 0;
      scope.decisionQueriesObject = [{
        'decision': 'decision'
      }];
      scope.pick(0);
      expect(scope.decisionOpen).toEqual(1);
    });
  });
  describe('Test the functionalities of navigateFromDecision', function () {
    xit('expect the ', function () {
      scope.navigateFromDecision.module.title = 'Pricing';
      scope.navigateFromDecision(11);
      scope.$on("DWSliderSelect", function (event, option) {
        expect(option.LQDW).toEqual("What relative price position drives maximum volume and market share?");
      });
    });
  });
  describe('Test the functionalities of getDecisionQueries', function () {
    it('expect the restAPIService.invokeService have been called', function () {
      scope.getDecisionQueries();
      expect(restAPIService.invokeService).toHaveBeenCalled();
    });
    it('expect the decisionQueriesObject should have default pricing details ', function () {
      scope.getDecisionQueries();
      expect(scope.decisionQueriesObject).toEqual(jasmine.objectContaining({ decision: 'decisionWorkflowCtrl' }));
    });
  });

  xdescribe('Test the functionalities of isAutho', function () {
    rootScope.userRole = 'test role';
    it('should return true if the arr contains same user role', function () {
      var arr = [{ name: 'test role' }];
      expect(scope.isAutho(arr)).toBeTruthy();
    });
    it('should return false if the arr not contains same user role', function () {
      var arr = [{ name: 'test' }];
      expect(scope.isAutho(arr)).toBeFalsy();
    });
  });
});
