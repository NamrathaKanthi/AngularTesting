'use strict';

describe('Service: clientSpecificMappingTestService', function() {
  beforeEach(module('polarisApp'));
  var clientSpecificMappingService,sessionStorage, localStorage, state, KPIInfo, Constants,genericName,configType,
  goldObject = {
    userInfo: {
      clientConfig:{},
      userDetails: {
        "company": "gold"
      }
    }
  };
  beforeEach(inject(function(_clientSpecificMappingService_, _$sessionStorage_,_$localStorage_, _$state_, _KPIInfo_, _Constants_) {
    clientSpecificMappingService = _clientSpecificMappingService_;
    sessionStorage=_$sessionStorage_;
    localStorage=_$localStorage_;
    state=_$state_;
    KPIInfo=_KPIInfo_;
    Constants = _Constants_;
    localStorage.userInfo = JSON.stringify(goldObject['userInfo']);
    configType = "";
    genericName = "";
    localStorage={
      userInfo:{
        "userDetails":{
          "firstName":""
        }
      }
    };

  }));
  it('clientSpecificMappingService definition test', function() {
    expect(clientSpecificMappingService).not.toBe(undefined);
  });
  it('getMappedName definition test', function(){
    configType = "pricing"
    expect(clientSpecificMappingService.getMappedName(genericName,configType)).not.toBe(undefined);
  });

  it('getMappedName definition test', function(){
    configType = "pricing"
    expect(clientSpecificMappingService.getMappedName(genericName,configType)).toEqual(genericName);
  });
  it('getMappedName definition test', function(){
    configType = "promotion"
    expect(clientSpecificMappingService.getMappedName(genericName,configType)).toEqual(genericName);
  });

  it('getMappedName definition test', function(){
    configType = "profitability"
    expect(clientSpecificMappingService.getMappedName(genericName,configType)).toEqual(genericName);
  });

  it('setUserData definition test', function(){
    localStorage.userInfo == {};
    expect(clientSpecificMappingService.setUserData(localStorage.userInfo)).not.toEqual(localStorage.userInfo);
  });

  it('setUserData definition test', function(){
    expect(clientSpecificMappingService.setUserData(localStorage.userInfo)).not.toBeDefined(undefined);
  });

  it('getUserCompanyName definition test', function(){
    expect(clientSpecificMappingService.getUserCompanyName).toBeDefined();
  });

  it('getClientSpecificConfiguration definition test', function(){
    expect(clientSpecificMappingService.getClientSpecificConfiguration).toBeDefined();
  });

  it('getUserCompanyName functionality test', function(){
    expect(clientSpecificMappingService.getUserCompanyName()).toEqual('gold');
  });
  
  it('getClientSpecificConfiguration functionality test', function(){
    expect(clientSpecificMappingService.getClientSpecificConfiguration()).toEqual({});
  });
});
