'use strict';

describe('Controller: primaryFiltersTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  var ctrl, scope, alertManagementService, $localStorage,
    divID, filtersObj, isCollapsed, header, item, index, $event, name, currentTarget, viz, rootScope, toggleToConf, filtersObj, children, parent;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _alertManagementService_, $localStorage) {
    rootScope = $rootScope;
    scope = $rootScope.$new();
    alertManagementService = _alertManagementService_;
    localStorage = $localStorage;
    $event = $event;
    spyOn(scope, '$on').and.callThrough();
    spyOn(alertManagementService, 'hideFilterPanel').and.callFake(function () {
      return;
    });
    ctrl = $controller('primaryFiltersController', {
      $rootScope: rootScope,
      $scope: scope,
      alertManagementService: alertManagementService
    });
    divID = "polaris";
    item = "Polaris";
    parent = "pola";
    children = "child";
    scope.filtersObj = {
      "polaris": {
        isCollapsed: ""
      },
      "Polaris": {
        header: "",
        items: {
          name: "",
          "child": {
            data: ["polaris", "polaris", "polaris"]
          }
        }
      }
    };
    // scope.filtersObj = [{
    //   "polaris": {
    //     items: {
    //       "Pola": {
    //         data: []
    //       }
    //     }
    //   }
    // }
    // ];
    viz = {
      getWorkbook: function () {
        return {
          getActiveSheet: function () {
            return {
              getWorksheets: function () {
                return '';
              }
            }
          }
        }
      }
    };
    index = "";
    currentTarget = "";
    rootScope.toggleToConf = function () {
    };
  }));
  it(' is defined', function () {
    expect(ctrl).toBeDefined();
  });
  describe('Test the functions', function () {
    it('outerDivClicked should be defined', function () {
      expect(scope.outerDivClicked).toBeDefined();
    });
    it('showFilterItems should be defined', function () {
      expect(scope.showFilterItems(divID)).not.toBe(null);
    });
    xit('showSecondaryFiltersPanel should be defined', function () {
      expect(scope.showSecondaryFiltersPanel(header, index, name)).toBeDefined();
    });
    it('orderByTime should be defined', function () {
      expect(scope.orderByTime).toBeDefined();
    });
    it('resetFilters should be defined', function () {
      scope.resetFilters();
      expect(scope.resetFilters).toBeDefined();
    });
    it('applyFilters should be defined', function () {
      expect(scope.applyFilters).toBeDefined();
    });
    xit('filtersCheckList should be defined', function () {
      scope.$broadcast('filtersCheckList', { checkValue: "checkValue" });
      expect(scope.checkValue).toBe(undefined);
    });
    it('resetFilters should be defined', function () {
      scope.$broadcast('resetFilters', { toggleToConf: "toggleToConf" });
      expect(rootScope.toggleToConf).toBeDefined();
    });
    xit('resetSearchFilters should be defined', function () {
      scope.$broadcast('resetSearchFilters', {
        // viz: {
        //   getWorkbook: function () {
        //     return {
        //       getActiveSheet: function () {
        //         return {
        //           getWorksheets: function () {
        //             return [];
        //           }
        //         }
        //       }
        //     }
        //   }
        // }
        viz: "viz"
      });
      expect(scope.viz).toBeDefined();
    });
    it('$stateChangeStart should be defined', function () {
      scope.$broadcast('$stateChangeStart', { showFilterDiv: "showFilterDiv" });
      expect(rootScope.showFilterDiv).toBe(undefined);
    });
    it('loadFilters should be defined', function () {
      scope.$broadcast('loadFilters', {
        viz: {
          getWorkbook: function () {
            return {
              getActiveSheet: function () {
                return {
                  getWorksheets: function () {
                    return [];
                  }
                }
              }
            }
          }
        }
      });
      expect(rootScope.viz).toBe(undefined);
    });
  });
  describe('Test the functionalites of outerDivClicked', function () {
    it('outerDivClicked should call alertManagementService', function () {
      scope.outerDivClicked();
      expect(alertManagementService.hideFilterPanel).toHaveBeenCalled()
    })
  });

  describe('Test the functionalites of orderByTime', function () {
    it('orderByTime should return 1 if name contain YEAR at first position', function () {
      var item = { name: 'YEAR' };
      expect(scope.orderByTime(item)).toBe(1)
    });
    it('orderByTime should return 2 if name contain QUARTER at first position', function () {
      var item = { name: 'QUARTER' };
      expect(scope.orderByTime(item)).toBe(2)
    });
    it('orderByTime should return 3 if name contain MONTH at first position', function () {
      var item = { name: 'MONTH' };
      expect(scope.orderByTime(item)).toBe(3)
    });
    it('orderByTime should return 4 if name contain WEEK at first position', function () {
      var item = { name: 'WEEK' };
      expect(scope.orderByTime(item)).toBe(4)
    });
    it('orderByTime should return 1 if name contain something other than YEAR,QUARTER,MONTH,WEEK', function () {
      var item = { name: 'Something' };
      expect(scope.orderByTime(item)).toBe(1)
    });

  })
});
