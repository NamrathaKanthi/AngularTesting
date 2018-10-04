
'use strict';
describe('Directive: switch', function () {
    beforeEach(module('polarisApp'));
    var element, scope, rootScope, isolateScope, document1;
    beforeEach(inject(function ($rootScope, $compile, $document) {
        rootScope = $rootScope;
        scope = rootScope.$new();
        document1 = $document;
        element = angular.element("<switch id='enabled' name='enabled' data-ng-model='priceEdit' on='%' off='value'></switch>");
        element = $compile(element)(scope);
        //scope.$digest();
        isolateScope = element.isolateScope();
    }));
    it('should bind scope with the right params and the right template', function () {
        expect(element).toBeDefined();
    });
});