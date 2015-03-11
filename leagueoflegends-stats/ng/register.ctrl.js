/**
 * Created by harshavardhan on 15-03-10.
 */
angular.module('app')
	.controller('RegisterCtrl', function ($scope, UserSvc) {
		$scope.register = function(username, password){
			UserSvc.register(username, password)
				.then(function (response) {
					alert("Congratulations Now pls login");
				})
		}
	});