'use strict';

describe('Service: SharedFilterService', function() {
  beforeEach(module('polarisApp'));
  var sharedFilterService,
   selectedFilterObject = {},
   prevChart = '',
   currentYear = '',
   filter = '',
   allApplied = '';
  beforeEach(inject(function(_sharedFilterService_) {
    sharedFilterService = _sharedFilterService_;
    prevChart = "MSS";
    selectedFilterObject = {};
    currentYear = "2017";
    filter = 'Product Attribute 1';
    allApplied = 'true';
  }));

  it('sharedFilterService definition test',function(){
    expect(sharedFilterService).not.toBe(undefined);
  });

  it('sharedFilterService previous chart test',function(){
    sharedFilterService.setPreviousChart(prevChart);
    expect(sharedFilterService.getPreviousChart()).not.toBe(undefined);
  });

  it('sharedFilterService Selected Filter Object test',function(){
    sharedFilterService.setSelectedFilterObject(prevChart, selectedFilterObject);
    expect(sharedFilterService.getSelectedFilterObject(prevChart)).not.toBe(undefined);
  });

  it('sharedFilterService to get current year',function(){
    sharedFilterService.setCurrentYear(currentYear);
    expect(sharedFilterService.getCurrentYear()).not.toBe(undefined);
  });

  it('sharedFilterService Modified Filters',function(){
    sharedFilterService.setModifiedFilters(filter,allApplied);
    expect(sharedFilterService.getModifiedFilters()).not.toBe(undefined);
  });

});
