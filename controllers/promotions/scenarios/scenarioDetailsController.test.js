/**
 * Created by sdamodiran on 19-07-2017.
 */
'use strict';

describe('Controller: scenario details Controller', function () {
  var $controller, controller, rootScope, scope, restAPIService, Constants, $scope, commonService, scenarioService, $filter, $uibPosition, $timeout, $q, constantsService, $httpBackend, c3;
  var def1, def2, def3, def4, def5, singleEvent, singleProduct, singlePlan, scenarioOverviews, scenarioDetails, eventTypeTactic, interceptorService, state, $, scenarioList, planList, customerLevel;
  beforeEach(function () {
    angular.mock.module('polarisApp');
    angular.mock.inject(function (_$controller_, _$httpBackend_, _$rootScope_, _restAPIService_, _constantsService_, _Constants_, _commonService_, _scenarioService_, _$filter_, _$uibPosition_, _$timeout_, _$q_, _interceptorService_, _$state_) {
      $controller = _$controller_;
      rootScope = _$rootScope_;
      scope = _$rootScope_.$new();
      constantsService = _constantsService_;
      constantsService.populateConstants();
      Constants = _Constants_;
      restAPIService = _restAPIService_;
      commonService = _commonService_;
      scenarioService = _scenarioService_;
      $httpBackend = _$httpBackend_;
      interceptorService = _interceptorService_;
      $uibPosition = _$uibPosition_;
      state = _$state_;
      spyOn( state, 'go' );
      spyOn( state, 'transitionTo' );
      $ = jQuery;
      spyOn( $.fn, 'animate').and.callThrough();
      spyOn( $uibPosition, 'position').and.callThrough();
      spyOn( window, 'setTimeout');
      $q = _$q_;
      spyOn(scenarioService, 'lineChart').and.callFake(function(){});
      spyOn(interceptorService, 'request').and.callFake(function(args){return args;});
      spyOn(interceptorService, 'response').and.callFake(function(args){return args;});
      spyOn(interceptorService, 'requestError').and.callFake(function(args){return args;});
      spyOn(interceptorService, 'responseError').and.callFake(function(args){return args;});

      spyOn(scenarioService, 'calculateEventStatus').and.callFake(function(params){return params;});
      spyOn(scenarioService, 'calculatePlanMetrics').and.callFake(function(params){return params;});
      spyOn(commonService, 'generateNotification').and.callFake(function(params){return params;});

      controller = $controller('scenarioDetailsController',{$scope:scope});
      var chartFilterArrayObject = {"id":5,"weeklyValues":{"2017-01-01":{"name":"Total Discount","fullValue":12614.39,"value":43.2,"type":"fiancial","currencyCode":"USD","unit":"K"},"2017-01-08":{"name":"Total Discount","fullValue":41375.37,"value":43.2,"type":"fiancial","currencyCode":"USD","unit":"K"},"2017-01-15":{"name":"Total Discount","fullValue":48492.59,"value":43.2,"type":"fiancial","currencyCode":"USD","unit":"K"}},"monthlyValues":{"2017-01-01":{"name":"Test","fullValue":178345.23,"value":3,"type":"TEST","currencyCode":"USD","unit":"K"},"2017-02-01":{"name":"Test","fullValue":132477.01,"value":3,"type":"TEST","currencyCode":"USD","unit":"K"},"2017-03-01":{"name":"Test","fullValue":114880.25,"value":3,"type":"TEST","currencyCode":"USD","unit":"K"}}};
      singleEvent = {"id":21,"name":"test","tactic":"HOT SPOT","type":"EDLP","startDate":"2017-06-29","endDate":"2017-07-06","campaignName":"Other","campaignHoliday":"Other","promoId":null,"products":null,"metric":null,"status":"Add","month":"June","startDateObj":"2017-06-29T00:00:00.000Z","endDateObj":"2017-07-06T00:00:00.000Z","promoTacticId":18,"promoTypeId":1};
      singleProduct = {"id":2653,"productId":1566746,"productName":"PRODUCT_639526","regularPrice":"100","promoPrice":"80","currency":"CORE","eventId":99,"skuId":"639526","spend":0,"metric":null,"discount":"92.0"};
      controller.planChartData = chartFilterArrayObject;
      controller.scenarioChartData = {plan: chartFilterArrayObject, 'Scenario': chartFilterArrayObject};
      controller.compareScenariosChartData = {'Scenario 1': chartFilterArrayObject};
      //controller.eventData = {"id":99,"name":"Fourth of July Sale 2","tactic":"OFF SHELF","type":"EDLP","startDate":"2017-07-01","endDate":"2017-07-08","campaignName":"Other","campaignHoliday":"Other","promoId":null,"products":[{"id":2653,"productId":1566746,"productName":"PRODUCT_639526","regularPrice":0,"promoPrice":0,"currency":"CORE","eventId":99,"skuId":"639526","spend":0,"metric":null,"discount":0}],"metric":null};
      controller.eventData = {"id":1609,"name":"Thanksgiving Promo","startDate":"2017-11-24","endDate":"2017-11-27","campaignName":"Other","campaignHoliday":"Other","promoId":0,"products":[],"metric":{"roi":{"name":"ROI","fullValue":0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Promo Spend","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"currentVSOD":{"name":"VSOD","fullValue":0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"baselineVSOD":{"name":"Baseline VSOD","fullValue":0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"volumeLift":{"name":"VolumeLift","fullValue":0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"discountDepth":{"name":"Discount Depth","fullValue":0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"totalDiscount":{"name":"Total Discount","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"margin":{"name":"Own Margin","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"marginPercentage":{"name":"Own Margin(%)","fullValue":0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"netRevenue":{"name":"Net Revenue","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"grossRevenue":{"name":"Gross Revenue","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"retailerMargin":{"name":"Retailer Margin","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"retailerMarginPercentage":{"name":"Retailer Margin(%)","fullValue":0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"distributorMargin":{"name":"Distributor Margin","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"distributorMarginPercentage":{"name":" Distributor Margin(%)","fullValue":0,"value":"0","type":"percentage","currencyCode":null,"unit":null}},"promoTypeId":1,"promoTacticId":35,"tactic":"POWER AISLE","type":"EDLP","customerId":778730,"customerName":"CUSTOMER_108617","isProvided":true,"month":"November","startDateObj":"2017-11-24T00:00:00.000Z","endDateObj":"2017-11-27T00:00:00.000Z","status":"Add"}
      singlePlan = {"id":5,"name":"string","startDate":"2017-07-03","endDate":"2018-07-03","grossRevenue":0,"availableFunding":0,"metric":null,"events":[],"eventIds":[],"planId":null,"currencyCode":null,"totalPromoSpend":null,"previousYearGrossRevenue":null,"previousYearPromoSpend":null,"ytdSpend":null,"previousYearYtdSpend":null,"remainingSpend":null,"isPlan":null,"$$hashKey":"object:668"};
      eventTypeTactic = {data: {"types":[{"id":1,"name":"EDLP"},{"id":2,"name":"TPR"}],"tactics":[{"id":18,"name":"BWS PLINTH 2"},{"id":31,"name":"DALEK"},{"id":5,"name":"DALEK,SHELF"},{"id":33,"name":"DALEK,SHIPPER"},{"id":8,"name":"END"},{"id":28,"name":"END,FOS"},{"id":16,"name":"END,STACK"},{"id":1,"name":"FOS"},{"id":17,"name":"FOYER & GONDOLA END 1"},{"id":29,"name":"FPU"},{"id":6,"name":"FSDU"},{"id":3,"name":"GONDOLA END"},{"id":34,"name":"GONDOLA END & SIDE STACK"},{"id":25,"name":"GONDOLA END 1"},{"id":23,"name":"GONDOLA END,  SIDE STACK"},{"id":2,"name":"HOT SPOT"},{"id":24,"name":"HOT SPOT,SHIPPER"},{"id":30,"name":"HOTSPOT"},{"id":4,"name":"HOTSPOT,  SHIPPER"},{"id":26,"name":"HOTSPOT,  SIDE STACK"},{"id":21,"name":"ILP"},{"id":36,"name":"LADDER RACK"},{"id":27,"name":"LADER RACK"},{"id":13,"name":"OFF SHELF"},{"id":14,"name":"OFF SHELF,  GONDOLA END"},{"id":32,"name":"OUT OF AISLE"},{"id":10,"name":"OUT OF AISLE,  SIDE STACK"},{"id":20,"name":"PLINTH"},{"id":35,"name":"POWER AISLE"},{"id":12,"name":"POWER AISLE & GONDOLA END"},{"id":9,"name":"SHELF"},{"id":7,"name":"SHELF,STACK"},{"id":15,"name":"SHIPPER"},{"id":22,"name":"SIDE STACK"},{"id":11,"name":"SIDE STACK,  GONDOLA END"},{"id":19,"name":"STACK"}]}};
      controller.chartFilterArrayObject = scenarioService.buildFilterArray(singlePlan.endDate);
      controller.datePicker = {};
      controller.datePicker.startDate = new Date("2017-07-24T18:30:00.000Z");
      controller.datePicker.endDate = new Date("2017-07-28T18:29:59.999Z");
      controller.chartFilterArray = ["Jan 2017-Mar 2017","Apr 2017-Jun 2017","Jul 2017-Sep 2017","Oct 2017-Dec 2017"];
      controller.lastYearData = {"id":27,"name":"LastYearPlan","startDate":"2016-01-01","endDate":"2016-12-31","insertDate":"2017-07-25","grossRevenue":6666666,"availableFunding":749999.25,"metric":{"roi":{"name":"ROI","fullValue":0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Promo Spend","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"currentVSOD":{"name":"VSOD","fullValue":0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"baselineVSOD":{"name":"Baseline VSOD","fullValue":0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"volumeLift":{"name":"VolumeLift","fullValue":0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"discountDepth":{"name":"Discount Depth","fullValue":0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"totalDiscount":{"name":"Total Discount","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"margin":{"name":"Own Margin","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"marginPercentage":{"name":"Own Margin(%)","fullValue":0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"netRevenue":{"name":"Net Revenue","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"grossRevenue":{"name":"Gross Revenue","fullValue":6666666,"value":"6.67","type":"financial","currencyCode":"GBP","unit":"M"},"retailerMargin":{"name":"Retailer Margin","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"retailerMarginPercentage":{"name":"Retailer Margin(%)","fullValue":0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"distributorMargin":{"name":"Distributor Margin","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"distributorMarginPercentage":{"name":" Distributor Margin(%)","fullValue":0,"value":"0","type":"percentage","currencyCode":null,"unit":null}},"events":[],"eventIds":[],"planId":0,"currencyCode":"GBP","lastYearRef":0,"isPlan":true};
      controller.lastYearChartData = {"id":27,"weeklyValues":{"2017-01-01":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-01-08":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-01-15":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-01-22":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-01-29":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-02-05":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-02-12":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-02-19":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-02-26":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-03-05":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-03-12":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-03-19":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-03-26":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-04-02":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-04-09":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-04-16":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-04-23":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-04-30":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-05-07":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-05-14":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-05-21":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-05-28":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-06-04":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-06-11":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-06-18":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-06-25":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-07-02":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-07-09":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-07-16":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-07-23":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-07-30":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-08-06":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-08-13":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-08-20":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-08-27":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-09-03":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-09-10":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-09-17":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-09-24":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-10-01":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-10-08":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-10-15":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-10-22":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-10-29":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-11-05":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-11-12":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-11-19":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-11-26":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-12-03":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-12-10":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-12-17":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-12-24":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-12-31":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null}},"monthlyValues":{"2017-01-01":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-02-01":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-03-01":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-04-01":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-05-01":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-06-01":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-07-01":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-08-01":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-09-01":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-10-01":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-11-01":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"2017-12-01":{"name":"Sales","fullValue":0,"value":"0","type":"financial","currencyCode":"GBP","unit":null}}};
      controller.planData = {"id":12,"name":"string","startDate":"2017-01-01","endDate":"2017-12-31","insertDate":"2017-07-25","grossRevenue":108976.5,"availableFunding":11758.5,"metric":{"roi":{"name":"ROI","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Promo Spend","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"currentVSOD":{"name":"VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"baselineVSOD":{"name":"Baseline VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"volumeLift":{"name":"VolumeLift","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"discountDepth":{"name":"Discount Depth","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"totalDiscount":{"name":"Total Discount","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"margin":{"name":"Own Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"marginPercentage":{"name":"Own Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"netRevenue":{"name":"Net Revenue","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"grossRevenue":{"name":"Gross Revenue","fullValue":108976.5,"value":"108.98","type":"financial","currencyCode":"GBP","unit":"K"},"retailerMargin":{"name":"Retailer Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"retailerMarginPercentage":{"name":"Retailer Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"distributorMargin":{"name":"Distributor Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"distributorMarginPercentage":{"name":" Distributor Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null}},"events":[],"eventIds":[],"planId":0,"currencyCode":"GBP","lastYearRef":0,"isPlan":true};
      controller.scenarioObj = {"id":79,"name":"Scenario 1","startDate":"2017-01-01","endDate":"2017-12-31","insertDate":"2017-07-25","grossRevenue":15016.942,"availableFunding":1236.75,"metric":{"roi":{"name":"ROI","fullValue":-1067.32,"value":"-1.07","type":"percentage","currencyCode":null,"unit":"K"},"spend":{"name":"Promo Spend","fullValue":67174.59,"value":"67.17","type":"financial","currencyCode":"GBP","unit":"K"},"currentVSOD":{"name":"VSOD","fullValue":67174.59,"value":"67.17","type":"quantity","currencyCode":null,"unit":"K"},"baselineVSOD":{"name":"Baseline VSOD","fullValue":64709.14,"value":"64.71","type":"quantity","currencyCode":null,"unit":"K"},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":2465.45,"value":"2.47","type":"quantity","currencyCode":null,"unit":"K"},"currentSales":{"name":"Sales","fullValue":8098374.92,"value":"8.1","type":"financial","currencyCode":"GBP","unit":"M"},"volumeLift":{"name":"VolumeLift","fullValue":-3.76818977135E9,"value":"-3.77","type":"percentage","currencyCode":null,"unit":"B"},"discountDepth":{"name":"Discount Depth","fullValue":34894.6,"value":"34.89","type":"percentage","currencyCode":null,"unit":"K"},"totalDiscount":{"name":"Total Discount","fullValue":1.018752628E7,"value":"10.19","type":"financial","currencyCode":"GBP","unit":"M"},"margin":{"name":"Own Margin","fullValue":64709.14,"value":"64.71","type":"financial","currencyCode":"GBP","unit":"K"},"marginPercentage":{"name":"Own Margin(%)","fullValue":2465.45,"value":"2.47","type":"percentage","currencyCode":null,"unit":"K"},"netRevenue":{"name":"Net Revenue","fullValue":1.018752628E7,"value":"10.19","type":"financial","currencyCode":"GBP","unit":"M"},"grossRevenue":{"name":"Gross Revenue","fullValue":15016.942500000001,"value":"15.02","type":"financial","currencyCode":"GBP","unit":"K"},"retailerMargin":{"name":"Retailer Margin","fullValue":-2089151.37,"value":"-2.09","type":"financial","currencyCode":"GBP","unit":"M"},"retailerMarginPercentage":{"name":"Retailer Margin(%)","fullValue":-8178679.31,"value":"-8.18","type":"percentage","currencyCode":null,"unit":"M"},"distributorMargin":{"name":"Distributor Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"distributorMarginPercentage":{"name":" Distributor Margin(%)","fullValue":-3.76818977135E9,"value":"-3.77","type":"percentage","currencyCode":null,"unit":"B"}},"events":[{"id":1631,"name":"ACTIVITY 103","startDate":"2017-10-14","endDate":"2017-11-24","campaignName":"Other","campaignHoliday":"Other","promoId":0,"products":[{"id":149035,"productId":153458,"productName":"PRODUCT_565641","regularPrice":95.07,"promoPrice":64.65,"currency":"GBP","eventId":1631,"skuId":"565641","spend":0.01,"metric":{"roi":{"name":"ROI","fullValue":5.89,"value":"5.89","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Spend","fullValue":40.14,"value":"40.14","type":"financial","currencyCode":"GBP","unit":null},"currentVSOD":{"name":"VSOD","fullValue":4014.04,"value":"4.01","type":"quantity","currencyCode":null,"unit":"K"},"baselineVSOD":{"name":"Baseline VSOD","fullValue":3971.54,"value":"3.97","type":"quantity","currencyCode":null,"unit":"K"},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":42.5,"value":"42.5","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":1206139.42,"value":"1.21","type":"financial","currencyCode":"GBP","unit":"M"},"volumeLift":{"name":"VolumeLift","fullValue":1.0701138601147162,"value":"1.07","type":"percentage","currencyCode":null,"unit":null}}}],"metric":{"roi":{"name":"ROI","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Promo Spend","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"currentVSOD":{"name":"VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"baselineVSOD":{"name":"Baseline VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"volumeLift":{"name":"VolumeLift","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"discountDepth":{"name":"Discount Depth","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"totalDiscount":{"name":"Total Discount","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"margin":{"name":"Own Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"marginPercentage":{"name":"Own Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"netRevenue":{"name":"Net Revenue","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"grossRevenue":{"name":"Gross Revenue","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"retailerMargin":{"name":"Retailer Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"retailerMarginPercentage":{"name":"Retailer Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"distributorMargin":{"name":"Distributor Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"distributorMarginPercentage":{"name":" Distributor Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null}},"promoTypeId":1,"promoTacticId":31,"tactic":"DALEK","type":"EDLP","customerId":778842,"customerName":"CUSTOMER_61332","isProvided":true},{"id":1635,"name":"ACTIVITY 1031","startDate":"2015-11-07","endDate":"2017-11-09","campaignName":"Other","campaignHoliday":"Other","promoId":0,"products":[{"id":149119,"productId":153494,"productName":"PRODUCT_642173","regularPrice":35.12,"promoPrice":35.12,"currency":"GBP","eventId":1635,"skuId":"642173","spend":0.01,"metric":{"roi":{"name":"ROI","fullValue":-100.0,"value":"-100","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Spend","fullValue":212.33,"value":"212.33","type":"financial","currencyCode":"GBP","unit":null},"currentVSOD":{"name":"VSOD","fullValue":21233.11,"value":"21.23","type":"quantity","currencyCode":null,"unit":"K"},"baselineVSOD":{"name":"Baseline VSOD","fullValue":21233.11,"value":"21.23","type":"quantity","currencyCode":null,"unit":"K"},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":994346.79,"value":"0.99","type":"financial","currencyCode":"GBP","unit":"M"},"volumeLift":{"name":"VolumeLift","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null}}}],"metric":{"roi":{"name":"ROI","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Promo Spend","fullValue":21233.11,"value":"21.23","type":"financial","currencyCode":"GBP","unit":"K"},"currentVSOD":{"name":"VSOD","fullValue":21233.11,"value":"21.23","type":"quantity","currencyCode":null,"unit":"K"},"baselineVSOD":{"name":"Baseline VSOD","fullValue":21233.11,"value":"21.23","type":"quantity","currencyCode":null,"unit":"K"},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":994346.79,"value":"0.99","type":"financial","currencyCode":"GBP","unit":"M"},"volumeLift":{"name":"VolumeLift","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"discountDepth":{"name":"Discount Depth","fullValue":100.0,"value":"100","type":"percentage","currencyCode":null,"unit":null},"totalDiscount":{"name":"Total Discount","fullValue":994134.42,"value":"0.99","type":"financial","currencyCode":"GBP","unit":"M"},"margin":{"name":"Own Margin","fullValue":21233.11,"value":"21.23","type":"financial","currencyCode":"GBP","unit":"K"},"marginPercentage":{"name":"Own Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"netRevenue":{"name":"Net Revenue","fullValue":994134.42,"value":"0.99","type":"financial","currencyCode":"GBP","unit":"M"},"grossRevenue":{"name":"Gross Revenue","fullValue":994346.79,"value":"0.99","type":"financial","currencyCode":"GBP","unit":"M"},"retailerMargin":{"name":"Retailer Margin","fullValue":212.37,"value":"212.37","type":"financial","currencyCode":"GBP","unit":null},"retailerMarginPercentage":{"name":"Retailer Margin(%)","fullValue":453.59,"value":"453.59","type":"percentage","currencyCode":null,"unit":null},"distributorMargin":{"name":"Distributor Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"distributorMarginPercentage":{"name":" Distributor Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null}},"promoTypeId":2,"promoTacticId":20,"tactic":"PLINTH","type":"TPR","customerId":778861,"customerName":"CUSTOMER_61392","isProvided":true},{"id":1637,"name":"ACTIVITY 104","startDate":"2015-08-21","endDate":"2017-08-24","campaignName":"Other","campaignHoliday":"Other","promoId":0,"products":[{"id":148901,"productId":152935,"productName":"PRODUCT_565641","regularPrice":0.15,"promoPrice":0.15,"currency":"GBP","eventId":1637,"skuId":"565641","spend":4.0,"metric":{"roi":{"name":"ROI","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Spend","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"currentVSOD":{"name":"VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"baselineVSOD":{"name":"Baseline VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"volumeLift":{"name":"VolumeLift","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null}}},{"id":148903,"productId":152938,"productName":"PRODUCT_586926","regularPrice":69.91,"promoPrice":7.5,"currency":"GBP","eventId":1637,"skuId":"586926","spend":0.01,"metric":{"roi":{"name":"ROI","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Spend","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"currentVSOD":{"name":"VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"baselineVSOD":{"name":"Baseline VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"volumeLift":{"name":"VolumeLift","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null}}}],"metric":{"roi":{"name":"ROI","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Promo Spend","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"currentVSOD":{"name":"VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"baselineVSOD":{"name":"Baseline VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"volumeLift":{"name":"VolumeLift","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"discountDepth":{"name":"Discount Depth","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"totalDiscount":{"name":"Total Discount","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"margin":{"name":"Own Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"marginPercentage":{"name":"Own Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"netRevenue":{"name":"Net Revenue","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"grossRevenue":{"name":"Gross Revenue","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"retailerMargin":{"name":"Retailer Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"retailerMarginPercentage":{"name":"Retailer Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"distributorMargin":{"name":"Distributor Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"distributorMarginPercentage":{"name":" Distributor Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null}},"promoTypeId":2,"promoTacticId":30,"tactic":"HOTSPOT","type":"TPR","customerId":778843,"customerName":"CUSTOMER_61337","isProvided":true},{"id":1642,"name":"ACTIVITY 1051","startDate":"2015-11-07","endDate":"2017-11-09","campaignName":"Other","campaignHoliday":"Other","promoId":0,"products":[{"id":149120,"productId":153599,"productName":"PRODUCT_698963","regularPrice":103.18,"promoPrice":103.18,"currency":"GBP","eventId":1642,"skuId":"698963","spend":0.2,"metric":{"roi":{"name":"ROI","fullValue":-100.0,"value":"-100","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Spend","fullValue":1898.3,"value":"1.9","type":"financial","currencyCode":"GBP","unit":"K"},"currentVSOD":{"name":"VSOD","fullValue":9491.52,"value":"9.49","type":"quantity","currencyCode":null,"unit":"K"},"baselineVSOD":{"name":"Baseline VSOD","fullValue":9491.52,"value":"9.49","type":"quantity","currencyCode":null,"unit":"K"},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":1305748.57,"value":"1.31","type":"financial","currencyCode":"GBP","unit":"M"},"volumeLift":{"name":"VolumeLift","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null}}}],"metric":{"roi":{"name":"ROI","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Promo Spend","fullValue":9491.52,"value":"9.49","type":"financial","currencyCode":"GBP","unit":"K"},"currentVSOD":{"name":"VSOD","fullValue":9491.52,"value":"9.49","type":"quantity","currencyCode":null,"unit":"K"},"baselineVSOD":{"name":"Baseline VSOD","fullValue":9491.52,"value":"9.49","type":"quantity","currencyCode":null,"unit":"K"},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":1305748.57,"value":"1.31","type":"financial","currencyCode":"GBP","unit":"M"},"volumeLift":{"name":"VolumeLift","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"discountDepth":{"name":"Discount Depth","fullValue":100.0,"value":"100","type":"percentage","currencyCode":null,"unit":null},"totalDiscount":{"name":"Total Discount","fullValue":1303850.2,"value":"1.3","type":"financial","currencyCode":"GBP","unit":"M"},"margin":{"name":"Own Margin","fullValue":9491.52,"value":"9.49","type":"financial","currencyCode":"GBP","unit":"K"},"marginPercentage":{"name":"Own Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"netRevenue":{"name":"Net Revenue","fullValue":1303850.2,"value":"1.3","type":"financial","currencyCode":"GBP","unit":"M"},"grossRevenue":{"name":"Gross Revenue","fullValue":1305748.57,"value":"1.31","type":"financial","currencyCode":"GBP","unit":"M"},"retailerMargin":{"name":"Retailer Margin","fullValue":1898.37,"value":"1.9","type":"financial","currencyCode":"GBP","unit":"K"},"retailerMarginPercentage":{"name":"Retailer Margin(%)","fullValue":1381.94,"value":"1.38","type":"percentage","currencyCode":null,"unit":"K"},"distributorMargin":{"name":"Distributor Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"distributorMarginPercentage":{"name":" Distributor Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null}},"promoTypeId":2,"promoTacticId":9,"tactic":"SHELF","type":"TPR","customerId":778862,"customerName":"CUSTOMER_61393","isProvided":true},{"id":1726,"name":"name of the event","startDate":"2017-09-20","endDate":"2017-09-20","campaignName":"Other","campaignHoliday":"Other","promoId":0,"products":[{"id":148968,"productId":153458,"productName":"PRODUCT_565641","regularPrice":95.07,"promoPrice":64.65,"currency":"GBP","eventId":1726,"skuId":"565641","spend":0.01,"metric":{"roi":{"name":"ROI","fullValue":-79.97,"value":"-79.97","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Spend","fullValue":512.66,"value":"512.66","type":"financial","currencyCode":"GBP","unit":null},"currentVSOD":{"name":"VSOD","fullValue":1281.66,"value":"1.28","type":"quantity","currencyCode":null,"unit":"K"},"baselineVSOD":{"name":"Baseline VSOD","fullValue":1178.97,"value":"1.18","type":"quantity","currencyCode":null,"unit":"K"},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":102.69000000000005,"value":"102.69","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":38372.81,"value":"38.37","type":"financial","currencyCode":"GBP","unit":"K"},"volumeLift":{"name":"VolumeLift","fullValue":8.710145296317977,"value":"8.71","type":"percentage","currencyCode":null,"unit":null}}}],"metric":{"roi":{"name":"ROI","fullValue":-100.0,"value":"-100","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Promo Spend","fullValue":1281.66,"value":"1.28","type":"financial","currencyCode":"GBP","unit":"K"},"currentVSOD":{"name":"VSOD","fullValue":1281.66,"value":"1.28","type":"quantity","currencyCode":null,"unit":"K"},"baselineVSOD":{"name":"Baseline VSOD","fullValue":1178.97,"value":"1.18","type":"quantity","currencyCode":null,"unit":"K"},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":102.69,"value":"102.69","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":38372.81,"value":"38.37","type":"financial","currencyCode":"GBP","unit":"K"},"volumeLift":{"name":"VolumeLift","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"discountDepth":{"name":"Discount Depth","fullValue":100.0,"value":"100","type":"percentage","currencyCode":null,"unit":null},"totalDiscount":{"name":"Total Discount","fullValue":288308.73,"value":"0.29","type":"financial","currencyCode":"GBP","unit":"M"},"margin":{"name":"Own Margin","fullValue":1178.97,"value":"1.18","type":"financial","currencyCode":"GBP","unit":"K"},"marginPercentage":{"name":"Own Margin(%)","fullValue":102.69,"value":"102.69","type":"percentage","currencyCode":null,"unit":null},"netRevenue":{"name":"Net Revenue","fullValue":288308.73,"value":"0.29","type":"financial","currencyCode":"GBP","unit":"M"},"grossRevenue":{"name":"Gross Revenue","fullValue":38372.81,"value":"38.37","type":"financial","currencyCode":"GBP","unit":"K"},"retailerMargin":{"name":"Retailer Margin","fullValue":-249935.92,"value":"-0.25","type":"financial","currencyCode":"GBP","unit":"M"},"retailerMarginPercentage":{"name":"Retailer Margin(%)","fullValue":-111107.32,"value":"-111.11","type":"percentage","currencyCode":null,"unit":"K"},"distributorMargin":{"name":"Distributor Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"distributorMarginPercentage":{"name":" Distributor Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null}},"promoTypeId":1,"promoTacticId":31,"tactic":"DALEK","type":"EDLP","customerId":778855,"customerName":"CUSTOMER_61375","isProvided":false},{"id":1727,"name":"set an Evnt","startDate":"2017-09-21","endDate":"2017-09-21","campaignName":"Other","campaignHoliday":"Other","promoId":0,"products":[{"id":148969,"productId":153458,"productName":"PRODUCT_565641","regularPrice":95.07,"promoPrice":64.65,"currency":"GBP","eventId":1727,"skuId":"565641","spend":0.01,"metric":{"roi":{"name":"ROI","fullValue":-79.95,"value":"-79.95","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Spend","fullValue":1313.56,"value":"1.31","type":"financial","currencyCode":"GBP","unit":"K"},"currentVSOD":{"name":"VSOD","fullValue":3283.91,"value":"3.28","type":"quantity","currencyCode":null,"unit":"K"},"baselineVSOD":{"name":"Baseline VSOD","fullValue":3020.58,"value":"3.02","type":"quantity","currencyCode":null,"unit":"K"},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":263.3299999999999,"value":"263.33","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":233026.11,"value":"0.23","type":"financial","currencyCode":"GBP","unit":"M"},"volumeLift":{"name":"VolumeLift","fullValue":8.717862132438139,"value":"8.72","type":"percentage","currencyCode":null,"unit":null}}}],"metric":{"roi":{"name":"ROI","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Promo Spend","fullValue":3283.91,"value":"3.28","type":"financial","currencyCode":"GBP","unit":"K"},"currentVSOD":{"name":"VSOD","fullValue":3283.91,"value":"3.28","type":"quantity","currencyCode":null,"unit":"K"},"baselineVSOD":{"name":"Baseline VSOD","fullValue":3020.58,"value":"3.02","type":"quantity","currencyCode":null,"unit":"K"},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":263.33,"value":"263.33","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":233026.11,"value":"0.23","type":"financial","currencyCode":"GBP","unit":"M"},"volumeLift":{"name":"VolumeLift","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"discountDepth":{"name":"Discount Depth","fullValue":100.0,"value":"100","type":"percentage","currencyCode":null,"unit":null},"totalDiscount":{"name":"Total Discount","fullValue":738715.1,"value":"0.74","type":"financial","currencyCode":"GBP","unit":"M"},"margin":{"name":"Own Margin","fullValue":3020.58,"value":"3.02","type":"financial","currencyCode":"GBP","unit":"K"},"marginPercentage":{"name":"Own Margin(%)","fullValue":263.33,"value":"263.33","type":"percentage","currencyCode":null,"unit":null},"netRevenue":{"name":"Net Revenue","fullValue":738715.1,"value":"0.74","type":"financial","currencyCode":"GBP","unit":"M"},"grossRevenue":{"name":"Gross Revenue","fullValue":233026.11,"value":"0.23","type":"financial","currencyCode":"GBP","unit":"M"},"retailerMargin":{"name":"Retailer Margin","fullValue":-505688.99,"value":"-0.51","type":"financial","currencyCode":"GBP","unit":"M"},"retailerMarginPercentage":{"name":"Retailer Margin(%)","fullValue":-224800.62,"value":"-0.22","type":"percentage","currencyCode":null,"unit":"M"},"distributorMargin":{"name":"Distributor Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"distributorMarginPercentage":{"name":" Distributor Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null}},"promoTypeId":2,"promoTacticId":31,"tactic":"DALEK","type":"TPR","customerId":778855,"customerName":"CUSTOMER_61375","isProvided":false},{"id":1728,"name":"name the event to","startDate":"2017-09-30","endDate":"2017-09-30","campaignName":"Other","campaignHoliday":"Other","promoId":0,"products":[{"id":148970,"productId":153458,"productName":"PRODUCT_565641","regularPrice":95.07,"promoPrice":64.65,"currency":"GBP","eventId":1728,"skuId":"565641","spend":0.01,"metric":{"roi":{"name":"ROI","fullValue":-81.11,"value":"-81.11","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Spend","fullValue":6268.82,"value":"6.27","type":"financial","currencyCode":"GBP","unit":"K"},"currentVSOD":{"name":"VSOD","fullValue":15672.06,"value":"15.67","type":"quantity","currencyCode":null,"unit":"K"},"baselineVSOD":{"name":"Baseline VSOD","fullValue":14487.64,"value":"14.49","type":"quantity","currencyCode":null,"unit":"K"},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":1184.42,"value":"1.18","type":"quantity","currencyCode":null,"unit":"K"},"currentSales":{"name":"Sales","fullValue":4753021.7,"value":"4.75","type":"financial","currencyCode":"GBP","unit":"M"},"volumeLift":{"name":"VolumeLift","fullValue":8.17538260199729,"value":"8.18","type":"percentage","currencyCode":null,"unit":null}}}],"metric":{"roi":{"name":"ROI","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Promo Spend","fullValue":15672.06,"value":"15.67","type":"financial","currencyCode":"GBP","unit":"K"},"currentVSOD":{"name":"VSOD","fullValue":15672.06,"value":"15.67","type":"quantity","currencyCode":null,"unit":"K"},"baselineVSOD":{"name":"Baseline VSOD","fullValue":14487.64,"value":"14.49","type":"quantity","currencyCode":null,"unit":"K"},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":1184.42,"value":"1.18","type":"quantity","currencyCode":null,"unit":"K"},"currentSales":{"name":"Sales","fullValue":4753021.7,"value":"4.75","type":"financial","currencyCode":"GBP","unit":"M"},"volumeLift":{"name":"VolumeLift","fullValue":8.18,"value":"8.18","type":"percentage","currencyCode":null,"unit":null},"discountDepth":{"name":"Discount Depth","fullValue":100.0,"value":"100","type":"percentage","currencyCode":null,"unit":null},"totalDiscount":{"name":"Total Discount","fullValue":4702714.41,"value":"4.7","type":"financial","currencyCode":"GBP","unit":"M"},"margin":{"name":"Own Margin","fullValue":14487.64,"value":"14.49","type":"financial","currencyCode":"GBP","unit":"K"},"marginPercentage":{"name":"Own Margin(%)","fullValue":1184.42,"value":"1.18","type":"percentage","currencyCode":null,"unit":"K"},"netRevenue":{"name":"Net Revenue","fullValue":4702714.41,"value":"4.7","type":"financial","currencyCode":"GBP","unit":"M"},"grossRevenue":{"name":"Gross Revenue","fullValue":4753021.7,"value":"4.75","type":"financial","currencyCode":"GBP","unit":"M"},"retailerMargin":{"name":"Retailer Margin","fullValue":50307.29,"value":"50.31","type":"financial","currencyCode":"GBP","unit":"K"},"retailerMarginPercentage":{"name":"Retailer Margin(%)","fullValue":16765.18,"value":"16.77","type":"percentage","currencyCode":null,"unit":"K"},"distributorMargin":{"name":"Distributor Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"distributorMarginPercentage":{"name":" Distributor Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null}},"promoTypeId":2,"promoTacticId":5,"tactic":"DALEK,SHELF","type":"TPR","customerId":778855,"customerName":"CUSTOMER_61375","isProvided":false},{"id":1733,"name":"Created the event","startDate":"2017-12-03","endDate":"2017-12-30","campaignName":"Other","campaignHoliday":"Other","promoId":0,"products":[{"id":149041,"productId":152935,"productName":"PRODUCT_565641","regularPrice":0.15,"promoPrice":0.15,"currency":"GBP","eventId":1733,"skuId":"565641","spend":4.0,"metric":{"roi":{"name":"ROI","fullValue":-98.28,"value":"-98.28","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Spend","fullValue":20.77,"value":"20.77","type":"financial","currencyCode":"GBP","unit":null},"currentVSOD":{"name":"VSOD","fullValue":5.19,"value":"5.19","type":"quantity","currencyCode":null,"unit":null},"baselineVSOD":{"name":"Baseline VSOD","fullValue":4.83,"value":"4.83","type":"quantity","currencyCode":null,"unit":null},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":0.3600000000000003,"value":"0.36","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":1.04,"value":"1.04","type":"financial","currencyCode":"GBP","unit":null},"volumeLift":{"name":"VolumeLift","fullValue":7.45341614906833,"value":"7.45","type":"percentage","currencyCode":null,"unit":null}}}],"metric":{"roi":{"name":"ROI","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Promo Spend","fullValue":5.19,"value":"5.19","type":"financial","currencyCode":"GBP","unit":null},"currentVSOD":{"name":"VSOD","fullValue":5.19,"value":"5.19","type":"quantity","currencyCode":null,"unit":null},"baselineVSOD":{"name":"Baseline VSOD","fullValue":4.83,"value":"4.83","type":"quantity","currencyCode":null,"unit":null},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":0.36,"value":"0.36","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":1.04,"value":"1.04","type":"financial","currencyCode":"GBP","unit":null},"volumeLift":{"name":"VolumeLift","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"discountDepth":{"name":"Discount Depth","fullValue":100.0,"value":"100","type":"percentage","currencyCode":null,"unit":null},"totalDiscount":{"name":"Total Discount","fullValue":1539.08,"value":"1.54","type":"financial","currencyCode":"GBP","unit":"K"},"margin":{"name":"Own Margin","fullValue":4.83,"value":"4.83","type":"financial","currencyCode":"GBP","unit":null},"marginPercentage":{"name":"Own Margin(%)","fullValue":0.36,"value":"0.36","type":"percentage","currencyCode":null,"unit":null},"netRevenue":{"name":"Net Revenue","fullValue":1539.08,"value":"1.54","type":"financial","currencyCode":"GBP","unit":"K"},"grossRevenue":{"name":"Gross Revenue","fullValue":1.04,"value":"1.04","type":"financial","currencyCode":"GBP","unit":null},"retailerMargin":{"name":"Retailer Margin","fullValue":-1538.05,"value":"-1.54","type":"financial","currencyCode":"GBP","unit":"K"},"retailerMarginPercentage":{"name":"Retailer Margin(%)","fullValue":-518.79,"value":"-518.79","type":"percentage","currencyCode":null,"unit":null},"distributorMargin":{"name":"Distributor Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"distributorMarginPercentage":{"name":" Distributor Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null}},"promoTypeId":1,"promoTacticId":31,"tactic":"DALEK","type":"EDLP","customerId":778855,"customerName":"CUSTOMER_61375","isProvided":false},{"id":1734,"name":"Test bug 254","startDate":"2017-09-29","endDate":"2017-10-17","campaignName":"Other","campaignHoliday":"Other","promoId":0,"products":[{"id":148978,"productId":153458,"productName":"PRODUCT_565641","regularPrice":95.07,"promoPrice":64.65,"currency":"GBP","eventId":1734,"skuId":"565641","spend":0.01,"metric":{"roi":{"name":"ROI","fullValue":-79.96,"value":"-79.96","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Spend","fullValue":701.56,"value":"701.56","type":"financial","currencyCode":"GBP","unit":null},"currentVSOD":{"name":"VSOD","fullValue":1753.9,"value":"1.75","type":"quantity","currencyCode":null,"unit":"K"},"baselineVSOD":{"name":"Baseline VSOD","fullValue":1613.33,"value":"1.61","type":"quantity","currencyCode":null,"unit":"K"},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":140.57000000000016,"value":"140.57","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":70015.8,"value":"70.02","type":"financial","currencyCode":"GBP","unit":"K"},"volumeLift":{"name":"VolumeLift","fullValue":8.71303453106309,"value":"8.71","type":"percentage","currencyCode":null,"unit":null}}}],"metric":{"roi":{"name":"ROI","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Promo Spend","fullValue":1753.9,"value":"1.75","type":"financial","currencyCode":"GBP","unit":"K"},"currentVSOD":{"name":"VSOD","fullValue":1753.9,"value":"1.75","type":"quantity","currencyCode":null,"unit":"K"},"baselineVSOD":{"name":"Baseline VSOD","fullValue":1613.33,"value":"1.61","type":"quantity","currencyCode":null,"unit":"K"},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":140.57,"value":"140.57","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":70015.8,"value":"70.02","type":"financial","currencyCode":"GBP","unit":"K"},"volumeLift":{"name":"VolumeLift","fullValue":8.71,"value":"8.71","type":"percentage","currencyCode":null,"unit":null},"discountDepth":{"name":"Discount Depth","fullValue":100.0,"value":"100","type":"percentage","currencyCode":null,"unit":null},"totalDiscount":{"name":"Total Discount","fullValue":394540.44,"value":"0.39","type":"financial","currencyCode":"GBP","unit":"M"},"margin":{"name":"Own Margin","fullValue":1613.33,"value":"1.61","type":"financial","currencyCode":"GBP","unit":"K"},"marginPercentage":{"name":"Own Margin(%)","fullValue":140.57,"value":"140.57","type":"percentage","currencyCode":null,"unit":null},"netRevenue":{"name":"Net Revenue","fullValue":394540.44,"value":"0.39","type":"financial","currencyCode":"GBP","unit":"M"},"grossRevenue":{"name":"Gross Revenue","fullValue":70015.8,"value":"70.02","type":"financial","currencyCode":"GBP","unit":"K"},"retailerMargin":{"name":"Retailer Margin","fullValue":-324524.64,"value":"-0.32","type":"financial","currencyCode":"GBP","unit":"M"},"retailerMarginPercentage":{"name":"Retailer Margin(%)","fullValue":-144265.23,"value":"-144.27","type":"percentage","currencyCode":null,"unit":"K"},"distributorMargin":{"name":"Distributor Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"distributorMarginPercentage":{"name":" Distributor Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null}},"promoTypeId":1,"promoTacticId":31,"tactic":"DALEK","type":"EDLP","customerId":778855,"customerName":"CUSTOMER_61375","isProvided":false},{"id":1756,"name":"bleu","startDate":"2017-10-17","endDate":"2017-11-09","campaignName":"Other","campaignHoliday":"Other","promoId":0,"products":[{"id":149002,"productId":153458,"productName":"PRODUCT_565641","regularPrice":95.07,"promoPrice":64.65,"currency":"GBP","eventId":1756,"skuId":"565641","spend":0.01,"metric":{"roi":{"name":"ROI","fullValue":-50.0,"value":"-50","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Spend","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"currentVSOD":{"name":"VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"baselineVSOD":{"name":"Baseline VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"volumeLift":{"name":"VolumeLift","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null}}}],"metric":{"roi":{"name":"ROI","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Promo Spend","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"currentVSOD":{"name":"VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"baselineVSOD":{"name":"Baseline VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"volumeLift":{"name":"VolumeLift","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"discountDepth":{"name":"Discount Depth","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"totalDiscount":{"name":"Total Discount","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"margin":{"name":"Own Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"marginPercentage":{"name":"Own Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"netRevenue":{"name":"Net Revenue","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"grossRevenue":{"name":"Gross Revenue","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"retailerMargin":{"name":"Retailer Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"retailerMarginPercentage":{"name":"Retailer Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"distributorMargin":{"name":"Distributor Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"distributorMarginPercentage":{"name":" Distributor Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null}},"promoTypeId":2,"promoTacticId":33,"tactic":"DALEK,SHIPPER","type":"TPR","customerId":778855,"customerName":"CUSTOMER_61375","isProvided":false},{"id":1776,"name":"bleuone","startDate":"2017-10-09","endDate":"2017-10-28","campaignName":"Other","campaignHoliday":"Other","promoId":0,"products":[{"id":149043,"productId":153458,"productName":"PRODUCT_565641","regularPrice":95.07,"promoPrice":64.65,"currency":"GBP","eventId":1776,"skuId":"565641","spend":0.01,"metric":{"roi":{"name":"ROI","fullValue":1495.9,"value":"1.5","type":"percentage","currencyCode":null,"unit":"K"},"spend":{"name":"Spend","fullValue":47.62,"value":"47.62","type":"financial","currencyCode":"GBP","unit":null},"currentVSOD":{"name":"VSOD","fullValue":4762.11,"value":"4.76","type":"quantity","currencyCode":null,"unit":"K"},"baselineVSOD":{"name":"Baseline VSOD","fullValue":4002.13,"value":"4","type":"quantity","currencyCode":null,"unit":"K"},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":759.9799999999996,"value":"759.98","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":307870.71,"value":"0.31","type":"financial","currencyCode":"GBP","unit":"M"},"volumeLift":{"name":"VolumeLift","fullValue":18.98938815080968,"value":"18.99","type":"percentage","currencyCode":null,"unit":null}}}],"metric":{"roi":{"name":"ROI","fullValue":-100.0,"value":"-100","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Promo Spend","fullValue":4762.11,"value":"4.76","type":"financial","currencyCode":"GBP","unit":"K"},"currentVSOD":{"name":"VSOD","fullValue":4762.11,"value":"4.76","type":"quantity","currencyCode":null,"unit":"K"},"baselineVSOD":{"name":"Baseline VSOD","fullValue":4002.13,"value":"4","type":"quantity","currencyCode":null,"unit":"K"},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":759.99,"value":"759.99","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":307870.71,"value":"0.31","type":"financial","currencyCode":"GBP","unit":"M"},"volumeLift":{"name":"VolumeLift","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"discountDepth":{"name":"Discount Depth","fullValue":100.0,"value":"100","type":"percentage","currencyCode":null,"unit":null},"totalDiscount":{"name":"Total Discount","fullValue":1073106.8,"value":"1.07","type":"financial","currencyCode":"GBP","unit":"M"},"margin":{"name":"Own Margin","fullValue":4002.13,"value":"4","type":"financial","currencyCode":"GBP","unit":"K"},"marginPercentage":{"name":"Own Margin(%)","fullValue":759.99,"value":"759.99","type":"percentage","currencyCode":null,"unit":null},"netRevenue":{"name":"Net Revenue","fullValue":1073106.8,"value":"1.07","type":"financial","currencyCode":"GBP","unit":"M"},"grossRevenue":{"name":"Gross Revenue","fullValue":307870.71,"value":"0.31","type":"financial","currencyCode":"GBP","unit":"M"},"retailerMargin":{"name":"Retailer Margin","fullValue":-765236.09,"value":"-0.77","type":"financial","currencyCode":"GBP","unit":"M"},"retailerMarginPercentage":{"name":"Retailer Margin(%)","fullValue":-339588.0,"value":"-0.34","type":"percentage","currencyCode":null,"unit":"M"},"distributorMargin":{"name":"Distributor Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"distributorMarginPercentage":{"name":" Distributor Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null}},"promoTypeId":1,"promoTacticId":31,"tactic":"DALEK","type":"EDLP","customerId":778855,"customerName":"CUSTOMER_61375","isProvided":false},{"id":1828,"name":"test","startDate":"2017-10-30","endDate":"2017-11-08","campaignName":"Other","campaignHoliday":"Other","promoId":0,"products":[{"id":149102,"productId":153474,"productName":"PRODUCT_635708","regularPrice":56.88,"promoPrice":34.13,"currency":"GBP","eventId":1828,"skuId":"635708","spend":0.2,"metric":{"roi":{"name":"ROI","fullValue":-100.0,"value":"-100","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Spend","fullValue":1712.09,"value":"1.71","type":"financial","currencyCode":"GBP","unit":"K"},"currentVSOD":{"name":"VSOD","fullValue":8560.47,"value":"8.56","type":"quantity","currencyCode":null,"unit":"K"},"baselineVSOD":{"name":"Baseline VSOD","fullValue":8560.47,"value":"8.56","type":"quantity","currencyCode":null,"unit":"K"},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":389501.21,"value":"0.39","type":"financial","currencyCode":"GBP","unit":"M"},"volumeLift":{"name":"VolumeLift","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null}}}],"metric":{"roi":{"name":"ROI","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Promo Spend","fullValue":8560.47,"value":"8.56","type":"financial","currencyCode":"GBP","unit":"K"},"currentVSOD":{"name":"VSOD","fullValue":8560.47,"value":"8.56","type":"quantity","currencyCode":null,"unit":"K"},"baselineVSOD":{"name":"Baseline VSOD","fullValue":8560.47,"value":"8.56","type":"quantity","currencyCode":null,"unit":"K"},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":0.0,"value":"0","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":389501.21,"value":"0.39","type":"financial","currencyCode":"GBP","unit":"M"},"volumeLift":{"name":"VolumeLift","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"discountDepth":{"name":"Discount Depth","fullValue":100.0,"value":"100","type":"percentage","currencyCode":null,"unit":null},"totalDiscount":{"name":"Total Discount","fullValue":647513.66,"value":"0.65","type":"financial","currencyCode":"GBP","unit":"M"},"margin":{"name":"Own Margin","fullValue":8560.47,"value":"8.56","type":"financial","currencyCode":"GBP","unit":"K"},"marginPercentage":{"name":"Own Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"netRevenue":{"name":"Net Revenue","fullValue":647513.66,"value":"0.65","type":"financial","currencyCode":"GBP","unit":"M"},"grossRevenue":{"name":"Gross Revenue","fullValue":389501.21,"value":"0.39","type":"financial","currencyCode":"GBP","unit":"M"},"retailerMargin":{"name":"Retailer Margin","fullValue":-258012.45,"value":"-0.26","type":"financial","currencyCode":"GBP","unit":"M"},"retailerMarginPercentage":{"name":"Retailer Margin(%)","fullValue":-341105.83,"value":"-0.34","type":"percentage","currencyCode":null,"unit":"M"},"distributorMargin":{"name":"Distributor Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"distributorMarginPercentage":{"name":" Distributor Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null}},"promoTypeId":2,"promoTacticId":33,"tactic":"DALEK,SHIPPER","type":"TPR","customerId":778716,"customerName":"CUSTOMER_102991","isProvided":false},{"id":1889,"name":"event","startDate":"2017-10-31","endDate":"2017-11-29","campaignName":"Other","campaignHoliday":"Other","promoId":0,"products":[{"id":149170,"productId":153659,"productName":"PRODUCT_714102","regularPrice":13.01,"promoPrice":5.72,"currency":"GBP","eventId":1889,"skuId":"714102","spend":3.0,"metric":{"roi":{"name":"ROI","fullValue":-9.48,"value":"-9.48","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Spend","fullValue":3391.97,"value":"3.39","type":"financial","currencyCode":"GBP","unit":"K"},"currentVSOD":{"name":"VSOD","fullValue":1130.66,"value":"1.13","type":"quantity","currencyCode":null,"unit":"K"},"baselineVSOD":{"name":"Baseline VSOD","fullValue":1116.56,"value":"1.12","type":"quantity","currencyCode":null,"unit":"K"},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":14.100000000000136,"value":"14.1","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":6470.18,"value":"6.47","type":"financial","currencyCode":"GBP","unit":"K"},"volumeLift":{"name":"VolumeLift","fullValue":1.2628071935229757,"value":"1.26","type":"percentage","currencyCode":null,"unit":null}}}],"metric":{"roi":{"name":"ROI","fullValue":-99.58,"value":"-99.58","type":"percentage","currencyCode":null,"unit":null},"spend":{"name":"Promo Spend","fullValue":1130.66,"value":"1.13","type":"financial","currencyCode":"GBP","unit":"K"},"currentVSOD":{"name":"VSOD","fullValue":1130.66,"value":"1.13","type":"quantity","currencyCode":null,"unit":"K"},"baselineVSOD":{"name":"Baseline VSOD","fullValue":1116.56,"value":"1.12","type":"quantity","currencyCode":null,"unit":"K"},"incrementalVSOD":{"name":"Incremental VSOD","fullValue":14.09,"value":"14.09","type":"quantity","currencyCode":null,"unit":null},"currentSales":{"name":"Sales","fullValue":6470.18,"value":"6.47","type":"financial","currencyCode":"GBP","unit":"K"},"volumeLift":{"name":"VolumeLift","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null},"discountDepth":{"name":"Discount Depth","fullValue":100.0,"value":"100","type":"percentage","currencyCode":null,"unit":null},"totalDiscount":{"name":"Total Discount","fullValue":43103.44,"value":"43.1","type":"financial","currencyCode":"GBP","unit":"K"},"margin":{"name":"Own Margin","fullValue":1116.56,"value":"1.12","type":"financial","currencyCode":"GBP","unit":"K"},"marginPercentage":{"name":"Own Margin(%)","fullValue":14.09,"value":"14.09","type":"percentage","currencyCode":null,"unit":null},"netRevenue":{"name":"Net Revenue","fullValue":43103.44,"value":"43.1","type":"financial","currencyCode":"GBP","unit":"K"},"grossRevenue":{"name":"Gross Revenue","fullValue":6470.18,"value":"6.47","type":"financial","currencyCode":"GBP","unit":"K"},"retailerMargin":{"name":"Retailer Margin","fullValue":-36633.26,"value":"-36.63","type":"financial","currencyCode":"GBP","unit":"K"},"retailerMarginPercentage":{"name":"Retailer Margin(%)","fullValue":-96093.53,"value":"-96.09","type":"percentage","currencyCode":null,"unit":"K"},"distributorMargin":{"name":"Distributor Margin","fullValue":0.0,"value":"0","type":"financial","currencyCode":"GBP","unit":null},"distributorMarginPercentage":{"name":" Distributor Margin(%)","fullValue":0.0,"value":"0","type":"percentage","currencyCode":null,"unit":null}},"promoTypeId":1,"promoTacticId":31,"tactic":"DALEK","type":"EDLP","customerId":778715,"customerName":"CUSTOMER_100857","isProvided":false}],"eventIds":[1728,1733,1734,1828,1889,1756,1776,1642,1726,1727,1631,1635,1637],"planId":5,"currencyCode":"GBP","lastYearRef":0,"isPlan":false};
      controller.scenarioOriginalObj = controller.scenarioObj;
      var planMetrics = {"current":{"grossRevenue":15016.942,"availableFunding":1236.75,"currencyCode":"GBP","fundRate":"8.2","eventsInPlan":13,"completedEvents":0,"ytdSpend":0,"totalPromoSpend":67170,"remainingSpend":67174.59,"fundProgressBar":"0","fundProgressClass":""},"previous":{"previousYearGrossRevenue":6666666,"previousYearPromoSpend":0,"previousYearEvents":0}};
      controller.scenarioObj.planMetrics = planMetrics;
      controller.planData.current = planMetrics.current;
      controller.planMetrics = controller.scenarioObj.planMetrics;
      controller.types = eventTypeTactic.data.types;
      controller.tactics = eventTypeTactic.data.tactics;
      controller.totalEventList = [controller.eventData];
      controller.planEventList = controller.totalEventList;
      controller.totalEventOriginalList = controller.totalEventList;
      scenarioService.eventIndex = {"1609":{"ind":0,"status":"Add"},"21":{"ind":1,"status":"Add"},"1611":{"ind":2,"status":"Complete"}};
      scenarioOverviews = {data:{scenarioOverviews:[{scenarioId: 5, name: 'scenarioName1'}, {scenarioId: 2, name: 'scenarioName1'}]}}
      scenarioDetails = {data:{"id":5,"name":"scenario1++","startDate":"2016-12-31","endDate":"2017-12-30","insertDate":"2017-07-25","grossRevenue":31243.0,"availableFunding":2345.0,"metric":null,"events":[],"eventIds":[1609],"planId":5,"currencyCode":null,"totalPromoSpend":null,"previousYearGrossRevenue":null,"previousYearPromoSpend":null,"ytdSpend":null,"previousYearYtdSpend":null,"remainingSpend":null,"isPlan":null}};
      scenarioList = {data: {scenarioOverviews:[{scenarioId: 1, name: 'test'}]}};
      scenarioDetails.data.metric = controller.eventData.metric;
      customerLevel = [{"id":778713,"name":"CUSTOMER_100032"},{"id":778714,"name":"CUSTOMER_100224"},{"id":778715,"name":"CUSTOMER_100857"},{"id":778716,"name":"CUSTOMER_102991"},{"id":778717,"name":"CUSTOMER_103201"},{"id":778718,"name":"CUSTOMER_103202"}];
    });
  });

  describe('testing getAllDetails functionality',function(){
    it('test getAllDetails ',function(){
      planList = {data:[{"id":5,"name":"Plan1","startDate":"2017-01-01","endDate":"2017-12-31","insertDate":1500955200000,"grossRevenue":150000.0,"availableFunding":12345.0,"metric":null,"events":[],"eventIds":[],"planId":null,"currencyCode":null,"totalPromoSpend":null,"previousYearGrossRevenue":null,"previousYearPromoSpend":null,"ytdSpend":null,"previousYearYtdSpend":null,"remainingSpend":null,"isPlan":null},{"id":12,"name":"string","startDate":"2017-01-01","endDate":"2017-12-31","insertDate":1500955200000,"grossRevenue":145302.0,"availableFunding":15678.0,"metric":null,"events":[],"eventIds":[],"planId":null,"currencyCode":null,"totalPromoSpend":null,"previousYearGrossRevenue":null,"previousYearPromoSpend":null,"ytdSpend":null,"previousYearYtdSpend":null,"remainingSpend":null,"isPlan":null},{"id":15,"name":"PlanQa","startDate":"2017-01-01","endDate":"2017-12-31","insertDate":1500955200000,"grossRevenue":124563.0,"availableFunding":97356.0,"metric":null,"events":[],"eventIds":[],"planId":null,"currencyCode":null,"totalPromoSpend":null,"previousYearGrossRevenue":null,"previousYearPromoSpend":null,"ytdSpend":null,"previousYearYtdSpend":null,"remainingSpend":null,"isPlan":null}]};
      var allEvent = {data:[{"id":2,"name":"string","tactic":"FOS","type":"TPR","startDate":"2017-07-29","endDate":"2017-08-14","campaignName":"Other","campaignHoliday":"Other","promoId":null,"products":null,"metric":null},{"id":3,"name":"sss","tactic":"HOT SPOT","type":"TPR","startDate":"2017-06-21","endDate":"2017-06-28","campaignName":"Other","campaignHoliday":"Other","promoId":null,"products":null,"metric":null},{"id":4,"name":"test","tactic":"HOT SPOT","type":"TPR","startDate":"2017-06-21","endDate":"2017-06-29","campaignName":"Other","campaignHoliday":"Other","promoId":null,"products":null,"metric":null}]};
      $httpBackend.whenGET('undefinedundefined/evaluator/scenario/plan/').respond(200, planList);
      $httpBackend.whenGET('undefinedundefined/evaluator/event').respond(200, allEvent);
      $httpBackend.whenGET('undefined/evaluator/scenario/planDetails/5').respond(200, {});
      $httpBackend.whenGET('undefined/evaluator/scenario/plan/5/overview').respond(200, scenarioOverviews);
      $httpBackend.whenGET('undefined/evaluator/chart/5?isPlan=true').respond(200, {});
      $httpBackend.whenGET('undefined/evaluator/scenario/5').respond(200, {});
      var result;
      //spyOn(window, 'setTimeout').and.callThrough();
      spyOn(restAPIService, 'invokeService').and.callFake(function(args){
        if(Constants.plan+'/' === args){
          def1 = $q.defer();
          return def1.promise;
        }else if(Constants.event === args){
          def2 = $q.defer();
          return def2.promise;
        }else if('undefined/evaluator/scenario/plan/5/overview' === args){
          def3 = $q.defer();
          def3.resolve(scenarioOverviews);
          return def3.promise;
        }else if(Constants.planDetails+'5' === args){
          def4 = $q.defer();
          def4.resolve(planList);
          return def4.promise;
        }else if('undefined/evaluator/chart/5?isPlan=true' === args){
          def5 = $q.defer();
          def5.resolve(planList);
          return def5.promise;
        }else if(Constants.sceanrio + '/5'){
          var def6 = $q.defer();
          def6.resolve(scenarioDetails);
          return def6.promise;
        }
      });
      controller.getAllDetails();
      if(def1)def1.resolve(planList);
      if(def2)def2.resolve(allEvent);
      rootScope.$apply();
    });
  });

  describe('testing changeFilterInChart functionality',function(){
    it('test changeFilterInChart ',function(){
      controller.changeFilterInChart();
    });
    it('test changeFilterInChart month',function(){
      controller.changeFilterInChart('month');
    });
    it('test changeFilterInChart quarter',function(){
      controller.changeFilterInChart('quarter');
    });
    it('test changeFilterInChart year',function(){
      controller.changeFilterInChart('year');
    });
    it('test changeFilterInChart year',function(){
      controller.selectedTabOption = 'scenarios';
      controller.changeFilterInChart('year', '', '', true);
    });
    it('test changeFilterInChart year',function(){
      controller.selectedTabOption = 'comparescenarios';
      controller.changeFilterInChart('year', '', '', true);
    });
  });
  describe('testing switch functionality',function(){
    it('test switch ',function(){
      controller.switch();
    });
  });
  describe('testing getClass functionality',function(){
    it('test getClass ',function(){
      controller.getClass();
    });
  });
  describe('testing getNextFilter functionality',function(){
    it('test getNextFilter ',function(){
      controller.nextFilterDisable = false;
      controller.currentFilterIndex = 3;
      controller.getNextFilter();
    });
  });
  describe('testing getPreviousFilter functionality',function(){
    it('test getPreviousFilter ',function(){
      controller.previousFilterDisable = false;
      controller.currentFilterIndex = 3;
      controller.getPreviousFilter();
    });
  });
  describe('testing isVisibleColumn functionality',function(){
    it('test isVisibleColumn ',function(){
      controller.isVisibleColumn();
    });
  });
  describe('testing rearrange functionality',function(){
    it('test rearrange ',function(){
      controller.rearrange();
    });
  });
  describe('testing selectColumn functionality',function(){
    it('test selectColumn ',function(){
      controller.selectColumn();
    });
  });
  describe('testing eventGroupBy functionality',function(){
    it('test eventGroupBy ',function(){
      controller.eventGroupBy();
    });
  });
  describe('testing toggleEvent functionality',function(){
    it('test toggleEvent',function(){
      controller.toggleEvent(singleEvent);
    });
  });
  describe('testing update functionality',function(){
    it('test update',function(){
      singleProduct.regularPrice = false;
      controller.update(singleProduct);
    });
    it('test update',function(){
      controller.update(singleProduct);
    });
  });
  describe('testing udpatePromoPrice functionality',function(){
    xit('test udpatePromoPrice',function(){
      singleProduct.discount = false;
      controller.udpatePromoPrice(singleProduct);
    });
    it('test udpatePromoPrice',function(){
      controller.udpatePromoPrice(singleProduct);
    });
  });
  describe('testing restoreProductValues functionality',function(){
    it('test restoreProductValues',function(){
      controller.restoreProductValues(0);
    });
  });
  describe('testing gotoEvent functionality',function(){
    it('test gotoEvent',function(){
      controller.gotoEvent();
    });
    it('test gotoEvent',function(){
      var deferred1, deferred2;
      $httpBackend.whenGET('undefinedundefined/evaluator/scenario/plan/').respond(200, {});
      $httpBackend.whenGET(/undefinedundefined\/evaluator\/event\.*/).respond(200, {});
       spyOn(restAPIService, 'invokeService').and.callFake(function(args){
        if(Constants.event + '/1' === args ){
           deferred1 = $q.defer();
           deferred1.resolve({data: controller.eventData});
          return deferred1.promise;
        }else if(Constants.event + Constants.eventInfo === args){
          deferred2 = $q.defer();
          deferred2.resolve(eventTypeTactic);
          return deferred2.promise;
        }
      });
      controller.gotoEvent(1);
      rootScope.$apply();
    });
  });
  describe('testing saveAsScenario functionality',function(){
    it('test saveAsScenario',function(){
      controller.selectedPlan = singlePlan;
      $httpBackend.whenPOST('undefined/evaluator/scenario').respond(200, {});
      $httpBackend.whenGET('undefinedundefined/evaluator/scenario/plan/').respond(200, {});
      $httpBackend.whenGET('undefinedundefined/evaluator/event').respond(200, {});
      var deferred = $q.defer();
      spyOn(restAPIService, 'invokeService').and.callFake(function(args){
        return deferred.promise;
      });
      spyOn(commonService, 'saveAsModel').and.callFake(function(params, callback){
        callback(true, 'newName');
      });
      //controller.saveAsScenario();
      deferred.resolve(scenarioOverviews);
      rootScope.$apply();
    });
  });
  describe('testing saveScenario functionality',function(){
    it('test saveScenario',function(){
      var deferred = $q.defer();
      controller.scenarioObj = scenarioDetails.data;
       $httpBackend.whenPUT(/undefinedundefined\/evaluator\/scenario\.*/).respond(200, {});
       $httpBackend.whenGET(/undefinedundefined\/evaluator\/scenario\.*/).respond(200, {});
       $httpBackend.whenGET(/undefinedundefined\/evaluator\/event\.*/).respond(200, {});
       spyOn(restAPIService, 'invokeService').and.callFake(function(args){
        return deferred.promise;
      });
      controller.saveScenario();
      deferred.resolve(scenarioDetails);
      rootScope.$apply();
    });
    it('test saveScenario',function(){
      controller.selectedPlan = singlePlan;
      var deferred = $q.defer();
      controller.scenarioObj = scenarioDetails.data;
      controller.scenarioObj.id = null;
       $httpBackend.whenPOST(/undefinedundefined\/evaluator\/scenario\.*/).respond(200, {});
       $httpBackend.whenGET(/undefinedundefined\/evaluator\/scenario\.*/).respond(200, {});
       $httpBackend.whenGET(/undefinedundefined\/evaluator\/event\.*/).respond(200, {});
       spyOn(restAPIService, 'invokeService').and.callFake(function(args){
        return deferred.promise;
      });
      controller.saveScenario();
      deferred.resolve(scenarioOverviews);
      rootScope.$apply();
    });
    it('test saveScenario',function(){
      controller.saveScenario();
    });
  });
  describe('testing resetSingleValue functionality',function(){
    it('test resetSingleValue',function(){
      controller.resetSingleValue('fundRate');
    });
  });
  xdescribe('testing resetAll functionality',function(){
    it('test resetAll',function(){
      controller.resetAll();
    });
  });
  xdescribe('testing simulateScenario functionality',function(){
    it('test simulateScenario',function(){
      controller.simulateScenario();
    });
  });
  describe('testing saveEventAs functionality',function(){
    it('test saveEventAs',function(){
      var deferred = $q.defer();
      $httpBackend.whenGET(/undefinedundefined\/evaluator\/event\.*/).respond(200, {});
      spyOn(restAPIService, 'invokeService').and.callFake(function(args){
        return deferred.promise;
      });
      spyOn(commonService, 'saveAsModel').and.callFake(function(args, callback){
        callback(true, 'newEventName');
      });
      controller.saveEventAs();
      deferred.resolve({data: singleEvent});
      rootScope.$apply();
    });
  });
  xdescribe('testing selectGroupBy functionality',function(){
    it('test selectGroupBy',function(){
      controller.selectGroupBy('attribute1');
    });
  });
  xdescribe('testing saveProductValues functionality',function(){
    it('test saveProductValues',function(){
      controller.saveProductValues();
    });
  });
  describe('testing simulateProductValues functionality',function(){
    it('test simulateProductValues',function(){
      controller.simulateProductValues();
    });
  });
  describe('testing addProduct functionality',function(){
    it('test addProduct',function(){
      controller.addProduct();
    });
  });
  describe('testing goBackToScenario functionality',function(){
    it('test goBackToScenario',function(){
      controller.goBackToScenario();
    });
  });
  describe('testing saveEvent functionality',function(){
    it('test saveEvent',function(){
      controller.saveEvent();
    });
  });
  describe('testing removeProduct functionality',function(){
    it('test removeProduct',function(){
      controller.removeProduct(singleProduct);
    });
    it('test removeProduct',function(){
      controller.eventId = 54;
      controller.removeProduct(singleProduct);
    });
  });
  describe('testing getProducts functionality',function(){
    it('test getProducts',function(){
      controller.getProducts();
    });
  });
  describe('testing closeSearch functionality',function(){
    it('test closeSearch',function(){
      controller.closeSearch();
    });
  });
  describe('testing loadProducts functionality',function(){
    it('test loadProducts',function(){
      controller.loadProducts();
    });
  });
  describe('testing resetEventData functionality',function(){
    it('test resetEventData',function(){
      controller.resetEventData();
    });
    it('test resetEventData',function(){
      controller.resetEventData();
    });
  });
  describe('testing selectPlan functionality',function(){
    it('test selectPlan',function(){
      var deferred1, deferred2, deferred3, deferred4;
      $httpBackend.whenGET(/undefinedundefined\/evaluator\/event\.*/).respond(200, {});
      spyOn(scenarioService, 'getEventListByID').and.callFake(function (args) {
        return args;
      });
      /*spyOn(scenarioService, 'buildFilterArray').and.callFake(function (args) {
        return chartFilterArrayObject;
      });*/
      spyOn(restAPIService, 'invokeService').and.callFake(function(args){
        if(args === Constants.planList + '5' + Constants.scenarioOverview){
          deferred1 = $q.defer();
          return deferred1.promise;
        }else if(args === Constants.planDetails + '5'){
          deferred2 = $q.defer();
          return deferred2.promise;
        }else if('undefined/evaluator/chart/5?isPlan=true' === args){
          deferred3 = $q.defer();
          return deferred3.promise;
        }else if(args === Constants.getPromoCustomers+'?customerlvl5='+'string'){
          deferred4 = $q.defer();
          return deferred4.promise;
        }else{
          console.log(args);
        }
      });
      singlePlan.metric = controller.eventData.metric;
      controller.selectPlan(singlePlan);
      if(deferred1){
        deferred1.resolve(scenarioList);
      }
      if(deferred2){
        singlePlan.lastYearRef = '5';
        deferred2.resolve({data: singlePlan});
      }
      if(deferred3){
        deferred3.resolve(planList);
      }
      if(deferred4){
        deferred4.resolve(customerLevel);
      }
      rootScope.$apply();
    });
    it('test selectPlan',function(){
      var deferred1, deferred2, deferred3, deferred4, deferred5;
      $httpBackend.whenGET(/undefinedundefined\/evaluator\/event\.*/).respond(200, {});
      spyOn(scenarioService, 'getEventListByID').and.callFake(function (args) {
        return args;
      });
      /*spyOn(scenarioService, 'buildFilterArray').and.callFake(function (args) {
        return args;
      });*/
      spyOn(restAPIService, 'invokeService').and.callFake(function(args){
        if(args === Constants.planList + '5' + Constants.scenarioOverview){
          deferred1 = $q.defer();
          return deferred1.promise;
        }else if(args === Constants.planDetails + '5'){
          deferred2 = $q.defer();
          return deferred2.promise;
        }else if('undefined/evaluator/chart/5?isPlan=true' === args){
          deferred3 = $q.defer();
          return deferred3.promise;
        }else if(args === Constants.getPromoCustomers+'?customerlvl5='+'string'){
          deferred4 = $q.defer();
          return deferred4.promise;
        }else if(args === Constants.sceanrio + '/1'){
          deferred5 = $q.defer();
          return deferred5.promise;
        }else{
          console.log(args);
        }
      });
      controller.selectedTabOption = 'scenarios';
      singlePlan.metric = controller.eventData.metric;
      controller.selectPlan(singlePlan);
      if(deferred1){
        deferred1.resolve(scenarioList);
      }
      if(deferred2){
        singlePlan.lastYearRef = '5';
        deferred2.resolve({data: singlePlan});
      }
      if(deferred3){
        deferred3.resolve(planList);
      }
      if(deferred4){
        deferred4.resolve(customerLevel);
      }
      if(deferred5){
        deferred5.resolve(scenarioDetails);
      }
      rootScope.$apply();
    });
    it('test selectPlan',function(){
      var deferred1, deferred2, deferred3;
      $httpBackend.whenGET(/undefinedundefined\/evaluator\/event\.*/).respond(200, {});
      spyOn(scenarioService, 'getEventListByID').and.callFake(function (args) {
        return args;
      });
      /*spyOn(scenarioService, 'buildFilterArray').and.callFake(function (args) {
        return args;
      });*/
      spyOn(restAPIService, 'invokeService').and.callFake(function(args){
        if(args === Constants.planList + '5' + Constants.scenarioOverview){
          deferred1 = $q.defer();
          return deferred1.promise;
        }else if(args === Constants.planDetails + '5'){
          deferred2 = $q.defer();
          return deferred2.promise;
        }else if('undefined/evaluator/chart/5?isPlan=true' === args){
          deferred3 = $q.defer();
          deferred3.reject();
          return deferred3.promise;
        }
      });
      controller.selectedTabOption = 'scenarios';
      singlePlan.metric = controller.eventData.metric;
      controller.selectPlan(singlePlan);
      if(deferred1){
        deferred1.reject();
      }
      if(deferred2){
        deferred2.reject();
      }
      rootScope.$apply();
    });
  });
  describe('testing changeTab functionality',function(){
    xit('test changeTab',function(){
      controller.changeTab('scenarios');
    });
    it('test changeTab',function(){
      controller.changeTab('comparescenarios');
    });
    xit('test changeTab',function(){
      controller.changeTab('planOverview');
    });
  });
  describe('testing triggerfn functionality',function(){
   /* it('test triggerfn',function(){
      controller.triggerfn();
    });
    it('test triggerfn',function(){
      controller.triggerfn(17, 1, false);
    });
    it('test triggerfn',function(){
      controller.triggerfn(17, 1, true);
    });*/
  });
  describe('testing changeviewfn functionality',function(){
    it('test changeviewfn',function(){
      controller.changeviewfn(scenarioOverviews.data.scenarioOverviews[0]);
    });
  });
  describe('testing selectScenario functionality',function(){
    it('test selectScenario',function(){
      var deferred = $q.defer();
      $httpBackend.whenGET(/undefinedundefined\/evaluator\/event\.*/).respond(200, {});
      spyOn(restAPIService, 'invokeService').and.callFake(function(args){
        return deferred.promise;
      });
      controller.selectScenario({"scenarioId":46,"name":"Testing new Plan"});
      deferred.resolve({data: scenarioDetails});
      rootScope.$apply();
    });
    it('test selectScenario',function(){
      var deferred = $q.defer();
      $httpBackend.whenGET(/undefinedundefined\/evaluator\/event\.*/).respond(200, {});
      spyOn(restAPIService, 'invokeService').and.callFake(function(args){
        return deferred.promise;
      });
      controller.selectScenario({"scenarioId":46,"name":"Testing new Plan"});
      deferred.reject();
      rootScope.$apply();
    });
  });
  describe('testing checkBoxCompare functionality',function(){
    it('test checkBoxCompare',function(){
      controller.checkBoxCompare();
    });
    it('test checkBoxCompare',function(){
      controller.csChartData = controller.compareScenariosChartData;
      controller.checkBoxCompare('Scenario 1', true);
    });
  });
  it('should exists', function () {
    expect(controller).toBeDefined();
  });
});
