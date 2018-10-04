
'use strict';
describe('Directive: loader', function () {
    beforeEach(module('polarisApp'));
    var element, scope, rootScope, isolateScope, document1;
    beforeEach(inject(function ($rootScope, $compile, $document) {
        rootScope = $rootScope;
        scope = rootScope.$new();
        scope.changeMethod = function () {
            return '';
        };
        document1 = $document;
        element = angular.element("<loader data-ng-if='true'></loader>");
        element = $compile(element)(scope);
        //scope.$digest();
        isolateScope = element.isolateScope();
    }));
    it('should bind scope with the right params and the right template', function () {
        expect(element).toBeDefined();
    });
});