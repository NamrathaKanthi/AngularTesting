describe('filter: customizeDateValues',function(){
  'use strict';
  var filter;
  beforeEach(module('polarisApp'));
  beforeEach(inject(function (_$filter_) {
    filter = _$filter_;
  }));

  it('datesFilter should defined',function () {
    expect(filter('datesFilter')).toBeDefined();
  });
  it('formatNumber should defined',function () {
    expect(filter('formatNumber')).toBeDefined();
  });
  it('formatNumber2 should defined',function () {
    expect(filter('formatNumber2')).toBeDefined();
  });
  it('formatDecimals should defined',function () {
    expect(filter('formatDecimals')).toBeDefined();
  });

  describe('datesFilter filter functionality test' ,function () {
    it('datesFilter filter should return Jan if value is 1' ,function () {
      expect(filter('datesFilter')(1)).toEqual('Jan');
    });
    it('datesFilter filter should return Feb if value is 2' ,function () {
      expect(filter('datesFilter')(2)).toEqual('Feb');
    });
    it('datesFilter filter should return Mar if value is 3' ,function () {
      expect(filter('datesFilter')(3)).toEqual('Mar');
    });
    it('datesFilter filter should return Apr if value is 4' ,function () {
      expect(filter('datesFilter')(4)).toEqual('Apr');
    });
    it('datesFilter filter should return Dec if value is 12' ,function () {
      expect(filter('datesFilter')(12)).toEqual('Dec');
    });
  });

  describe('formatNumber filter functionality test',function () {
    it('formatNumber filter should return 0 if str is empty ',function () {
      expect(filter('formatNumber')('')).toEqual('0');
    });
    it('formatNumber filter should return 60.6% if str is 60.589%',function () {
      expect(filter('formatNumber')('60.589%')).toEqual('60.6%');
    });
    it('formatNumber filter should return same input if it contain M',function () {
      expect(filter('formatNumber')('testM')).toEqual('testM');
    });
    it('formatNumber filter should return same input str if it contain K ',function () {
      expect(filter('formatNumber')('testK')).toEqual('testK');
    });
    it('formatNumber filter should return values in unit K  if input str is more than 1000',function () {
      expect(filter('formatNumber')('1002')).toEqual('1.0K');
    });
    it('formatNumber filter should return values in unit M  if input str is more than 1000000',function () {
      expect(filter('formatNumber')('12000000')).toEqual('12.0M');
    });
    it('formatNumber filter should return values in unit B  if input str is more than 1000000000',function () {
      expect(filter('formatNumber')('12000000000')).toEqual('12.0B');
    });
    it('formatNumber filter should return values in unit K  if negative input str is more than 1000',function () {
      expect(filter('formatNumber')('-1002')).toEqual('-1.0K');
    });
  });

  describe('formatNumber2 filter functionality test',function () {
    it('formatNumber2 filter should return string rounding it number value to 2 after decimal',function () {
      expect(filter('formatNumber2')('10.098')).toEqual('10.10');
    });
    it('formatNumber2 filter should return "12.00" if the input is "12.0"',function () {
      expect(filter('formatNumber2')('12.0')).toEqual('12.00');
    });
    it('formatNumber2 filter should return "-10.00" for "-10" as input',function () {
      expect(filter('formatNumber2')('-10')).toEqual('-10.00');
    });
    it('formatNumber2 filter should return "10.00" for "10" as input',function () {
      expect(filter('formatNumber2')('10')).toEqual('10.00');
    });
  });

  describe('formatDecimals filter functionality test',function () {
    it('formatDecimals filter should return empty string if input parameter containes NaN or Infinity',function () {
      expect(filter('formatDecimals')('Test Infinity')).toEqual('');
      expect(filter('formatDecimals')('Test NaN')).toEqual('');
    });
    it('formatDecimals filter should return same number string if its integer value is a decimal number till one value after decimal',function () {
      expect(filter('formatDecimals')('100')).toEqual('100');
    });
    it('formatDecimals filter should return rounded off string value if input is decimal number with more than 2 decimal values',function () {
      expect(filter('formatDecimals')(10.098)).toEqual('10.10');
    });
    it('formatDecimals filter should return same value if the input parameter is a decimal number with one decimal value',function () {
      expect(filter('formatDecimals')(10.1)).toEqual(10.1);
    });
  });
});
