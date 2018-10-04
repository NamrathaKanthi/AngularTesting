describe('controller : errorHandlerController',function(){
  var ctrl,errorHandlerService;
  beforeEach(module('polarisApp'));
  beforeEach(inject(function ($controller,_errorHandlerService_) {
    errorHandlerService = _errorHandlerService_;
    spyOn(errorHandlerService, 'getErrorObject').and.callFake(function () {
      return 'test Object'
      });
    ctrl = $controller('errorHandlerController', {
      errorHandlerService: errorHandlerService
    });
  }));
  it('errorHandlerController definition test',function () {
    expect(ctrl).toBeDefined();
  });
  it('errorObject assignment test',function () {
    expect(ctrl.errorObject).toEqual('test Object');
  })

});
