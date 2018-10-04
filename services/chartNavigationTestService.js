'use strict';

describe('Service: chartNavigationTestService', function () {
  beforeEach(module('polarisApp'));
  var chartNavigationService, data, pageState, chartName, temp, data, chartList, state, currentState, rootScope;
  beforeEach(inject(function (_chartNavigationService_, $rootScope) {
    rootScope = $rootScope;
    chartNavigationService = _chartNavigationService_;
    data = [];
    state = "exide";
    currentState = "newpage";
  }));

  it('chartNavigationService definition test', inject(function () {
    expect(chartNavigationService).not.toBe(undefined);
  }));

  it('chartNavigationService :getDrillDown test', inject(function () {
    chartNavigationService.setDrillDown(data)
    expect(chartNavigationService.getDrillDown()).not.toBe(undefined);
  }));

  it('chartNavigationService :emptyDrillDown test', inject(function () {
    chartNavigationService.emptyDrillDown();
    expect(chartNavigationService.emptyDrillDown).not.toBe(undefined);
  }));

  describe('chartNavigationService : addPage', function () {
    it('definition test', inject(function () {
      chartNavigationService.addPage(pageState);
      expect(chartNavigationService.addPage).not.toBe(undefined);
    }));
  });
  describe('chartNavigationService : addChart', function () {
    it('definition test', inject(function () {
      chartNavigationService.addChart("pola");
      expect(chartNavigationService.addChart).not.toBe(undefined);
    }));
  });
  describe('chartNavigationService : getSettings', function () {
    it('definition test', inject(function () {
      chartNavigationService.getSettings("name");
      expect(chartNavigationService.getSettings).not.toBe(undefined);
    }));
  });
  describe('chartNavigationService : isPreFilterChart', function () {
    it('definition test', inject(function () {
      chartNavigationService.isPreFilterChart("value");
      expect(chartNavigationService.isPreFilterChart).not.toBe(undefined);
    }));
  });
  describe('chartNavigationService : addChartFilter', function () {
    it('definition test', inject(function () {
      chartNavigationService.addChart('polaris')
      chartNavigationService.addChartFilter('polaris', { 'project': 'polaris' }, 'data');
      expect(chartNavigationService.addChartFilter).not.toBe(undefined);
    }));
  });
  describe('chartNavigationService : getNavigationData', function () {
    it('definition test', inject(function () {
      chartNavigationService.getNavigationData();
      expect(chartNavigationService.getNavigationData).not.toBe(undefined);
    }));
  });
  describe('chartNavigationService : getChartNameByState', function () {
    it('definition test', inject(function () {
      chartNavigationService.getChartNameByState(state);
      expect(chartNavigationService.getChartNameByState).not.toBe(undefined);
    }));
  });
  describe('chartNavigationService : getHashValueByMenuName', function () {
    it('definition test', inject(function () {
      chartNavigationService.getHashValueByMenuName("name1");
      expect(chartNavigationService.getHashValueByMenuName).not.toBe(undefined);
    }));
  });
  describe('chartNavigationService : getModuleName', function () {
    it('definition test', inject(function () {
      chartNavigationService.getModuleName(currentState);
      expect(chartNavigationService.getModuleName).not.toBe(undefined);
    }));
  });
  it('storeFilters should be defined', function () {
    rootScope.$broadcast('storeFilters', { fName: "fName", fValue: "fValue" });
    expect(chartNavigationService.fName).toBe(undefined);
    expect(chartNavigationService.fValue).toBe(undefined);
  });
  it('storeParameters should be defined', function () {
    rootScope.$broadcast('storeParameters', { pName: "pName", pValue: "pValue" });
    expect(chartNavigationService.pName).toBe(undefined);
    expect(chartNavigationService.pValue).toBe(undefined);
  });

  describe('chartNavigationService : getMenuNameByHashValue', function () {
    it('definition test', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue).not.toBe(undefined);
    }));
    it('expect return value for dashboard/marketShareAndSize will be Market Share and Size', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue('/dashboard/marketShareAndSize')).toEqual('Market Share and Size');
    }));
    it('expect return value for dashboard/priceLadders will be Price Ladders', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue('/dashboard/priceLadders')).toEqual('Price Ladders');
    }));
    it('expect return value for dashboard/marketPositionMarketShare will be Market Position: Market Share', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue('/dashboard/marketPositionMarketShare')).toEqual('Market Position: Market Share');
    }));
    it('expect return value for dashboard/pricingPresencePriceDistribution will be Pricing Presence: Price Distribution', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue('/dashboard/pricingPresencePriceDistribution')).toEqual('Pricing Presence: Price Distribution');
    }));
    it('expect return value for dashboard/priceChangeImpacts will be Price Change Impacts', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue('/dashboard/priceChangeImpacts')).toEqual('Price Change Impacts');
    }));
    it('expect return value for dashboard/pricingEvaluationPriceGuidelines will be Pricing Evaluation: Price Guidelines', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue('/dashboard/pricingEvaluationPriceGuidelines')).toEqual('Pricing Evaluation: Price Guidelines');
    }));
    it('expect return value for dashboard/eventCalendar will be Event Calendar', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue('/dashboard/eventCalendar')).toEqual('Event Calendar');
    }));
    it('expect return value for dashboard/tradeInvestment will be Trade Investment Breakdown', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue('/dashboard/tradeInvestment')).toEqual('Investment Breakdown');
    }));
    it('expect return value for dashboard/investmentPerformance will be Investment Performance', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue('/dashboard/investmentPerformance')).toEqual('Investment Performance');
    }));
    it('expect return value for dashboard/roiDispersion will be ROI Dispersion', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue('/dashboard/roiDispersion')).toEqual('ROI Dispersion');
    }));
    it('expect return value for dashboard/promotionalEffectivenessWhen will be Promotional Effectiveness When', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue('/dashboard/promotionalEffectivenessWhen')).toEqual('Promotional Effectiveness When');
    }));
    it('expect return value for dashboard/promotionalSpendYearOverYear will be Promotional Spend: Year-over-Year', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue('/dashboard/promotionalSpendYearOverYear')).toEqual('Promotional Spend: Year-over-Year');
    }));
    it('expect return value for dashboard/promotionalSpendIncrementalPerformance will be Promotional Spend: Incremental Performance', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue('/dashboard/promotionalSpendIncrementalPerformance')).toEqual('Promotional Spend: Incremental Performance');
    }));
    it('expect return value for dashboard/promotionalSpendFinancialOutcomes will be Promotional Spend: Financial Outcomes', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue('/dashboard/promotionalSpendFinancialOutcomes')).toEqual('Promotional Spend: Financial Outcomes');
    }));
    it('expect return value for dashboard/financialPerformance will be Financial Performance', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue('/dashboard/financialPerformance')).toEqual('Financial Performance');
    }));
    it('expect return value for dashboard/promotionalActivityDistribution will be Promotional Activity Distribution', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue('/dashboard/promotionalActivityDistribution')).toEqual('Promotional Activity Distribution');
    }));
    it('expect return value for dashboard/customerMargin will be Customer Margin Spread', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue('/dashboard/customerMargin')).toEqual('Customer Margin Spread');
    }));
    it('expect return value for dashboard/benchmarkWaterfall will be Benchmark Waterfall', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue('/dashboard/benchmarkWaterfall')).toEqual('Benchmark Waterfall');
    }));
    it('expect return value for dashboard/relativeMargin will be Relative Margin', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue('/dashboard/relativeMargin')).toEqual('Relative Margin');
    }));
    it('expect return value for dashboard/marginDispersion will be Margin Dispersion', inject(function () {
      expect(chartNavigationService.getMenuNameByHashValue('/dashboard/marginDispersion')).toEqual('Margin Dispersion');
    }));
  });
});
