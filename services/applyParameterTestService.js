'use strict';

describe('Service: applyParameterTestService', function () {
  beforeEach(module('polarisApp'));
  var applyParameterService,
    configurations,
    filterAsParameters,
    parametersCaptured,
    activeSheet,
    workbook,
    parameterName,
    parameterValue;
  beforeEach(inject(function (_applyParameterService_) {
    applyParameterService = _applyParameterService_;
    configurations = '';
    filterAsParameters = '';
    parametersCaptured = '';
    activeSheet = '';
    workbook = '';
    parameterName = '';
    parameterValue = '';
  }));
  it('applyParameterService definition test', inject(function () {
    expect(applyParameterService).not.toBe(undefined);
  }));

  it('applyParameterService definition test', inject(function () {
    expect(applyParameterService.fnApplyCapturedFilterParams(configurations, filterAsParameters, parametersCaptured, activeSheet, workbook)).not.toBe(undefined);
  }));

  it('applyParameterService definition test', inject(function () {
    expect(applyParameterService.filterAsParameters).toBe(undefined);
  }));



});
