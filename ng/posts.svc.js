/**
 * Created by harshavardhan on 15-03-10.
 */
angular.module('app').service('PostsSvc',['$http', function($http) {
	var key = '8c522586-0da9-4899-aec8-fc09133e2fd9';
	var country = 'na';//north america
	this.getSummonner = function(this.summonerName) {
		$http({method: 'get', url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + this.summonerName + '?api_key=' + key})
	}
	this.getChampion = function(post) {
		$http({method: 'get', url: 'https://na.api.pvp.net/api/lol/+'+ country +'/v1.2/champion?api_key=' + key})
	}
	this.fetch = function() {
		return $http.get('/api/posts')
	}
	this.create = function(post) {
		return $http.post('/api/posts',post);
	}
	
}])


