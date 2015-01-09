'use strict';

angular.module('tedxUofT2015App')
  .controller('MainCtrl', ["$scope", "$window", "$http", "$rootScope", function ($scope,$window,$http,$rootScope) {	
	
	$rootScope.socialMedia = {show:true};
	
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
	
	//mailing list
	$scope.mailingButton = "Subscribe";
	$scope.mailingPlaceHolder = "AwesomeEmail@mail.com";
	$scope.mailingLabel = ""
	$scope.mailingMsg = "";
	$scope.mailingLeft = "";
	$scope.mailingInput = "";
	$scope.steps = 0;
	$scope.focusInput = true;
	
	$scope.mailingInfo = {
		email:"",
		name:"",
		year:"",
		campus:"",
		interest:"",
		involvement:""
	};

	$scope.mailingNext = function(){
		$scope.mailingMsg = "";
		$scope.mailingFocusInput = true;
		if($scope.steps == 0){
			if($scope.mailingInput == "" || !validateEmail($scope.mailingInput) ){
				$scope.mailingMsg = "Please fill in valid email"
			}else{
				$scope.mailingInfo.email = $scope.mailingInput;
				$scope.mailingButton = "Next";
				$scope.mailingPlaceHolder = "Cool Buddy";
				$scope.mailingLeft = "0/4";
				$scope.mailingLabel = "Name:"
				$scope.steps++;
				$scope.mailingInput = "";
			}
		}
		else if($scope.steps == 1){
			if($scope.mailingInput == ""){
				$scope.mailingMsg = "Please fill in your name"
			}else{
				$scope.mailingInfo.name = $scope.mailingInput;
				$scope.mailingButton = "Next";
				$scope.mailingPlaceHolder = "3rd";
				$scope.mailingLeft = "1/4";
				$scope.mailingLabel = "Year of Study:"
				$scope.steps++;
				$scope.mailingInput = "";
			}
		}
		else if($scope.steps == 2){
			if($scope.mailingInput == ""){
				$scope.mailingMsg = "Please fill in your name"
			}else{
				$scope.mailingInfo.campus = $scope.mailingInput;
				$scope.mailingButton = "Next";
				$scope.mailingPlaceHolder = "Victoria/UTSG";
				$scope.mailingLeft = "2/4";
				$scope.mailingLabel = "College/Campus:"
				$scope.steps++;
				$scope.mailingInput = "";
			}
		}
		else if($scope.steps == 3){
			if($scope.mailingInput == ""){
				$scope.mailingMsg = "Please fill in your name"
			}else{
				$scope.mailingInfo.interest = $scope.mailingInput;
				$scope.mailingButton = "Next";
				$scope.mailingPlaceHolder = "Science/Research/Education/Technology/GlobalIssues/Environment/Art";
				$scope.mailingLeft = "3/4";
				$scope.mailingLabel = "Area of Interest:"
				$scope.steps++;
				$scope.mailingInput = "";
			}
		}
		else if($scope.steps == 4){
			if($scope.mailingInput == ""){
				$scope.mailingMsg = "Please fill in your name"
			}else{
				$scope.mailingInfo.interest = $scope.mailingInput;
				$scope.mailingButton = "Finish";
				$scope.mailingPlaceHolder = "Volunteer/Executive/Events/Conference";
				$scope.mailingLeft = "4/4";
				$scope.mailingLabel = "Involvement in TEDxUofT:"
				$scope.steps++;
				$scope.mailingInput = "";
			}
		}
	};
	
	
	
	function validateEmail(email) { 
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	} 
	
}]);

