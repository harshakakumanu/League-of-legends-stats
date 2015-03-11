/**
 * Created by harshavardhan on 15-03-10.
 */
angular.module('app')
	.service('UserSvc', function ($http) {
		var svc = this
		svc.getUser = function () {
			return $http.get('/api/users')
		}
		svc.login = function (username, password) {
			return $http.post('/api/sessions', {
				username: username, password: password
			}).then(function (val) {
				svc.token = val.data;
				$http.defaults.headers.common['X-Auth'] = val.data;
				console.log("inside login",$http.defaults.headers.common);
				return svc.getUser()
			})
		}
		svc.register = function (username, password) {
			return $http.post('/api/users', {
				username: username, password: password
			}).then(function () {
				return svc.login(username,password);
			})
		}
		svc.logout = function(){
			delete  $http.defaults.headers.common['X-Auth'];
		}
	})