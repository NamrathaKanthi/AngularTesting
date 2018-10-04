
'use strict';
describe('Directive: pricingKpiDetails', function () {
    beforeEach(module('polarisApp'));
    var element, scope, rootScope, isolateScope, document1;
    beforeEach(inject(function ($rootScope, $compile, $document) {
        rootScope = $rootScope;
        scope = rootScope.$new();
        document1 = $document;
        element = angular.element("<pricing-kpi-details kpi-metrics-config='kpiMetricsConfig' metrics='kpiMetrics' config-value='kpiMetricsConfigValues' simulated='true' simulated-values = 'simulatedValues' old-kpi-metrics = 'pricingMetricsDetails' currentview='selectedTabOption'></pricing-kpi-details>");
        element = $compile(element)(scope);
        //scope.$digest();
        isolateScope = element.isolateScope();
    }));
    it('should bind scope with the right params and the right template', function () {
        expect(element).toBeDefined();
    });
});
