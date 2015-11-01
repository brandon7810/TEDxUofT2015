'use strict';

angular.module('tedxUofT2015App')
  .controller('MainCtrl', ["$scope", "$window", "$http", "$rootScope", function ($scope,$window,$http,$rootScope) {

	$rootScope.socialMedia = {show:true};
	$rootScope.mailingList = {show:true};

	$('#trigger-overlay').show();

	//Scroll To Top
	$window.scrollTo(0,0);

	//Close the overlay menu
  $scope.overlayMenuClick = function(){
    $('#close_overlay').click();
  };

	//mailing list
	$scope.mailingButton = "Go";
	$scope.mailingPlaceHolder = "YourEmail@Subscribe.com";
	$scope.mailingLabel = "";
	$scope.mailingMsg = "";
	$scope.mailingLeft = "0/5";
	$scope.mailingInput = "";
	$scope.steps = 0;
	$scope.mailingFocusInput = false;
	$scope.mailingBarleft = "small-12 columns";
	$scope.mailingBarRight = "small-12 columns end";

	$scope.mailingInfo = {
		email:"",
		name:"",
		year:"",
		campus:"",
		interest:"",
		involvement:""
	};

	$('#mailingFail').hide();
	$('#mailingSuccess').hide();
	$('#mailingSubmitting').hide();

  function validateEmail(email) {

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

	$scope.mailingNext = function(){

		$scope.mailingMsg = "";
		$scope.mailingFocusInput = true;

		if($scope.steps == 0){

			if($scope.mailingInput == "" || !validateEmail($scope.mailingInput) ){

				$scope.mailingMsg = "Please fill in valid email"

			}else{

				$scope.mailingBarleft = "small-2 columns" ;
				$scope.mailingBarRight = "small-10 columns";
				$scope.mailingInfo.email = $scope.mailingInput;
				$scope.mailingButton = "";
				$scope.mailingPlaceHolder = "FirstName LastName";
				$scope.mailingLeft = "1/5";
				$scope.mailingLabel = "";
				$scope.steps++;
				$scope.mailingInput = "";
			}
		}
		else if($scope.steps == 1){

			if($scope.mailingInput == ""){

				$scope.mailingMsg = "Please fill in your name";

			}else{

				$scope.mailingBarleft = "small-4 columns" ;
				$scope.mailingBarRight = "small-8 columns";
				$scope.mailingInfo.name = $scope.mailingInput;
				$scope.mailingPlaceHolder = "Year of Study";
				$scope.mailingLeft = "2/5";
				$scope.mailingLabel = "";
				$scope.steps++;
				$scope.mailingInput = "";
			}
		}
		else if($scope.steps == 2){

			if($scope.mailingInput == ""){

				$scope.mailingMsg = "Please fill in your year of study";

			}else{

				$scope.mailingBarleft = "small-6 columns" ;
				$scope.mailingBarRight = "small-6 columns";
				$scope.mailingInfo.year = $scope.mailingInput;
				$scope.mailingPlaceHolder = "College or Campus";
				$scope.mailingLeft = "3/5";
				$scope.mailingLabel = "";
				$scope.steps++;
				$scope.mailingInput = "";
			}
		}
		else if($scope.steps == 3){

			if($scope.mailingInput == ""){

				$scope.mailingMsg = "Please fill in your college/campus";
			}else{

				$scope.mailingBarleft = "small-8 columns" ;
				$scope.mailingBarRight = "small-4 columns";
				$scope.mailingInfo.campus = $scope.mailingInput;
				$scope.mailingPlaceHolder = "Area of Interest";
				$scope.mailingLeft = "4/5";
				$scope.mailingLabel = "";
				$scope.steps++;
				$scope.mailingInput = "";
			}

		}
		else if($scope.steps == 4){

			if($scope.mailingInput == ""){

				$scope.mailingMsg = "Please fill in your area of interest";

			}else{

				$scope.mailingBarleft = "small-10 columns" ;
				$scope.mailingBarRight = "small-2 columns";
				$scope.mailingInfo.interest = $scope.mailingInput;
				$scope.mailingPlaceHolder = "Interest in TEDxUofT";
				$scope.mailingLeft = "5/5";
				$scope.mailingLabel = "";
				$scope.steps++;
				$scope.mailingInput = "";
			}

		}else if($scope.steps == 5){

			if($scope.mailingInput == ""){

				$scope.mailingMsg = "Please fill in the blank";

			}else{

				$scope.mailingBarleft = "small-0 columns" ;
				$scope.mailingBarRight = "small-12 columns";
				$scope.mailingInfo.involvement = $scope.mailingInput;

				$('#mailingSystem').fadeOut(300, function() {
					  $('#mailingSubmitting').fadeIn(300);
				});

				$http.post('php/mailingListEngine.php', $scope.mailingInfo).
					success(function(data, status, headers, config) {

              $('#mailingSubmitting').fadeOut(300, function() {
                  $('#mailingSuccess').fadeIn(300);
              });
					}).

					error(function(data, status, headers, config) {

              $('#mailingSubmitting').fadeOut(300, function() {
                  $('#mailingFail').fadeIn(300);
              });
				  }
        );

				$.post( "php/postSpreadSheet/post_SpreadSheet_MailingList.php?name=" + $scope.mailingInfo.name + "&email=" + $scope.mailingInfo.email + "&year=" + $scope.mailingInfo.year + "&campus=" + $scope.mailingInfo.campus
					+ "&interest=" + $scope.mailingInfo.interest + "&involvement=" + $scope.mailingInfo.involvement );

				$scope.steps++;
			}
		}
	};
}]);

