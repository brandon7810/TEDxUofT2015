'use strict';

/**
 * @ngdoc function
 * @name tedxUofT2015App.controller:VolunteerCtrl
 * @description
 * # VolunteerCtrl
 * Controller of the tedxUofT2015App
 */
angular.module('tedxUofT2015App')
  .controller('VolunteerCtrl', ["$scope", "$window", "$http", "localStorageService", "$rootScope",
	function ($scope,$window,$http,localStorageService, $rootScope) {

	ga('send', 'pageview', '/volunteer');

	$rootScope.socialMedia.show = false;
	$rootScope.mailingList.show = false;

	//Scroll To Top
	$window.scrollTo(0,0);

	var submissionInStore = localStorageService.get('volunteerSubmission');

	$scope.submission = submissionInStore || {
		Name:"",
		Email:"",
		Phone:"",
		AvailableOnCon:"",
		Year:"",
		Campus:"",
		Positions:"",
		HowHearTEDxUofT:"",
		ExperiencePosi:"",
		StrongAttr:"",
		PastExper:"",
		LikeSeeInEvent:"",
		Questions:""
	};

	$scope.validation = {
		Name:false,
		Email:false,
		Phone:false,
		Year:false,
		Campus:false,
		Positions:false,
		HowHearTEDxUofT:false,
		ExperiencePosi:false,
		StrongAttr:false,
		PastExper:false,
		LikeSeeInEvent:false,
		Questions: false
	};

	$scope.$watch('submission', function () {
	  localStorageService.set('volunteerSubmission', $scope.submission);
	}, true);

	//Campus
	$scope.campusUTSC = "volunteer_pos";
	$scope.campusUTSG = "volunteer_pos";
	$scope.campusUTM = "volunteer_pos";
	$scope.campusOther = "volunteer_pos";

	$scope.getCampus = function(campus){

		if(campus == "UTSG"){

			$scope.campusUTSC = "volunteer_pos";
			$scope.campusUTSG = "volunteer_posActive";
			$scope.campusUTM = "volunteer_pos";
			$scope.campusOther = "volunteer_pos";
		}

		else if(campus == "UTSC"){

			$scope.campusUTSC = "volunteer_posActive";
			$scope.campusUTSG = "volunteer_pos";
			$scope.campusUTM = "volunteer_pos";
			$scope.campusOther = "volunteer_pos";
		}

		else if(campus == "UTM"){

			$scope.campusUTSC = "volunteer_pos";
			$scope.campusUTSG = "volunteer_pos";
			$scope.campusUTM = "volunteer_posActive";
			$scope.campusOther = "volunteer_pos";
		}

		else if(campus == "Other"){

			$scope.campusUTSC = "volunteer_pos";
			$scope.campusUTSG = "volunteer_pos";
			$scope.campusUTM = "volunteer_pos";
			$scope.campusOther = "volunteer_posActive";
		}

		$scope.submission.Campus = campus;
	};

	if($scope.submission.Campus != ""){

		$scope.getCampus($scope.submission.Campus);
	}
	//END campus

	//Positions
	$scope.active1 = {value: false};
	$scope.active2 = {value: false};
	$scope.active3 = {value: false};
	$scope.active4 = {value: false};

	if($scope.submission.Positions != ""){

		var positions = $scope.submission.Positions;

		if(positions.indexOf("Visuals") != -1){

			$scope.active1.value = true;
		}

		if(positions.indexOf("Event Setup") != -1){

			$scope.active2.value = true;
		}

		if(positions.indexOf("Assisting Performers") != -1){

			$scope.active3.value = true;
		}

		if(positions.indexOf("AV Setup") != -1){

			$scope.active4.value = true;
		}
	}


	$scope.getPostions = function(){

		var positions = "";

		if($scope.active1.value){

			positions = "Visuals, " + positions;
		}

		if($scope.active2.value){

			positions = "Event Setup, " + positions;
		}

		if($scope.active3.value){

			positions = "Assisting Performers, " + positions;
		}
		if($scope.active4.value){

			positions = "AV Setup, " + positions;
		}

		$scope.submission.Positions = positions;
	};
	//END Positions

	$scope.setStepIndex = function(index){

		if($scope.stepIndex.value != 9){

			$scope.stepIndex.value = index;
		}
	};

	$scope.stepIndex = {value: 0};

	$scope.nextStep = function(){

		$window.scrollTo(0,20);

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

			if($scope.submission.Year == ""){

				$scope.validation.Year = true;

			}else if($scope.submission.Campus == ""){

				$scope.validation.Campus = true;

			}else if($scope.submission.Positions == ""){

				$scope.validation.Positions = true;

			}else{

				$scope.stepIndex.value++;
			}
		}

		else if($scope.stepIndex.value == 3){

			if($scope.submission.HowHearTEDxUofT.length < 50){

				$scope.validation.HowHearTEDxUofT = true;

			}else{

				$scope.stepIndex.value++;
			}
		}

		else if($scope.stepIndex.value == 4){

			if($scope.submission.ExperiencePosi.length < 50){

				$scope.validation.ExperiencePosi = true;
			}else{

				$scope.stepIndex.value++;
			}
		}

		else if($scope.stepIndex.value == 5){

			if($scope.submission.StrongAttr.length < 50){

				$scope.validation.StrongAttr = true;

			}else{

				$scope.stepIndex.value++;
			}
		}

		else if($scope.stepIndex.value == 6){

			if($scope.submission.PastExper.length < 50){
				$scope.validation.PastExper = true;

			}else{

				$scope.stepIndex.value++;
			}
		}

		else if($scope.stepIndex.value == 7){

			if($scope.submission.LikeSeeInEvent.length < 20){

				$scope.validation.LikeSeeInEvent = true;

			}else{

				$scope.stepIndex.value++;
			}
		}

		else if($scope.stepIndex.value == 8){

			$scope.submitStatus="submitting";
			$scope.stepIndex.value++;

      $http.post('php/volunteer_engine.php', $scope.submission).
        success(function(data, status, headers, config) {

          $scope.submitStatus="success";
          localStorageService.remove('volunteerSubmission');
        }).

        error(function(data, status, headers, config) {

          $scope.submitStatus="fail";
        }
      );

      $.post( "php/postSpreadSheet/post_SpreadSheet_Volunteer.php?Name=" +  $scope.submission.Name + "&Email=" + $scope.submission.Email +
      "&Phone=" + $scope.submission.Phone + "&AvailableOnCon=" + $scope.submission.AvailableOnCon + "&Year=" + $scope.submission.Year +
      "&Campus=" + $scope.submission.Campus + "&Positions=" + $scope.submission.Positions + "&HowHearTEDxUofT=" + $scope.submission.HowHearTEDxUofT +
      "&ExperiencePosi=" + $scope.submission.ExperiencePosi + "&StrongAttr=" + $scope.submission.StrongAttr +
      "&PastExper=" + $scope.submission.PastExper + "&LikeSeeInEvent=" + $scope.submission.LikeSeeInEvent +
      "&Questions=" + $scope.submission.Questions);
		}
	};

	$scope.prevStep = function(){
		$scope.stepIndex.value--
	};
  }]);
