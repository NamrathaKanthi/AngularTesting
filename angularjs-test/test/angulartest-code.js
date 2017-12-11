describe('AppTest', function () {
	beforeEach(module('AppTest'));

	describe('reverseStringTest', function () {
		var reverse;
		beforeEach(inject(function ($filter) {
			reverse = $filter('reverse', {});
		}));
		it('should reverse a string', function () {
			expect(reverse('namratha')).toBe('ahtarman');
			expect(reverse('abhilash')).toBe('hsalihba');
		});
	});

	describe('ControllerHttp', function () {
		var $httpBackend;
		var newController;
		beforeEach(inject(function (_$controller_, $injector) {
			newController = _$controller_;
			$httpBackend = $injector.get('$httpBackend');
			$httpBackend.when('GET', 'http://test.snm941.com/telematics/request?get=CellModemType').respond("value");
		}));
		it('should check for Hotspot Ajax call data', function () {
			var reverse = newController('reverseCtrl', {});
			reverse.getCellMethod();
			$httpBackend.flush();
			var x = reverse.myCellData;
			expect(x).toEqual("value");
		});
	});
});