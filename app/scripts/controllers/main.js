'use strict';

angular.module('tedxUofT2015App')
  .controller('MainCtrl', ["$scope", "$window", "$http", function ($scope,$window,$http) {
	
	//Scroll To Top
	$window.scrollTo(0,0);
	
	//Close the overlay menu
    $scope.overlayMenuClick = function(){
		$('#close_overlay').click();
	};
	
	$scope.tweets = [
		{	
			text:"We've heard it before and we hear it from Brigid: there is no such thing as balance. \
			Life is about work and life consequence management.",
			user:{
				name: "TEDxUofT"
			}
		},
		{	
			text:"Wonder what they do up at the International Space Station? Wonder no more! via @mental_floss http://bit.ly/1wCOOdj",
			user:{
				name: "TEDxUofT"
			}
		},
		{	
			text:"Mayor envy! Computer science students @UofT get to play with @IBM 's \
			@IBMWatson. http://news.utoronto.ca/ibms-watson-comes-computer-science-department-university-toronto …",
			user:{
				name: "TEDxUofT"
			}
		}
	];
	
	$http.post('php/getTweets.php').
	  success(function(data, status, headers, config) {
		$scope.tweets = data;
		console.log(data);
	  }).
	  error(function(data, status, headers, config) {
	  });
	
}]);