'use strict';

describe('Controller: crudChartController', function () {
  // load the controller's module
  beforeEach(module('polarisApp'));
  var ctrl, scope, $state, marks, filter, rawParameters, index, restAPIService, $q, viz1, sheet, Viz1, data, evt, groupIndex, marksEvent;
  var httpbackend, editTreeGroup;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$state_, _restAPIService_, _$q_, $injector) {
    scope = $rootScope.$new();
    $state = _$state_;
    restAPIService = _restAPIService_;
    httpbackend = $injector.get('$httpBackend');
    $q = _$q_;
    spyOn(restAPIService, 'invokeService').and.callFake(function () {
      var data;
      var deferred = $q.defer();
      deferred.resolve(data);
      return deferred.promise;
    });
    httpbackend.whenGET().respond({});
    ctrl = $controller('crudChartController', {
      $scope: scope,
      $state: $state
    });
    scope.listFilterSheets = {
      "0": {
        '0': {
          'index': 'test1'
        }
      }
    };
    scope.editTreeGroup = [[
      {
        'listFilter': []
      }
    ]];
    data = {
      sheetNum: 0,
      index: 0
    };
    evt = "";
    groupIndex = 0;
    scope.viz1 = {
      getWorkbook: function () {
        return {
          getActiveSheet: function () {
            return {
              getWorksheets: function () {
                return [{
                  "applyFilterAsync": function () {
                    return 0
                  }
                }
                ];
              }
            }
          },
          getParametersAsync: function () {
            return
            $q.when();
          }
        }
      }
    };
    marksEvent = {
      getMarksAsync: function () {
      }
    };
    scope.sheet = {
      getFiltersAsync: function () {
        return $q.defer();
      }
    }
    marks = [];
    rawParameters = {
      'item': {
        getAllowableValuesType: function () {
          return 'range';
        },
        getName: function () {
          return 'polaris';
        },
        getCurrentValue: function () {
          return {
            value: 0
          };
        },
        getMinValue: function () {
          return {
            value: 0
          };
        },
        getMaxValue: function () {
          return {
            value: 1
          };
        },
        getStepSize: function () {
          return '';
        }
      }
    };

    filter = {};
    index = 0;
  }));
  it('crudChartController should be defined', function () {
    expect(ctrl).toBeDefined();
  });

  it('crudChartController reportSelectedMarks should be defined', function () {
    scope.reportSelectedMarks(marks);
    expect(scope.reportSelectedMarks).not.toBe(undefined);
  });

  it('crudChartController showFilter should be defined', function () {
    scope.showFilter();
    expect(scope.showFilter).not.toBe(undefined);
  });

  it('crudChartController tableauGetParameters should be defined', function () {
    expect(scope.tableauGetParameters(rawParameters)).toBeDefined();
  });

  it('crudChartController addParam should be defined', function () {
    scope.addParam();
    expect(scope.addParam).not.toBe(undefined);
  });

  it('crudChartController goBack should be defined', function () {
    var stepConfig = 0;
    scope.goBack();
    expect(scope.goBack).not.toBe(undefined);
  });

  it('crudChartController saveParam should be defined', function () {
    scope.saveParam();
    expect(restAPIService.invokeService).toHaveBeenCalled();
    //restAPIService.invokeService();
  });

  it('crudChartController saveFilter should be defined', function () {
    scope.saveFilter();
    expect(restAPIService.invokeService).toHaveBeenCalled();
    expect(scope.saveFilter).not.toBe(undefined);
  });

  xit('crudChartController getFilter should be defined', function () {
    scope.getFilter()
    expect(scope.getFilter).toBeDefined();
  });

  xit('crudChartController getTableauParameters should be defined', function () {
    scope.getTableauParameters();
    expect(scope.getTableauParameters).not.toBe(undefined);
  });

  it('crudChartController onDropComplete should be defined', function () {
    scope.onDropComplete(data, evt, groupIndex);
    expect(scope.onDropComplete).not.toBe(undefined);
  });

  xit('crudChartController listenToMarksSelection1 should be defined', function () {
    expect(scope.listenToMarksSelection1).not.toBe(undefined);
  });

  it('onMarksSelection getTableauParameters should be defined', function () {
    //scope.onMarksSelection(marksEvent);
    expect(scope.onMarksSelection).not.toBe(undefined);
  });


});

