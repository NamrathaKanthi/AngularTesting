'use strict';

describe('Controller: secondaryFiltersTestCtlr', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  var ctrl, scope, rootScope, localStorage, data, name, value, items, viz, subMenuSelected,
    goldObject = {
      userInfo: {
        clientConfig: {
        }
      }
    };
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$localStorage_) {
    rootScope = $rootScope;
    scope = $rootScope.$new();
    localStorage = _$localStorage_;
    spyOn(scope, '$on').and.callThrough();
    localStorage.userInfo = JSON.stringify(goldObject['userInfo']);
    ctrl = $controller('secondaryFiltersController', {
      $rootScope: rootScope,
      $scope: scope,
      $localStorage: localStorage
    });
    scope.data = [{
      checked: true,
      hasOwnProperty: function () {
        return '';
      }
    }];
    scope.name = "";
    scope.value = "";
    scope.items = [{
      name: "polaris"
    }];
    scope.viz = {
      getWorkbook: function () {
        return {
          getActiveSheet: function () {
            return {
              getSheetType: function () {
                return '';
              },
              getWorksheets: function () {
                return {};
              },
              applyFilterAsync: function () {
                return '';
              }
            };
          }
        }
      }
    };
    scope.subMenuSelected = "polaris";
    scope.showOptions = 'polaris';
  }));
  it('secondaryFiltersController should be defined', function () {
    expect(ctrl).toBeDefined();
  });
  it('secondaryFiltersData method have been called ', function () {
    expect(scope.$on).toHaveBeenCalledWith('secondaryFiltersData', jasmine.any(Function));
  });

  describe('Test the Functions', function () {
    it('orderByMonths should be defined', function () {
      expect(scope.orderByMonths).toBeDefined();
    });
    it('stringIsNumber should be defined', function () {
      expect(scope.stringIsNumber).toBeDefined();
    });
    it('checkIfFilterModified should be defined', function () {
      scope.checkIfFilterModified();
      expect(scope.checkIfFilterModified).toBeDefined();
    });
    it('showOptions should be defined', function () {
      scope.showOptions = 'polaris';
      scope.$digest();
      expect(scope.showOptions).toEqual('polaris');
    });
    it('hideFilterPanel should be defined', function () {
      expect(scope.hideFilterPanel()).toBe(undefined);
    });
    it('hideSecondaryFiltersPanel should be defined', function () {
      scope.hideSecondaryFiltersPanel();
      expect(scope.hideSecondaryFiltersPanel).toBeDefined();
    });
    xit('fnCheckAppliedFilters should be defined', function () {
      scope.fnCheckAppliedFilters(data, name, value);
      expect(scope.fnCheckAppliedFilters).toBeDefined();
    });
    it('secondaryFilterInfo should be defined', function () {
      scope.$broadcast('secondaryFilterInfo', { viz: "viz" });
      expect(scope.viz).toBeDefined();
    });
    it('secondaryFiltersData should be defined', function () {
      scope.$broadcast('secondaryFiltersData', { type: "type", subMenu: "subMenu" });
      expect(scope.type).toBe(undefined);
      expect(scope.subMenu).toBe(undefined);
    });
  });
  describe('Test the functionalities of orderByMonths ', function () {
    it('orderByMonths should return -9999999 for item.name All', function () {
      var item = { name: 'All' };
      expect(scope.orderByMonths(item)).toEqual(-99999999);
    });
    it('orderByMonths should return 2 for item.name January', function () {
      var item = { name: 'January' };
      expect(scope.orderByMonths(item)).toEqual(2);
    });
    it('orderByMonths should return 3 for item.name February', function () {
      var item = { name: 'February' };
      expect(scope.orderByMonths(item)).toEqual(3);
    });
    it('orderByMonths should return 4 for item.name March', function () {
      var item = { name: 'March' };
      expect(scope.orderByMonths(item)).toEqual(4);
    });
    it('orderByMonths should return 5 for item.name April', function () {
      var item = { name: 'April' };
      expect(scope.orderByMonths(item)).toEqual(5);
    });
    it('orderByMonths should return 6 for item.name May', function () {
      var item = { name: 'May' };
      expect(scope.orderByMonths(item)).toEqual(6);
    });
    it('orderByMonths should return 7 for item.name June', function () {
      var item = { name: 'June' };
      expect(scope.orderByMonths(item)).toEqual(7);
    });
    it('orderByMonths should return 8 for item.name July', function () {
      var item = { name: 'July' };
      expect(scope.orderByMonths(item)).toEqual(8);
    });
    it('orderByMonths should return 9 for item.name August', function () {
      var item = { name: 'August' };
      expect(scope.orderByMonths(item)).toEqual(9);
    });
    it('orderByMonths should return 10 for item.name September', function () {
      var item = { name: 'September' };
      expect(scope.orderByMonths(item)).toEqual(10);
    });
    it('orderByMonths should return 11 for item.name October', function () {
      var item = { name: 'October' };
      expect(scope.orderByMonths(item)).toEqual(11);
    });
    it('orderByMonths should return 12 for item.name November', function () {
      var item = { name: 'November' };
      expect(scope.orderByMonths(item)).toEqual(12);
    });
    it('orderByMonths should return 13 for item.name December', function () {
      var item = { name: 'December' };
      expect(scope.orderByMonths(item)).toEqual(13);
    });
    it('orderByMonths should return 1 for default', function () {
      var item = { name: 'somestring' };
      expect(scope.orderByMonths(item)).toEqual(1);
    });
    it('orderByMonths should return -56 for item.name 56', function () {
      var item = { name: '56' };
      expect(scope.orderByMonths(item)).toEqual("56");
    });
    it('orderByMonths should return 56 for item.name Week 56', function () {
      var item = { name: 'Week 56' };
      expect(scope.orderByMonths(item)).toEqual(56);
    });
  });
  describe('Test the functionalities of stringIsNumber', function () {
    it('stringIsNumber should return true if string is number', function () {
      var s = "456";
      expect(scope.stringIsNumber(s)).toEqual(true);
    });
    it('stringIsNumber should return false if string is not a number', function () {
      var s = "someString";
      expect(scope.stringIsNumber(s)).toEqual(false);
    })
  });
});
