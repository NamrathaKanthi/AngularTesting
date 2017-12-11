module.exports = function($http, $q, x2js){

	this.getData = function(url,method,data){
		var deferred = $q.defer();
		method = method?method:"GET";
		var requestObj = {'url': url, 'method':method};
		if(method.toLowerCase() == 'post'){
			requestObj.data = data;
		}
		$http(requestObj).then(function(response){
			deferred.resolve(x2js.xml2js(response.data).Telematics);
		},function(error){
			deferred.reject({});
		});
		return deferred.promise;
	};

	this.getAllData = function(urls){
		var noOfCalls, promiseArr, i,deferred;

		noOfCalls = urls.length;
		promiseArr = [];

		for (i = 0; i < noOfCalls; i++) {
			promiseArr.push($http.get(urls[i]));
		}

		deferred = $q.defer();
		
		$q.all(promiseArr).then(function(response){
			var finalObj = {};
			var length = response.length;

			for(var j = 0; j<length; j++){
				var obj = x2js.xml2js(response[j].data);
				angular.extend(finalObj,obj.Telematics);
			}
			
			deferred.resolve(finalObj);
		},function (error) {
			deferred.reject({});
			// body...
		});

		return deferred.promise;
	};

};