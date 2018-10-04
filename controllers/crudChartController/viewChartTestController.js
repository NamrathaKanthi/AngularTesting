'use strict';

describe('Controller: viewChartController', function () {
    // load the controller's module
    beforeEach(module('polarisApp'));
    var ctrl, scope, $state, viz1, chart, index, secondFilterList, rawParameters, restAPIService, httpRequest, $q, rootScope, sheet, httpbackend;
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, _$state_, _restAPIService_, _$q_, $injector) {
        scope = $rootScope.$new();
        rootScope = $rootScope;
        $state = _$state_;
        restAPIService = _restAPIService_;
        httpbackend = $injector.get('$httpBackend')
        $q = _$q_;
        spyOn(restAPIService, 'invokeService').and.callFake(function () {
            var data;
            var deferred = $q.defer();
            deferred.resolve(data);
            return deferred.promise;
        });
        httpbackend.whenGET().respond({});
        // spyOn($state, 'go').and.callFake(function () {
        //   return true;
        // });
        ctrl = $controller('viewChartController', {
            $scope: scope,
            $state: $state,
            $rootScope: rootScope
        });
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
                        return $q.when([]);
                    }

                }
            }
        };
        scope.sheet = {
            getFiltersAsync: function () {
                return $q.when();
            }
        }
        index = 0;
        scope.chart = { 'sheets': [{ 'groups': [{ 'filters': [{ 'config_id': 'config1' }] }] }] };
        scope.listFilterSheets = [{ 'config1': { '$1': 'something', '$9': [{}] } }];
        secondFilterList = [{
            "secondFilterList": ""
        }];
        rawParameters = [];
    }));
    it('viewChartController should be defined', function () {
        expect(restAPIService.invokeService).toHaveBeenCalled();
        expect(ctrl).not.toBe(undefined);
    });

    it('viewChartController getFilter should be defined', function () {
        scope.getFilter();
        expect(scope.getFilter).not.toBe(undefined);
    });

    it('viewChartController fillGroupFilter should be defined', function () {
        scope.fillGroupFilter();
        expect(scope.fillGroupFilter).toBeDefined();
        expect(rootScope.groupFilters).toBe(scope.chart.sheets[0].groups);
    });

    it('viewChartController selectGroupFilter should be defined', function () {
        expect(rootScope.selectGroupFilter).toBeDefined();
        rootScope.selectGroupFilter(0);
        expect(rootScope.groupFilterIndex).toBe(0);
    });
    it('viewChartController secondFilterListApply should be defined', function () {
        expect(rootScope.secondFilterListApply).toBeDefined();
        rootScope.secondFilterListApply(secondFilterList);
    });

    it('viewChartController tableauGetParameters should be defined', function () {
        expect(scope.tableauGetParameters(rawParameters)).toBeDefined();
    });

    it('viewChartController getTableauParameters should be defined', function () {
        //expect(restAPIService.invokeService).toHaveBeenCalled();
        scope.getTableauParameters();
        expect(scope.getTableauParameters).toBeDefined();
    });

});
