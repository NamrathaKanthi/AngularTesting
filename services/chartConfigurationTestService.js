'use strict';

describe('Service: chartConfigurationTestService', function () {
  beforeEach(module('polarisApp'));
  var chartConfigurationService,
    option, header, workbook, chartAttributes,
    activeSheet, parameterName, parameterValue, action, $q;
  beforeEach(inject(function (_chartConfigurationService_, $q) {
    chartConfigurationService = _chartConfigurationService_;
    $q = $q;
    chartAttributes = {
      tableauPrefixes: {
        "ctrl": ""
      }
    };
    option = {
      selected: "polaris",
      name: {
        trim: function () {
          return "";
        }
      },
      trim: function () {
        return '';
      }
    };
    header = "";
    workbook = {
      changeParameterValueAsync: function (parameterName, parameterValue) {
        return $q.when();
      }
    };
    parameterName = "";
    parameterValue = header;
    activeSheet = {
      applyFilterAsync: function () {
        return parameterName, parameterValue, action;
      }
    };
  }));
  it('chartConfigurationService definition test', inject(function () {
    expect(chartConfigurationService).not.toBe(undefined);
  }));
  it('chartConfigurationService fnChangeParam definition test', inject(function () {
    expect(chartConfigurationService.fnChangeParam(option, header, workbook)).not.toBe(undefined);
  }));
  it('chartConfigurationService fnChangeParamForToggleWithOutCTRL definition test', inject(function () {
    expect(chartConfigurationService.fnChangeParamForToggleWithOutCTRL(option, header, workbook)).not.toBe(undefined);
  }));
  it('chartConfigurationService fnChangeParamForToggle definition test', inject(function () {
    expect(chartConfigurationService.fnChangeParamForToggle(option, header, workbook)).not.toBe(undefined);
  }));
  it('chartConfigurationService applyFilter definition test', inject(function () {
    expect(chartConfigurationService.applyFilter(activeSheet, parameterName, parameterValue, action)).toBeDefined();
  }));
});
