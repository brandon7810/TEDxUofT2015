'use strict';

/**
 * @ngdoc function
 * @name tedxUofT2015App.controller:VolunteerCtrl
 * @description
 * # VolunteerCtrl
 * Controller of the tedxUofT2015App
 */
angular.module('tedxUofT2015App')
  .controller('NominationCtrl', ["$scope", "$window", "$http", "localStorageService", function ($scope,$window,$http,localStorageService) {	
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
		speak_style_ans:"",
		Why_fits_the_theme: ""
	};;

	
	$scope.validation = {
		Name:false,
		Email:false,
		Phone:false,
		Nominee_Name:false,
		Nominee_Email:false,
		Nominee_Phone:false,
		Overview_ans:false,
		links_ans:false,
		videos_ans:false,
		speak_style_ans:false,
		Why_fits_the_theme: false
	};;
	
	$scope.$watch('submission', function () {
	  localStorageService.set('submission', $scope.submission);
	}, true);
	
	
	$scope.setStepIndex = function(index){
		if($scope.stepIndex.value != 7){
			$scope.stepIndex.value = index;
		}
	};
	
	$scope.stepIndex = {value: 0};
	
	$scope.nextStep = function(){
		$window.scrollTo(0,100);
	
		if($scope.stepIndex.value == 0){
			$scope.stepIndex.value++;
		}
		else if($scope.stepIndex.value == 1){
			if($scope.submission.Name == ""){
				$scope.validation.Name = true;
			}else if($scope.submission.Email == "" && $scope.submission.Phone == ""){
				$scope.validation.Email = true;
				$scope.validation.Phone = true;
			}else if($scope.submission.Nominee_Name == ""){
				$scope.validation.Nominee_Name = true;
			}else if($scope.submission.Nominee_Email == "" && $scope.submission.Nominee_Phone == ""){
				$scope.validation.Nominee_Email = true;
				$scope.validation.Nominee_Phone = true;
			}
			else{
				$scope.stepIndex.value++;
			}
		}
		else if($scope.stepIndex.value == 2){
			if($scope.submission.Overview_ans.length < 50){
				$scope.validation.Overview_ans = true;
			}else{
				$scope.stepIndex.value++;
			}	
		}
		else if($scope.stepIndex.value == 3 || $scope.stepIndex.value == 4){
			$scope.stepIndex.value++;
		}
		else if($scope.stepIndex.value == 5){
			if($scope.submission.speak_style_ans.length < 50){
				$scope.validation.speak_style_ans = true;
			}else{
				$scope.stepIndex.value++;
			}	
		}
		else if($scope.stepIndex.value == 6){
			if($scope.submission.Why_fits_the_theme.length < 30){
				$scope.validation.Why_fits_the_theme = true;
			}
			else{
				$scope.stepIndex.value++;
				localStorageService.clearAll();
				
				 $http.post('php/nomination_engine.php', $scope.submission).
				  success(function(data, status, headers, config) {
					$('#stepFinish').fadeOut(300, function() {
						$('#stepSuccess').fadeIn(300);
					});
				  }).
				  error(function(data, status, headers, config) {
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
					Why_fits_the_theme: $scope.submission.Why_fits_the_theme
				 }).
				  success(function(data, status, headers, config) {
				  }).
				  error(function(data, status, headers, config) {
				  });
			}
		}
	};
	
	$scope.prevStep = function(){
		$window.scrollTo(0,100);
		$scope.stepIndex.value--
	};
	
  }]);
