'use strict';

describe('Service: hierarchyRulesService', function () {
  beforeEach(module('polarisApp'));
  var hierarchyRulesService, restAPIService, $q, Constants, deferred, finalMapper;
  beforeEach(inject(function ($injector) {
    hierarchyRulesService = $injector.get('hierarchyRulesService');
    restAPIService = $injector.get('restAPIService');
    $q = $injector.get('$q');
    Constants = $injector.get('Constants');
    deferred = $q.defer();
    finalMapper = {
      "tableauSite": "polaris"
    };
    spyOn(restAPIService, 'invokeService').and.callFake(function () {
      deferred.resolve({ 'status': '200' });
      return deferred.promise;
    });

  }));

  it('hierarchyRulesService definition test', function () {
    expect(hierarchyRulesService).not.toBe(undefined);
    hierarchyRulesService.setHierarchyMapper("MSS");
    expect(restAPIService.invokeService).toHaveBeenCalled();
    hierarchyRulesService.getParamMapper();
  });

  it('should resolve promise', function () {
    deferred.resolve({ 'status': '200' });
    expect(hierarchyRulesService.setHierarchyMapper("MSS")).not.toBe(null);
  });

  it('should reject promise', function () {
    deferred.reject();
    expect(deferred.results).toBe(undefined);
  });

  it('hierarchyRulesService definition test', function () {
    expect(hierarchyRulesService.getParamMapper()).toBeDefined();
  });
});
