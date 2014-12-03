'use strict';

angular.module('tedxUofT2015App')
  .controller('MainCtrl', ["$scope", "$window", "$http", function ($scope,$window,$http) {
	
	//Scroll To Top
	$window.scrollTo(0,0);
	
	//Close the overlay menu
    $scope.overlayMenuClick = function(){
		$('#close_overlay').click();
		//Refresh page
		//location.reload();
	};
	
	function loadTwitter() {
		!function(d,s,id){
			var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
			if(!d.getElementById(id)){
				js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";
				js.setAttribute('onload', 

					"twttr.events.bind('rendered',function(e) {var container = document.querySelector('#containerFeeds'); var msnry; imagesLoaded( container, function() { msnry = new Masonry( container, { itemSelector: '.item', 'gutter': 0}); });});"

				);
				fjs.parentNode.insertBefore(js,fjs);
			}
		}(document,"script","twitter-wjs");
	}
	loadTwitter(); 
	
	var twitter = $('#twitter-wjs');
	if(twitter != null){
		console.log("Reload twitter");
		twitter.remove();
		loadTwitter(); 
	}
	
}]);