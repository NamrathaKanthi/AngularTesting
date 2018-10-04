// xdescribe('displayEventValue', function () {
//     var element;
//     beforeEach(module('polarisApp'));
//     beforeEach(inject(function ($compile, $rootScope) {
//         var scope = $rootScope.$new();
//         scope.state = true;
//         var temp = "<div id='compareSecnario' class='col-md-12'><div class='col-md-3'></div><div class='col-md-8 padding0 text-center'><div class='col-md-2 padding0' ng-repeat='(key,value) in sdc.checkBoxes track by $index'><div class='checkbox' ng-class='sdc.getClass($index)'><input id='checkbox{{$index}}' class='styled' type='checkbox' data-ng-disabled='sdc.selectedScenarioObj[key] === null' data-ng-checked='value' data-ng-change='sdc.checkBoxCompare(key,sdc.checkBoxes[key])' data-ng-model='sdc.checkBoxes[key]'><label for='checkbox{{$index}}'>{{key}}</label></div></div></div>
//             < div class="col-md-1" ></div >
//       </div >
//             <div class="row">
//                 <div class="col-md-12">
//                     <div class="col-md-4">
//                         <compare-secnario changeviewfn="sdc.changeviewfn(input)"
//                             triggerfn="sdc.triggerfn(input,count,isAdd,scenarioMetric)"
//                             selected-scenario-obj="sdc.selectedScenarioObj"
//                             check-boxes="sdc.checkBoxes"
//                             color="'amber'" list="sdc.scenarioList"
//                             selected-scenarios="sdc.compareScenarios"
//                             pricing="false"
//                             kpi-metrics="sdc.kpiMetrics"></compare-secnario>
//                     </div>
//                     <div class="col-md-4">
//                         <compare-secnario changeviewfn="sdc.changeviewfn(input)"
//                             triggerfn="sdc.triggerfn(input,count,isAdd,scenarioMetric)"
//                             selected-scenario-obj="sdc.selectedScenarioObj"
//                             check-boxes="sdc.checkBoxes"
//                             color="'green'" list="sdc.scenarioList"
//                             selected-scenarios="sdc.compareScenarios"
//                             pricing="false"
//                             kpi-metrics="sdc.kpiMetrics"></compare-secnario>
//                     </div>
//                     <div class="col-md-4">
//                         <compare-secnario changeviewfn="sdc.changeviewfn(input)"
//                             triggerfn="sdc.triggerfn(input,count,isAdd,scenarioMetric)"
//                             selected-scenario-obj="sdc.selectedScenarioObj"
//                             check-boxes="sdc.checkBoxes"
//                             color="'pink'" list="sdc.scenarioList"
//                             selected-scenarios="sdc.compareScenarios"
//                             pricing="false"
//                             kpi-metrics="sdc.kpiMetrics"></compare-secnario>
//                     </div>
//                 </div>
//             </div>
//         ";
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
