// fdescribe('displayEventValue', function () {
//     var element;
//     beforeEach(module('polarisApp'));
//     beforeEach(inject(function ($compile, $rootScope) {
//         var scope = $rootScope.$new();
//         scope.state = true;
//         //var temp = "<div class='col-md-5 dsui-no-padding font-size-17' data-ng-if='hover' tooltip-enable='hover' uib-tooltip-template=''views/directives/kpiHoverDetails.html'' tooltip-class='kpimetrics-tooltip' data-ng-class='{'font-color-green':simulatedValue.status==='positive','font-color-red':simulatedValue.status==='negative'}'></div>";
//         var temp = "<display-event-value metrics='[x,y,z]' hover='true' pricing = true></display-event-value>"
//         element = $compile(temp)(scope);
//         angular.element('body').append(element);
//         $rootScope.$digest();
//     }));
//     afterEach(function () {
//         element.remove();
//         element = null;
//     });
//     it('scope should be defined', function () {
//         expect(element).toBeDefined();
//         //element.triggerHandler('click');
//     });
// });

'use strict';
describe('Directive: displayEventValue', function () {
    beforeEach(module('polarisApp'));
    var element, scope, rootScope, isolateScope, document1;
    beforeEach(inject(function ($rootScope, $compile, $document) {
        rootScope = $rootScope;
        scope = rootScope.$new();
        document1 = $document;
        element = angular.element("<display-event-value metrics='[x,y,z]' hover='true' pricing = true></display-event-value>");
        element = $compile(element)(scope);
        //scope.$digest();
        isolateScope = element.isolateScope();
    }));
    it('should bind scope with the right params and the right template', function () {
        expect(element).toBeDefined();
    });
});
