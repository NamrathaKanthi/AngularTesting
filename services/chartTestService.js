'use strict';

describe('Service: chartTestService', function () {
  beforeEach(module('polarisApp'));
  var chartService,
    $localStorage,
    workbook, goldObject,
    mappedValue,
    chartModule,
    chartState,
    filtersList,
    worksheets,
    parameters,
    parameterList,
    chartFilterAndParamService,
    rootScope,
    filters, viz, chartInfo,
    activeSheet, filterListFromPreviousState, chartNavigationService;
  beforeEach(inject(function ($injector, $rootScope) {
    chartService = $injector.get('chartService');
    rootScope = $injector.get('$rootScope');
    $localStorage = $injector.get('$localStorage');
    chartFilterAndParamService = $injector.get('chartFilterAndParamService');
    goldObject = {
      userInfo: {
        clientConfig: {
          "mappedValue": {
            "workbookName": {
              "trim": function () {
                return "";
              }
            },
            "parametersIncluded": [],
            "subParamListKeywords": []
          },
          "tableauFolderConfiguration": {
            "chartModule": {
              "chartState": {
                "folderName": "polaris"
              },
              "folderName": "folderName"
            }
          },
          chartName: {
            filterMapping: {}
          }
        }
      }
    };
    chartInfo = {
      modules: {
        "chartModule": {
          "chartURL": "chartURL",
          "tilesURL": "tilesURL"
        }
      }
    };
    spyOn(chartFilterAndParamService, 'fnGetParameters').and.callFake(function () {
      return parameters;
    });
    rootScope.chartName = "mappingObj";
    chartModule = "chartModule";
    $localStorage.userInfo = JSON.stringify(goldObject['userInfo']);
    // chartNavigationService = {
    //   "getHashValueByMenuName": function (chartName) {
    //   }
    // };
    // chartFilterAndParamService = {
    //   "fnGetParameters": function (rawParameters) {
    //     return parameters;
    //   },
    //   "fnGetFilters": function (rawFilters) {
    //     return returnArr;
    //   }
    // };
    workbook = {
      getActiveSheet: function () {
        return {
          getWorksheets: function () {
            return [];
          }
        }
      }
    };
    worksheets = {};
    filtersList = [];
    mappedValue = 'mappedValue';
    parameters = {};
    parameterList = [];
    viz = {};
    filterListFromPreviousState = "previoustate";
    activeSheet = [];
    chartService.$inject = ['chartInfo'];
  }));

  it('chartTestService definition test', function () {
    expect(chartService).not.toBe(undefined);
  });

  it('chartTestService fnGetActiveSheet definition test', function () {
    chartService.fnGetActiveSheet(workbook, mappedValue);
    expect(chartService.fnGetActiveSheet).toBeDefined();
  });

  it('chartTestService definition test', function () {
    expect(chartService.fnGetChartURL(chartModule, chartState)).not.toBe(undefined);
  });
  it('chartTestService fnLoadFilters definition test', function () {
    expect(chartService.fnLoadFilters(filters, viz)).not.toBe(undefined);
  });
  it('chartTestService fnGetParametersList definition test', function () {
    chartService.fnGetParametersList(parameters);
    chartFilterAndParamService.fnGetParameters.toHaveBeenCalled();
    expect(chartService.fnGetParametersList).not.toBe(undefined);
  });
  it('chartTestService fnGetInfoKPIURL definition test', function () {
    chartService.fnGetInfoKPIURL(chartModule, chartState);
    expect(chartService.fnGetInfoKPIURL).not.toBe(undefined);
  });
  it('chartTestService resetFilters definition test', function () {
    expect(chartService.resetFilters(worksheets, filtersList)).not.toBe(undefined);
  });
  it('chartTestService fnMergeAndUpdateFiltersList definition test', function () {
    expect(chartService.fnMergeAndUpdateFiltersList(filtersList, activeSheet, filterListFromPreviousState)).not.toBe(undefined);
  });


});
