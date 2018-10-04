'use strict';

describe('Service: restAPITestService', function() {
  beforeEach(module('polarisApp'));
  var restAPIService, datsSrvc;
  beforeEach(inject(function(_restAPIService_) {
    restAPIService = _restAPIService_;
  }));
  it('restAPIService definition test', inject(function() {
    expect(restAPIService).not.toBe(undefined);
  }));
  it('should have an invokeService function', inject(function() {
    expect(restAPIService.invokeService).toBeDefined();
    expect(angular.isFunction(restAPIService.invokeService)).toBe(true);
  }));
  xit('returns an object', inject(function() {
    datsSrvc = restAPIService.invokeService().then(function(data) {
      return $http({
        url: 'someurl',
        method: method || 'GET',
        headers: headers || 'application/json;',
        data: data
      });
    });
    expect(typeof(datsSrvc)).toBe('object');
  }));
});
