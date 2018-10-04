'use strict';

describe('Service: kpiDashboardFilterTestService', function() {
  beforeEach(module('polarisApp'));
  var kpiDashboardFilterService,Constants,restAPIService,$localStorage;
  beforeEach(inject(function($injector) {
    kpiDashboardFilterService = $injector.get('kpiDashboardFilterService');
    $localStorage =$injector.get('$localStorage');
    $localStorage={
      userInfo:{
        clientConfig:{
          'KPIDashboardPricing':{
            'primaryParameters':{ 
              'customerChannel':"Polaris"
            }
          }
        }
      }
    };
    
   

    // Constants = _Constants_;
    // restAPIService = _restAPIService_;
  }));
  xit('kpiDashboardFilterService definition test',function(){
    //localStorage.setItem('storage', JSON.stringify(store));  
    expect(kpiDashboardFilterService).toBedefined();
  });
});
