'use strict';

angular.module('tedxUofT2015App')
  .controller('MainCtrl', function ($scope,$window,$sce) {
	
	//Scroll To Top
	$window.scrollTo(0,0);
	
	//Close the overlay menu
    $scope.overlayMenuClick = function(){
		$('#close_overlay').click();
	};
	
	//Video html
	$scope.videos = [
		{title:"Pacemakers, Defibrillators and Sound" , link:"http://www.youtube.com/embed/M2FJuSLuiJc", id:"M2FJuSLuiJc", speark:"Andres Lozano"},
		{title:"Pacemakers, Defibrillators and Sound" , link:"http://www.youtube.com/embed/LNohxpJntZo", id:"LNohxpJntZo", speark:"Andres Lozano"},
		{title:"Pacemakers, Defibrillators and Sound" , link:"http://www.youtube.com/embed/CuxfRdjfZG0", id:"CuxfRdjfZG0", speark:"Andres Lozano"},
		{title:"Pacemakers, Defibrillators and Sound" , link:"http://www.youtube.com/embed/tl5GbgP1EFM", id:"tl5GbgP1EFM", speark:"Andres Lozano"},
		{title:"Pacemakers, Defibrillators and Sound" , link:"http://www.youtube.com/embed/6a59mBqyZaU", id:"6a59mBqyZaU", speark:"Andres Lozano"},
		{title:"Pacemakers, Defibrillators and Sound" , link:"http://www.youtube.com/embed/LFxQEUDIAuk", id:"LFxQEUDIAuk", speark:"Andres Lozano"},
		{title:"Pacemakers, Defibrillators and Sound" , link:"http://www.youtube.com/embed/0sxY-jS7v3U", id:"0sxY-jS7v3U", speark:"Andres Lozano"},
		{title:"Pacemakers, Defibrillators and Sound" , link:"http://www.youtube.com/embed/GYzLcpN8dso", id:"GYzLcpN8dso", speark:"Andres Lozano"},
		{title:"Pacemakers, Defibrillators and Sound" , link:"http://www.youtube.com/embed/Fr26scqsIwk", id:"Fr26scqsIwk", speark:"Andres Lozano"}
		
	];
	
	//first video index on the list
	$scope.currentIndexFirstDisplayedVideo = 0;
	
	//first video on the big screen
	$scope.videoLinkPlaying = $scope.videos[0].link;
	
	$scope.trustSrc = function(src) {
		return $sce.trustAsResourceUrl(src);
	};
	
	$scope.playVideo = function(index){
		$scope.videoLinkPlaying = $scope.videos[index].link;
	};
	
	//videos displayed on the list
	$scope.displayVideos=[];
	for(var i=0; i<4; i++){
		$scope.displayVideos.push($scope.videos[i]);
	}
	
	//press left arrow
	$scope.leftNaviVideo = function(){
		if($scope.currentIndexFirstDisplayedVideo!= 0){
			$scope.currentIndexFirstDisplayedVideo = $scope.currentIndexFirstDisplayedVideo - 1;
			$scope.displayVideos=[];
			for(var i=$scope.currentIndexFirstDisplayedVideo; i<$scope.currentIndexFirstDisplayedVideo+4	; i++){
				$scope.displayVideos.push($scope.videos[i])
			}
		}
	};
	
	//press right arrow
	$scope.rightNaviVideo = function(){
		if($scope.currentIndexFirstDisplayedVideo!= $scope.videos.length-4){
			$scope.currentIndexFirstDisplayedVideo = $scope.currentIndexFirstDisplayedVideo + 1;
			$scope.displayVideos=[];
			for(var i=$scope.currentIndexFirstDisplayedVideo; i<$scope.currentIndexFirstDisplayedVideo+4; i++){
				$scope.displayVideos.push($scope.videos[i])
			}
		}
	};
	
	//End Video html
});