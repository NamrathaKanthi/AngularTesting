'use strict';

describe('Service: errorHandlerService', function() {
  beforeEach(module('polarisApp'));
  var errorHandlerService,
  errorObject ={};
  beforeEach(inject(function(_errorHandlerService_) {
    errorHandlerService = _errorHandlerService_;
    errorObject ={};
  }));

  it('errorHandlerService definition test',function(){
    expect(errorHandlerService).not.toBe(undefined);
  });

  it('errorHandlerService getErrorObject test',function(){
    expect(errorHandlerService.getErrorObject()).not.toBe(null);
  });



  it('errorHandlerService error object test',function(){
    errorHandlerService.setErrorObject(errorObject);
    expect(errorHandlerService.getErrorObject()).not.toBe(undefined);
  });
});
