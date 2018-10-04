'use strict';

describe('Service: interceptorService', function() {
  beforeEach(module('polarisApp'));
  var interceptorService,
    errorHandlerService,
    $q,
    eObj = {},
    interceptorObj ={},
    config = {},
    errorObj = {};
  beforeEach(inject(function(_interceptorService_,_errorHandlerService_,_$q_) {
    interceptorService = _interceptorService_;
    errorHandlerService = _errorHandlerService_;
    $q = _$q_;
    interceptorObj ={};
    config = {};
    errorObj = {'state':400};
    eObj = {};
    window._keycloakAuth = {
      "token":true,
      'updateToken':function(){
        var deferred  = $q.defer();
        deferred.resolve({});
        return deferred.promise;
      }
    };
    window._companyId = "";
  }));

  it('interceptorService definition test',function(){
    expect(interceptorService).not.toBe(undefined);
  });
  it('interceptorService request object test',function(){
    expect(interceptorService.request(config)).not.toBe(undefined);
  });
  it('interceptorService request error object test',function(){
    errorHandlerService.setErrorObject(eObj);
    expect(interceptorService.requestError(errorObj)).not.toBe(undefined);
  });
  it('interceptorService response object test',function(){
    expect(interceptorService.response(errorObj)).not.toBe(undefined);
  });
  it('interceptorService response error object test',function(){
    errorHandlerService.setErrorObject(eObj);
    expect(interceptorService.responseError(errorObj)).not.toBe(undefined);
  });
});
