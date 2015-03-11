/**
 * Created by harshavardhan on 15-03-10.
 */

angular.module('app')
    .controller('PostsCtrl', function ($scope, $http, PostsSvc) {
        $scope.haveSummoner = false;
        $scope.summonerName = "rulenext";
        $scope.check = function(){
        	console.log('harshavardhan');
        }
        $scope.fetchSummoner = function () {
        	console.log('harshavardhan');
            console.log(this.summonerName);
            if (this.summonerName) {
                PostsSvc.getSummonner(this.summonerName).success(function(data) {
                	console.log('data');

				$scope.summoner = data;
                $scope.haveSummoner = true;
			})
            }
        }
         $scope.getChampion = function () {        
            PostsSvc.getChampion().success(function(data) {
				$scope.champion = data;
			})
        }
        $scope.resetSearch = function () {
            console.log('search reset');
            $scope.haveSummoner = false;
            this.summonerName = "";
            $scope.$broadcast('resetSearch');
        }
        PostsSvc.fetch().success(function(posts) {
		$scope.posts = posts;
		})
		$scope.addPost = function() {
			if($scope.postBody){

				PostsSvc.create({
					body :$scope.postBody
				}).success(function(){
					$scope.postBody = null;
				})
			}

		}

		$scope.$on('ws:new_post', function (_, post) {
			$scope.$apply(function () {
				$scope.posts.unshift(post)
			})
	})
    });

