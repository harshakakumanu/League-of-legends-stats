/**
 * Created by harshavardhan on 15-03-10.
 */
angular.module('app')
	.controller('ApplicationCtrl',function ($scope,UserSvc,$rootScope) {
		console.log('data');
		$scope.$on('login', function (_, user) {
			$rootScope.currentUser = user
		})
		$scope.logout = function() {
			$scope.currentUser = '';
			UserSvc.logout();
		}
	})