
'use strict';
describe('Directive: kpiDetails', function () {
    beforeEach(module('polarisApp'));
    var element, scope, rootScope, isolateScope, document1;
    beforeEach(inject(function ($rootScope, $compile, $document) {
        rootScope = $rootScope;
        scope = rootScope.$new();
        document1 = $document;
        element = angular.element("<kpi-details simulated='true' simulated-values='polarisNames' event-name='polaris' kpi-metrics='polaris' old-kpi-metrics='value2' vsod-extension='true' sales-extension='true' margin-extension='true' roi-extension='true' selected-tab='polaris' insert-date='19/01/2018' view='view'></kpi-details>");
        element = $compile(element)(scope);
        //scope.$digest();
        isolateScope = element.isolateScope();
    }));
    it('should bind scope with the right params and the right template', function () {
        expect(element).toBeDefined();
    });
});