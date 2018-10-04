'use strict';

describe('Service: constantsService', function() {
  beforeEach(module('polarisApp'));
  var constantsService,
    restAPIService,
    userDetailsService,
    clientSpecificMappingService,
    httpRequest,
    $q;
  beforeEach(inject(function($injector) {
    constantsService = $injector.get('constantsService');
    restAPIService = $injector.get('restAPIService');
    userDetailsService = $injector.get('userDetailsService');
    clientSpecificMappingService = $injector.get('clientSpecificMappingService');
    httpRequest= $injector.get('$http');
    $q = $injector.get('$q');
  }));

  it('constantsService definition test',function(){
    spyOn(httpRequest,'get').and.callFake(function(){
      return $q.when("");
    });
    constantsService.getConstants();
    constantsService.getData("https://polaris.dev.deloitteinnovation.space/");
    constantsService.populateConstants();
    expect(constantsService).not.toBe(undefined);
  });
});
