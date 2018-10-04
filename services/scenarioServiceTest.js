'use strict';

describe('Service: scenarioService', function () {
    beforeEach(module('polarisApp'));
    var scenarioService, val, date, separator, type, sObj, list, data, kpiMetrics, oldKpiMetrics, startDate, endDate, lastYear, currentYear, totalEventList, source, tab, datE, defaultData, data, products, pulledDate, list, eventList, Id, config, chartData, metricData, c3;

    beforeEach(inject(function (_scenarioService_) {
        scenarioService = _scenarioService_;
        val = 21;
        date = [];
        separator = "";
        type = "";
        sObj = {
            id: 123,
            name: "polaris"
        };
        list = [];
        data = {
            eventIds: [],
            metric: {
                completedEventCount: {
                    "fullValue": ""
                },
                ytdSpend: {
                    "fullValue": ""
                },
                spend: {
                    "fullValue": ""
                }
            }
        };

        oldKpiMetrics = {
            "polaris1": {
                fullValue: "value1"
            },
            "polaris2": {
                fullValue: "value2"
            }
        };
        kpiMetrics = {
            "polaris1": {
                fullValue: "value1"
            },
            "polaris2": {
                fullValue: "value2"
            }
        };
        startDate = {
            getTime: function () {
                return "";
            }
        };
        endDate = {
            getTime: function () {
                return "";
            }
        };
        currentYear = {
            weeklyValues: {

            },
            monthlyValues: {

            }
        };
        lastYear = {
            weeklyValues: {

            },
            monthlyValues: {

            }
        };
        totalEventList = [];
        source = [];
        tab = "";
        datE = "";
        products = [
            {
                "promoPrice": 12,
                "regularPrice": 12
            },
            {
                "promoPrice": 12,
                "regularPrice": 12
            }
        ];
        Id = 12;
        eventList = [];
        config = {
            val: ""
        };
        chartData = {};
        metricData = [];
        c3 = {};
    }));

    it('scenarioService definition test', function () {
        expect(scenarioService).not.toBe(undefined);
    });

    it('scenarioService formatValue definition test', function () {
        expect(scenarioService.formatValue(val)).not.toBe(undefined);
    });

    it('scenarioService getDateSeparated definition test', function () {
        expect(scenarioService.getDateSeparated(date, separator, type)).not.toBe(undefined);
    });

    it('scenarioService updateScenarioName definition test', function () {
        expect(scenarioService.updateScenarioName(sObj, list)).not.toBe(undefined);
    });

    it('scenarioService calculateDiscountonProducts definition test', function () {
        expect(scenarioService.calculateDiscountonProducts(data)).not.toBe(undefined);
    });

    it('scenarioService calculatePlanMetrics definition test', function () {
        expect(scenarioService.calculatePlanMetrics(data)).not.toBe(undefined);
    });

    it('scenarioService calculateSimulation definition test', function () {
        //scenarioService.calculateSimulation(oldKpiMetrics, kpiMetrics)
        expect(scenarioService.calculateSimulation).not.toBe(undefined);
    });

    it('scenarioService calculateDuration definition test', function () {
        expect(scenarioService.calculateDuration(startDate, endDate)).not.toBe(undefined);
    });

    it('scenarioService processLastYearData definition test', function () {
        expect(scenarioService.processLastYearData(lastYear, currentYear)).not.toBe(undefined);
    });

    it('scenarioService getEventListByID definition test', function () {
        expect(scenarioService.getEventListByID(totalEventList, source, tab)).not.toBe(undefined);
    });

    it('scenarioService buildFilterArray definition test', function () {
        expect(scenarioService.buildFilterArray(datE)).not.toBe(undefined);
    });

    it('scenarioService errorMessage definition test', function () {
        expect(scenarioService.errorMessage(defaultData, data)).toBe(undefined);
    });

    it('scenarioService checkForNullRegularPrice definition test', function () {
        expect(scenarioService.checkForNullRegularPrice(products)).toBe(false);
    });

    it('scenarioService processEventsList definition test', function () {
        expect(scenarioService.processEventsList(list, pulledDate)).toBe(list);
    });

    it('scenarioService calculateEventStatus definition test', function () {
        expect(scenarioService.calculateEventStatus(list, eventList, tab)).toBe(list);
    });

    it('scenarioService checkIfAvailable definition test', function () {
        expect(scenarioService.checkIfAvailable(Id, data)).toBe(false);
    });

    it('scenarioService lineChart definition test', function () {
        //scenarioService.lineChart(config, chartData, metricData)
        expect(scenarioService.lineChart).toBeDefined();
    });


});
