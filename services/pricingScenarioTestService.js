'use strict';

describe('Service: pricingScenarioService', function () {
    beforeEach(module('polarisApp'));
    var pricingScenarioService, endDate, startDate, ids, data, originalData, array, oldKpiMetrics, kpiMetrics, a, b, metrics;

    beforeEach(inject(function (_pricingScenarioService_) {
        pricingScenarioService = _pricingScenarioService_;
        startDate = {
            replace: function () {
                return '';
            }
        };
        endDate = {
            replace: function () {
                return '';
            }
        };
        ids = [];
        data = {
            map: function () {
                return '';
            }
        };
        originalData = {
            map: function () {
                return '';
            }
        };
        array = [];
        metrics = ["polaris1", "polaris2"];
        oldKpiMetrics = {
            "polaris1": {
                fullValue: "value1",
                type: ""
            },
            "polaris2": {
                fullValue: "value2",
                type: ""
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
        a = {
            replace: function () {
                return '';
            }
        };
        b = {
            replace: function () {
                return '';
            }
        };
    }));

    it('scenarioService definition test', function () {
        expect(pricingScenarioService).not.toBe(undefined);
    });

    it('scenarioService setDate definition test', function () {
        expect(pricingScenarioService.setDate(startDate, endDate)).not.toBe(undefined);
    });

    it('scenarioService getPriceEditValues definition test', function () {
        expect(pricingScenarioService.getPriceEditValues(ids, data, originalData)).not.toBe(undefined);
    });

    it('scenarioService splitPricingEditArray definition test', function () {
        expect(pricingScenarioService.splitPricingEditArray(array)).not.toBe(undefined);
    });

    it('scenarioService getPricingProductList definition test', function () {
        expect(pricingScenarioService.getPricingProductList(data, ids)).not.toBe(undefined);
    });

    it('scenarioService calculateSimulation definition test', function () {
        pricingScenarioService.calculateSimulation(oldKpiMetrics, kpiMetrics);
        expect(pricingScenarioService.calculateSimulation).not.toBe(undefined);
    });

    it('scenarioService calculateSummarySimulation definition test', function () {
        expect(pricingScenarioService.calculateSummarySimulation(ids, originalData, data)).not.toBe(undefined);
    });

    it('scenarioService sortAlphaNumericValue definition test', function () {
        expect(pricingScenarioService.sortAlphaNumericValue(a, b)).not.toBe(undefined);
    });
});
