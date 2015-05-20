var app = angular.module('sounder');
app.service('soundService', function($http, $q){

	this.getUser = function(userName) {

		// var dfd = $q.defer()
		return $http({
			method: 'GET',
			url: 'http://api.soundcloud.com/users/' + userName + '/tracks.json?client_id=bda4ada8694db06efcac9cf97b872b3e'
		})
		// 	.then(function(data){
		// 	console.log(data);
		// 	dfd.resolve(data);
		// })
		// return dfd.promise;
	}

});