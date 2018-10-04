describe('filter: truncate',function(){
  'use strict';
  var filter,turncate;
  beforeEach(module('polarisApp'));
  beforeEach(inject(function (_$filter_) {
    filter = _$filter_;
  }));

  it('truncate filter should defined',function () {
    expect(filter('truncate')).toBeDefined();
  });

  describe('truncate filter functionality test',function () {
    it('truncate should return the input string without braces if it have any',function () {
      expect(filter('truncate')('{{TestString}}','removeBraces')).toEqual('TestString');
      expect(filter('truncate')('{{TestString','removeBraces')).toEqual('TestString')
    });

    it('truncate should return the input string without Own substring in it',function () {
      expect(filter('truncate')('Own Test String','removeBraces','',true)).toEqual('Test String');
    });
    it('truncate should return "X-Axis: Customers" if input string is "X-Axis" and "productMixChart"',function () {
      expect(filter('truncate')('X-Axis','productMixChart')).toEqual('X-Axis: Customers');
    });
    it('truncate should return "Level of Detail: Product" if input string is "Level of Detail" and "productMixChart"',function () {
      expect(filter('truncate')('Level of Detail','productMixChart')).toEqual('Level of Detail: Product');
    });
    it('truncate should return "Y-Axis: Measure" if input string is "Y-Axis" and "productMixChart"',function () {
      expect(filter('truncate')('Y-Axis','productMixChart')).toEqual('Y-Axis: Measure');
    });


    it('truncate should return "Gross Revenue" if input string contains "Promo Latest Estimate Value" ',function () {
      expect(filter('truncate')('Teststring Promo Latest Estimate Value')).toEqual('Gross Revenue');
    });
    it('truncate should return input string with out Prod1 in it if it contains "Prod1" ',function () {
      expect(filter('truncate')('TeststringProd1')).toEqual('Teststring');
    });
    it('truncate should return input string with out Prod2 in it if it contains "Prod2" ',function () {
      expect(filter('truncate')('TeststringProd2')).toEqual('Teststring');
    });


    it('truncate should replace "YEAR" with "year" if input string contains "YEAR" ',function () {
      expect(filter('truncate')('Teststring YEAR')).toEqual('Teststring year');
    });

    it('truncate should replace "MONTH" with "month" if input string contains "MONTH" ',function () {
      expect(filter('truncate')('Teststring WEEK')).toEqual('Teststring week');
    });

    it('truncate should replace "WEEK" with "week" if input string contains "WEEK"',function () {
      expect(filter('truncate')('Teststring MONTH')).toEqual('Teststring month');
    });

    it('truncate should replace "QUARTER" with "quarter" if input string contains "QUARTER"',function () {
      expect(filter('truncate')('Teststring QUARTER')).toEqual('Teststring quarter');
    });

    it('truncate should replace "benchmarking@deloitte.com" with "polaris@deloitte.com" if it contains "benchmarking@deloitte.com" ',function () {
      expect(filter('truncate')('Teststring benchmarking@deloitte.com')).toEqual('Teststring polaris@deloitte.com');
    });

    it('truncate should replace "Attr Var" with "Attribute" if it contains "Attr Var" ',function () {
      expect(filter('truncate')('Teststring Attr Var')).toEqual('Teststring Attribute');
    });

    it('truncate should replace "Lvl Var" with "Level" if it contains "Lvl Var" ',function () {
      expect(filter('truncate')('Teststring Lvl Var')).toEqual('Teststring Level');
    });

    it('truncate should trim its second and third argument string from the first argument if it contains',function () {
      expect(filter('truncate')('Teststring TrimMe TrimMeToo','TrimMe','TrimMeToo')).toEqual('Teststring  ');
    });

  });
});
