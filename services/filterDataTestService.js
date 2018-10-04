'use strict';

describe('Service: filterDataTestService', function() {
  beforeEach(module('polarisApp'));
  var filterDataService,
  boolValue,
  filters;
  beforeEach(inject(function(_filterDataService_) {
    filterDataService = _filterDataService_;
    filters = [];
    boolValue = false;
  }));
  it('filterDataService definition test', inject(function() {
    expect(filterDataService).toBeDefined();
  }));
  it('setData SetData And GetData test', inject(function() {
    filterDataService.setData(filters);
    expect(filterDataService.getData()).toBeDefined();
  }));

  it('filterDataService setIsNavigationFromKPIDashboard test', inject(function() {
    filterDataService.setIsNavigationFromKPIDashboard(boolValue)
    expect(filterDataService.getIsNavigationFromKPIDashboard()).not.toBe(undefined);
  }));

  it('resetData  definition test', inject(function() {
    expect(filterDataService.resetData()).not.toBeDefined();
  }));
  it('getIsNavigationFromKPIDashboard   definition test', inject(function() {
    expect(filterDataService.getIsNavigationFromKPIDashboard).toBeDefined();
  }));
  it('getIsNavigationFromKPIDashboard functionality test', inject(function() {
    expect(filterDataService.getIsNavigationFromKPIDashboard()).toEqual(false);
  }));
  it('setIsNavigationFromKPIDashboard   definition test', inject(function() {
    expect(filterDataService.setIsNavigationFromKPIDashboard).toBeDefined();
  }));
});
