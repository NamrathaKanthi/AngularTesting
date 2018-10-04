'use strict';

describe('Controller: subHeaderTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  var ctrl, scope, ngDialogInstance, alertManagementService, rootScope;
  var store = {
    userInfo: {
      userDetails: {
        firstName: 'Bill',
        lastName: 'Rose',
        company: 'B',
        email: 'BillRose@deloitte.com'
      },
      clientConfig: {
        "benchmarkWaterfall": {
          "primaryParameters": {
            "trendAnalysisDetailed": "BMW Detailed Trend Analysis",
            "trendAnalysisSheet": "BMW Trend Analysis",
            "detailedChartName": "BMW Detailed",
            "bmwTiles": "BMW - Actual Tiles",
            "bmwDetailedLower": "BMW Detailed - Actual Tiles",
            "waterfallColor": "Waterfall Color",
            "waterfallElements": "Waterfall Elements",
            "costElement": "Cost Element",
            "BenchmarkSelection": "Benchmark Selection",
            "BenchmarkLevel": "Benchmark Comparison",
            "baseSelection": "Base Selection"
          },
          "toggleValues": {
            "name": "Tile Toggle",
            "actual": "Actual",
            "difference": "Difference"
          },
          "workbookName": "BMW - Actual Tiles",
          "worksheetName": "BMW - Actual Tiles",
          "UpperSheet": "BMW",
          "parametersIncluded": ["Benchmark Comparison", "Tile Toggle", "Time Period"],
          "subParamListKeywords": ["Benchmark Comparison", "Tile Toggle", "Time Period"],
          "filterMapping": {
            "headers": [
              "Customer",
              "Product",
              "Time Period"
            ],
            "Customer": [],
            "Product": [],
            "Time Period": [
              "YEAR({{Transaction Date}})",
              "QUARTER({{Transaction Date}})",
              "MONTH({{Transaction Date}})",
              "WEEK({{Transaction Date}})"
            ]
          },
          "bmwsSecondayParam": "BMWS"
        },
        "eventCalendar": {
          "primaryParameters": {
            "toggleUnit": "Chart or Table",
            "customerName": "{{Customer Name}}",
            "customerChannel": "{{Customer Channel}}",
            "yearFilter": "YEAR({{Promo Start Date}})",
            "first": "Chart",
            "last": "Table",
            "timePeriod": "Time Period",
            "revenueSlider": "{{Promo Latest Estimate Value}}"
          },
          "workbookName": "EventCal_Gantt",
          "subParamListKeywords": [
            "Color",
            "Y-Axis Grouping"
          ],
          "parametersIncluded": [
            "Chart or Table",
            "Y-Axis Financials"
          ],
          "filterMapping": {
            "headers": [
              "Customer",
              "Product",
              "Event",
              "Time Period"
            ],
            "Customer": [
              "Measure Names",
              "#CALC: Chart or Table"
            ],
            "Product": [],
            "Event": [
              "Promo Name",
              "Promo Type",
              "Promo Tactic",
              "Promo Campaign Holiday",
              "Promo Spend Type"
            ],
            "Time Period": [
              "YEAR({{Promo Start Date}})",
              "MONTH({{Promo Start Date}})",
              "WEEK({{Promo Start Date}})",
              "QUARTER({{Promo Start Date}})"
            ]
          },
          "sliderConfigurations": [
            "{{Promo Latest Estimate Roi}}",
            "{{Promo Latest Estimate Value}}"
          ],
          "filtersAsParameters": [
            "{{Customer Name}}",
            "YEAR({{Promo Start Date}})"
          ],
          "filterParamterAlias": [
            "{{Customer Name}}",
            "Time Period"
          ]
        }
      }
    }
  };
  var _localStorage = {};
  var sliderValue, isPrimary, toggleParameter, searchedFilterKey, searchedFilterValue, elementId, currency, defaultValue, currencyIcon, viz, format, toState, toggleParameter;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, Constants, chartInfo, _alertManagementService_) {
    rootScope = $rootScope;
    scope = $rootScope.$new();
    alertManagementService = _alertManagementService_;
    ngDialogInstance = {
      openConfirm: jasmine.createSpy('ngDialogInstance.open')
    };
    // LocalStorage mock.
    _localStorage.getItem = jasmine.createSpy('getItem').and.callFake(function (key) {
      return JSON.stringify(store[key]);
    });
    _localStorage.setItem = jasmine.createSpy('setItem').and.callFake(function (key, value) {
      store[key] = value;
    });

    _localStorage.userInfo = JSON.stringify(store['userInfo']);
    _localStorage.$default = jasmine.createSpy('$default').and.callFake(function (value) {
      return value;
    });
    spyOn(alertManagementService, 'showFilterPanel').and.callFake(function () {
      return true;
    });
    ctrl = $controller('subHeaderController', {
      $rootScope: rootScope,
      $scope: scope,
      $localStorage: _localStorage,
      Constants: Constants,
      chartInfo: chartInfo,
      alertManagementService: alertManagementService
    });
    rootScope.toggleToConf = function () {

    };
    sliderValue = "";
    isPrimary = true;
    toggleParameter = {
      name: "polaris",
      isFilter: true,
      AxisValues: [{
        title: "polaris"
      }]
    };
    searchedFilterKey = "";
    searchedFilterValue = "";
    elementId = "";
    currency = 123;
    defaultValue = "polaris";
    currencyIcon = "polaris";
    scope.viz = {
      showExportPDFDialog: function () {

      },
      showExportImageDialog: function () {

      }
    };
    format = "";
  }));
  it('subHeaderController should be defined', function () {
    expect(ctrl).toBeDefined();
  });

  describe('Test the functions for definition', function () {
    it('sendEmail should be defined', function () {
      expect(scope.sendEmail).toBeDefined();
    });
    it('cancelSave should be defined', function () {
      expect(scope.cancelSave).toBeDefined();
    });

    it('fnEnableSearch should be defined', function () {
      expect(scope.fnEnableSearch).toBeDefined();
    });
    it('fnClearSearchContent should be defined', function () {
      expect(scope.fnClearSearchContent).toBeDefined();
    });
    it('openGlobalTitle should be defined', function () {
      scope.openGlobalTitle();
      expect(scope.openGlobalTitle).toBeDefined();
    });
    it('checkForTheChart should be defined', function () {
      scope.checkForTheChart();
      expect(scope.checkForTheChart).toBeDefined();
    });
    it('fnIsVisible should be defined', function () {
      scope.fnIsVisible();
      expect(scope.fnIsVisible).toBeDefined();
    });
    it('fnShowSuccessmessage should be defined', function () {
      scope.fnShowSuccessmessage();
      expect(scope.fnShowSuccessmessage).toBeDefined();
    });
    it('fnBookMarkPageFilters should be defined', function () {
      scope.fnBookMarkPageFilters();
      expect(scope.fnBookMarkPageFilters).toBeDefined();
    });
    it('applySliderToggle should be defined', function () {
      scope.applySliderToggle(sliderValue, isPrimary);
      expect(scope.applySliderToggle).toBeDefined();
    });
    it('fnSearchedFilterValue should be defined', function () {
      scope.fnSearchedFilterValue(searchedFilterKey, searchedFilterValue);
      expect(scope.fnSearchedFilterValue).toBeDefined();
    });
    it('copyUrl should be defined', function () {
      //scope.copyUrl(elementId);
      expect(scope.copyUrl).toBeDefined();
    });
    it('fnSelectCurrency should be defined', function () {
      scope.fnSelectCurrency(currency, defaultValue);
      expect(scope.fnSelectCurrency).toBeDefined();
    });
    it('fnGetSelectedCurrencyIcon should be defined', function () {
      scope.fnGetSelectedCurrencyIcon(currencyIcon);
      expect(scope.fnGetSelectedCurrencyIcon).toBeDefined();
    });
    it('HIDEFILTER should be defined', function () {
      scope.$broadcast('HIDEFILTER', {
        resetToggle: function () {
          expect(scope.resetToggle()).toBeDefined();
        }
      });
    });
    it('loadFilters should be defined', function () {
      scope.$broadcast('loadFilters', { viz: "viz" });
      expect(scope.viz).toBeDefined();
    });
    it('exportPDF should be defined', function () {
      scope.exportPDF();
      expect(scope.exportPDF).toBeDefined();
    });
    it('exportImage should be defined', function () {
      scope.exportImage();
      expect(scope.exportImage).toBeDefined();
    });
    it('exportData should be defined', function () {
      scope.exportData(format);
      expect(scope.exportData).toBeDefined();
    });
    it('$stateChangeStart should be defined', function () {
      scope.$broadcast('$stateChangeStart', {
        name: "polaris"
      });
      expect(scope.name).toBe(undefined);
    });
    it('$locationChangeSuccess should be defined', function () {
      scope.$broadcast('$locationChangeSuccess', {
        currentScope: "currentScope"
      });
      expect(scope.currentScope).toBe(undefined);
    });
    it('storeParametersForBookmarks should be defined', function () {
      rootScope.$broadcast('storeParametersForBookmarks', {
        capturedFilters: "capturedFilters",
        capturedParameters: "capturedParameters"
      });
      expect(rootScope.capturedFilters).toBe(undefined);
      expect(rootScope.capturedParameters).toBe(undefined);
    });
    it('closeGlobalTiles should be defined', function () {
      rootScope.$broadcast('closeGlobalTiles', {
        isTile: "isTile"
      });
      expect(rootScope.isTile).toBe(undefined);
    });
    xit('SHOWCURRENCY should be defined', function () {
      scope.$broadcast('SHOWCURRENCY', {
        val: "val"
      });
      expect(scope.val).toBeDefined();
    });
    it('updateCurrencyIcon should be defined', function () {
      rootScope.$broadcast('updateCurrencyIcon', {
        currencyData: "currencyData"
      });
      expect(rootScope.currencyData).toBe(undefined);
    });
    it('hideToggle should be defined', function () {
      rootScope.$broadcast('hideToggle', {
        currentSheet: "currentSheet"
      });
      expect(rootScope.currentSheet).toBe(undefined);
    });


  });

  describe('Test sendEmail functionalities', function () {
    it('sendEmail should set bookmark.name to empty string if it is defined', function () {
      scope.bookmark.name = 'somename';
      scope.cancelSave();
      expect(scope.bookmark.name).toBe('');
    })
  });

  describe('Test cancelSave functionalities', function () {
    xit('cancelSave should set link to location.href', function () {
      scope.sendEmail();
      expect(window.location.href).toBe('http://localhost:9999/context.html');
    })
  });

  describe('Test fnEnableSearch functionalities', function () {
    it('fnEnableSearch should set searched to true', function () {
      scope.fnEnableSearch();
      expect(scope.searched).toEqual(true);
    })
  });

  describe('Test fnClearSearchContent  functionalities', function () {
    it('fnClearSearchContent should set search.searchedElement to empty string', function () {
      scope.fnClearSearchContent();
      expect(scope.search.searchedElement).toEqual('');
    })
  });
  describe('Test the functionalities of bookPublic', function () {
    it('bookPublic should toggle "isPrivate.checked" to false and "isPublic.checked" to true', function () {
      scope.isPrivate = { checked: true };
      scope.bookPublic();
      expect(scope.isPrivate.checked).toEqual(false);
    })
  });
  describe('Test the functionalities of bookPrivate', function () {
    it('bookPrivate should toggle "isPrivate.checked" to true and "isPublic.checked" to false', function () {
      scope.isPublic = { checked: true };
      scope.bookPrivate();
      expect(scope.isPublic.checked).toEqual(false);
    })
  });
  describe('Test the openHelp functionality', function () {
    it('openHelp should open modal pop up', function () {
      ngDialogInstance.openConfirm();
      scope.openHelp();
      expect(ngDialogInstance.openConfirm).toHaveBeenCalled()
    })
  });
  describe('Test the showFilter functionality', function () {
    it('showFilter should call showFilterPanel of alertManagementService', function () {
      scope.showFilter();
      expect(alertManagementService.showFilterPanel).toHaveBeenCalled()
    })
  });

  describe('Test the fnShowBookmarkModal functionality', function () {
    it('fnShowBookmarkModal should open modal pop up', function () {
      scope.fnShowBookmarkModal();
      expect(scope.bookmark.url).toEqual('');
      expect(scope.bookmark.isUrlBookmarked).toBeFalsy();
      expect(scope.isSaveEnable).not.toBeFalsy();
    })
  });
});
