'use strict';

describe('Service: UserDetailsService', function() {
  beforeEach(module('polarisApp'));
  var userDetailsService,
    userDetailsObject = {},
    userDefaultCurrency = '',
    userSelectedCurrency = '',
    currencyData = {};

  beforeEach(inject(function(_userDetailsService_) {
    userDetailsService = _userDetailsService_;
    userDetailsObject = {"userName":"Bill"};
    userDefaultCurrency = 'GBP';
    userSelectedCurrency = 'GBP';
    currencyData = {"currency":'GBP'};
  }));

  it('userDetailsService definition test',function(){
    expect(userDetailsService).not.toBe(undefined);
  });

  it('userDetailsService User Details Object test',function(){
    userDetailsService.setUserDetailsObject(userDetailsObject);
    expect(userDetailsService.getUserDetailsObject()).not.toBe(undefined);
  });

  it('userDetailsService User Currency Data test',function(){
    userDetailsService.setCurrencyData(currencyData);
    expect(userDetailsService.getCurrencyData()).not.toBe(undefined);
  });

  it('userDetailsService User Default Currency test',function(){
    userDetailsService.setUserDefaultCurrency(userDefaultCurrency);
    expect(userDetailsService.getUserDefaultCurrency()).not.toBe(undefined);
  });

  it('userDetailsService User selected Currency test',function(){
    userDetailsService.setUserSelectedCurrency(userSelectedCurrency);
    expect(userDetailsService.getUserSelectedCurrency()).not.toBe(undefined);
  });
});
