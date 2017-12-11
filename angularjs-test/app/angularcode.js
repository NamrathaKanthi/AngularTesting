(function () {
	'use strict';
	angular
		.module('AppTest', []);
})();


(function () {
	'use strict';
	angular
		.module('AppTest')
		.filter('reverse', [function () {
			return function (string) {
				return string.split('').reverse().join('');
			}
		}]);
})();


(function () {
	'use strict';
	angular
		.module('AppTest')
		.controller('reverseCtrl', function ($http) {
			var neww = {};
			neww.getCellMethod = function () {
				$http.get("http://test.snm941.com/telematics/request?get=CellModemType").then(function (response) {
					neww.myCellData = response.data;
					console.log(neww.myCellData);
				}, function (response) {
					neww.myCellData = response.statusText;
				});
			};
			neww.getCellMethod();
			return neww;
		});
})();