'use strict';

describe('Service: chartFilterAndParamTestService', function () {
  beforeEach(module('polarisApp'));
  var chartFilterAndParamService, $localStorage, rawFilters, url, authToken, chartNavigationService, goldObject, mappingObj, mappedValue, rawParameters, item;
  beforeEach(inject(function ($injector) {
    chartFilterAndParamService = $injector.get("chartFilterAndParamService");
    chartNavigationService = $injector.get("chartNavigationService");
    $localStorage = $injector.get('$localStorage');
    rawFilters = '';
    url = 'polaris';
    authToken = "polaris";
    goldObject = {
      userInfo: {
        clientConfig: {
          "mappedValue": {
            "filterMapping": {
              "headers": ""
            }
          }
        }
      }
    };
    mappedValue = "mappedValue";
    rawParameters = {
      "item": {
        getAllowableValuesType: function () {

        },
        getName: function () {
          return {
            replace: function () {
              return '';
            }
          }
        },
        getCurrentValue: function () {
          value: 0
        },
        getMinValue: function () {
          value: 0
        },
        getMaxValue: function () {
          value: 1
        },
        getStepSize: function () {

        }
      }
    };
    item = "parameter";
    spyOn(chartNavigationService, 'getHashValueByMenuName').and.callFake(function () {
      return "mappedValue";
    });
    $localStorage.userInfo = JSON.stringify(goldObject['userInfo']);
    mappingObj = "mappingObj";
  }));

  it('chartFilterAndParamTestService definition test', inject(function () {
    expect(chartFilterAndParamService).not.toBe(undefined);
  }));
  it('chartFilterAndParamTestService fnGetFilters definition test', inject(function () {
    chartFilterAndParamService.fnGetFilters(rawFilters);
    chartNavigationService.getHashValueByMenuName.toHaveBeenCalled();
    expect(chartFilterAndParamService.fnGetFilters).toBeDefined();
  }));
  it('chartFilterAndParamService fnGetTableauAuthenticationToken definition test', inject(function () {
    chartFilterAndParamService.fnGetTableauAuthenticationToken(url);
    expect(chartFilterAndParamService.fnGetTableauAuthenticationToken).toBeDefined();
  }));
  it('chartFilterAndParamService fnGetTrustedChartUrl definition test', inject(function () {
    chartFilterAndParamService.fnGetTrustedChartUrl(url, authToken)
    expect(chartFilterAndParamService.fnGetTrustedChartUrl).toBeDefined();
  }));
  it('chartFilterAndParamService fnGetParameters definition test', inject(function () {
    chartFilterAndParamService.fnGetParameters(rawParameters);
    expect(chartFilterAndParamService.fnGetParameters).toBeDefined();
  }));
});
