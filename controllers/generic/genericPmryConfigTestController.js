'use strict';

describe('genericPmryConfigTestController', function () {
    beforeEach(angular.mock.module('polarisApp'));
    var controller, goldObject, rootScope, scope, state, localStorage, chartFilterAndParamService, chartNavigationService, chartService, Constants, errorHandlerService, bookMarkService, hierarchyRulesService, hierarchyRules, header, option, filterDataService, restAPIService, applyParameterService, clientSpecificMappingService, chartAttributes, userDetailsService, viz, multiSelectParameter, opt, $rootScope, axisObj;
    goldObject = {
        userInfo: {
            clientConfig: {
                "mappedValue": {
                    "workbookName": "Analysis and compare Sheet",
                    "upperSheet": "Share and Size Analysis Sheet",
                    "parametersIncluded": [
                        "Level of Detail",
                        "Time Period",
                        "Y1-Axis",
                        "Value or Units"
                    ],
                    "subParamListKeywords": [
                        "Y-Axis: Price",
                        "Comparison Level",
                        "Competitor Comparison Level",
                        "Own Comparison Level"
                    ],
                    "filtersAsParameters": {
                        "Competitor Comparison Level": "#CALC: Competitor Selection",
                        "Own Comparison Level": "#CALC: Own Selection"
                    },
                    "multiSelectParameter": {
                        "configType": "lower",
                        "originalName": "polaris",
                        "AxisValues": "axis",
                        "name": "polaris"
                    },
                    "toggleValues": ["Value or Units"],
                    "filterToggle": ["{{Competitor Flag}}"],
                    "hideNullInFilterParameter": true,
                    "isCurrentYear": true,
                    "selectionParameter": {
                        "Comparison Level": ["Competitor Comparison Level", "Own Comparison Level"]
                    },
                    "filterMapping": {
                        "headers": [
                            "Customer",
                            "Product",
                            "Fiscal Time Period",
                            "Calendar Time Period"
                        ],
                        "Customer": [],
                        "Product": [],
                        "Fiscal Time Period": [
                            "{{Fiscal Period Name}}",
                            "{{Fiscal Quarter Name}}",
                            "{{Fiscal Week Number}}",
                            "{{Fiscal Year Name}}"
                        ],
                        "Calendar Time Period": [
                            "YEAR({{POS Week End Date}})",
                            "MONTH({{POS Week End Date}})",
                            "WEEK({{POS Week End Date}})",
                            "QUARTER({{POS Week End Date}})"
                        ]
                    }
                }
            },
            userDetails: {
                "company": "gold",
                "user": {
                    "customerLocation1": ""
                }
            }
        }
    };
    opt = {
        name: {
            trim: function () {
                return '';
            }
        },
        type: "",
        AxisValues: ""
    };
    beforeEach(angular.mock.inject(function ($controller, $rootScope, _Constants_, $state, $localStorage, _errorHandlerService_, _chartFilterAndParamService_, _chartNavigationService_, _chartService_, _bookMarkService_, _hierarchyRulesService_, _hierarchyRules_, _filterDataService_, _restAPIService_, _applyParameterService_, _clientSpecificMappingService_, _chartAttributes_, _userDetailsService_) {
        rootScope = $rootScope;
        scope = $rootScope.$new();
        state = $state;
        localStorage = $localStorage;
        Constants = _Constants_;
        errorHandlerService = _errorHandlerService_;
        chartFilterAndParamService = _chartFilterAndParamService_;
        chartNavigationService = _chartNavigationService_;
        chartService = _chartService_;
        bookMarkService = _bookMarkService_;
        hierarchyRulesService = _hierarchyRulesService_;
        filterDataService = _filterDataService_;
        restAPIService = _restAPIService_;
        applyParameterService = _applyParameterService_;
        clientSpecificMappingService = _clientSpecificMappingService_;
        chartAttributes = _chartAttributes_;
        userDetailsService = _userDetailsService_;
        hierarchyRules = _hierarchyRules_;
        localStorage.userInfo = JSON.stringify(goldObject['userInfo']);
        spyOn(chartService, 'fnGetActiveSheet').and.callFake(function (workbook, mappedValue) {
            return {};
        });

        spyOn(restAPIService, 'invokeService').and.callFake(function (url) {
            return {
                then: function (cb) {
                    cb({ data: { decision: 'decisionWorkflowCtrl' } });
                }
            };
        });
        spyOn(chartService, 'fnGetChartURL').and.callFake(function (chartHeader, chartName) {
            return 'https://domainName/company/tableauFolder/workbookName/dashboard';
        });
        spyOn(chartService, 'fnGetParametersList').and.callFake(function (chart, parameters) {
            return parameters;
        });
        spyOn(chartNavigationService, 'getHashValueByMenuName').and.callFake(function () {
            return 'mappedValue';
        });
        controller = $controller('genericPmryConfigController', {
            $rootScope: rootScope,
            $scope: scope,
            $state: state,
            Constants: Constants,
            errorHandlerService: errorHandlerService,
            chartFilterAndParamService: chartFilterAndParamService,
            chartNavigationService: chartNavigationService,
            chartService: chartService,
            filterDataService: filterDataService,
            restAPIService: restAPIService,
            applyParameterService: applyParameterService,
            clientSpecificMappingService: clientSpecificMappingService,
            $localStorage: localStorage,
            bookMarkService: bookMarkService,
            hierarchyRulesService: hierarchyRulesService,
            hierarchyRules: hierarchyRules,
            chartAttributes: chartAttributes,
            userDetailsService: userDetailsService
        });
        header = '';
        option = {
            isCollapsed: true,
            selected: '',
            name: {
                trim: function () {
                    return '';
                }
            }
        };
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
        axisObj = [
            {
                checked: true,
                title: "polaris"
            }
        ];
    }));
    it('genericChartController should be defined', function () {
        expect(controller).toBeDefined();
    });

    xit('fnGetFiltersList should be defined', function () {
        expect(scope.fnGetFiltersList).toBeDefined();
    });

    it('fnDimensionSelected should be defined', function () {
        scope.fnDimensionSelected(header, option)
        expect(scope.fnDimensionSelected).toBeDefined();
    });

    it('fnHeaderClicked should be defined', function () {
        scope.fnHeaderClicked(header, axisObj)
        expect(scope.fnHeaderClicked).toBeDefined();
    });

    xit('loadParameters should be defined', function () {
        rootScope.$broadcast('loadParameters', { viz: "viz" });
        expect(rootScope.viz).toBeDefined();
    });

    xit('applyMultiSelectParameter should be defined', function () {
        scope.applyMultiSelectParameter(multiSelectParameter);
        expect(scope.applyMultiSelectParameter).toBeDefined();
    });
    it('applySelectedParameters should be defined', function () {
        scope.applySelectedParameters();
        expect(scope.applySelectedParameters).toBeDefined();
    });
    it('fnGetFilterItems should be defined', function () {
        scope.fnGetFilterItems(opt);
        expect(scope.fnGetFilterItems).toBeDefined();
    });
    it('disposeViz should be defined', function () {
        rootScope.$broadcast('disposeViz', { currentState: "currentState " });
        expect(rootScope.currentState).toBe(undefined);
    });

});
