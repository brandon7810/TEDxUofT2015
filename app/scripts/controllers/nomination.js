'use strict';

angular.module('tedxUofT2015App')
  .controller('NominationCtrl', function ($scope,$window,$http,localStorageService) {
    	
	//Scroll To Top
	$window.scrollTo(0,0);

	var submissionInStore = localStorageService.get('submission');

	$scope.submission = submissionInStore || {
		Name:"",
		Email:"",
		Phone:"",
		Nominee_Name:"",
		Nominee_Email:"",
		Nominee_Phone:"",
		Overview_ans:"",
		links_ans:"",
		videos_ans:"",
		speak_style_ans:""
	};;

	$scope.$watch('submission', function () {
	  localStorageService.set('submission', $scope.submission);
	}, true);
	
	
	$scope.setStepIndex = function(index){
		if($scope.stepIndex.value != 6){
			$scope.stepIndex.value = index;
		}
	};
	
	$scope.stepIndex = {value: 0};
	
	$scope.nextStep = function(){
		$scope.stepIndex.value++;
		
		if($scope.stepIndex.value == 6){
			localStorageService.clearAll();
			
			 $http.post('../../php/nomination_engine.php', $scope.submission).
			  success(function(data, status, headers, config) {
				$('#stepSuccess').hide();
				$('#stepFailure').hide();
				$('#stepFinish').fadeOut(300, function() {
					$('#stepSuccess').fadeIn(300);
				});
			  }).
			  error(function(data, status, headers, config) {
				$('#stepSuccess').hide();
				$('#stepFailure').hide();
				$('#stepFinish').fadeOut(300, function() {
					$('#stepFailure').fadeIn(300);
				});
			  });
			  
			 $http.post('php/postSpreadSheet/post_SpreadSheet_Nomination.php', {
				Nominator_Name: $scope.submission.Name,
				Nominator_Email: $scope.submission.Email, 
				Nominator_Phone: $scope.submission.Phone,
				Nominee_Name: $scope.submission.Nominee_Name,
				Nominee_Email: $scope.submission.Nominee_Email,
				Nominee_Phone: $scope.submission.Nominee_Phone,
				Overview: $scope.submission.Overview_ans,
				Websites_Articles: $scope.submission.links_ans,
				Audios_Videos: $scope.submission.videos_ans,
				Speaking_Style: $scope.submission.speak_style_ans,
				Why_fits_the_theme: "N/A"
			 }).
			  success(function(data, status, headers, config) {
			  }).
			  error(function(data, status, headers, config) {
			  });
		}
	};
	
	$scope.prevStep = function(){
		$scope.stepIndex.value--
	};
	
  });
