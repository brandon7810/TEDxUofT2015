'use strict';

/**
 * @ngdoc function
 * @name tedxUofT2015App.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the tedxUofT2015App
 */
angular.module('tedxUofT2015App')
  .controller('ApplicationCtrl', ["$scope", "$window", "$http", "localStorageService", "$rootScope",
    function ($scope,$window,$http,localStorageService, $rootScope) {

      ga('send', 'pageview', '/volunteer');

      $rootScope.socialMedia.show = false;
      $rootScope.mailingList.show = false;
      $scope.userFocusInput = {value : false};

      $('#trigger-overlay').hide();

      //Scroll To Top
      $window.scrollTo(0,0);

      var submissionInStore = localStorageService.get('applicationSubmission');

      $scope.submission = submissionInStore || {
        Name:"",
        Email:"",
        Phone:"",
        Status:"",
        Occupation:"",
        Program:"",
        Year:"",
        Campus:"",
        Dietary:"",
        FinalQ:""
      };

      $scope.$watch('submission', function () {
        localStorageService.set('applicationSubmission', $scope.submission);
      }, true);

      $scope.userInput = {s:""};

      $scope.onEnter = function(keyEvent) {
        if (keyEvent.which === 13)
          $scope.nextStep();
      };

      $scope.setStepIndex = function(index){
        if($scope.stepIndex.value != 9){
          $scope.stepIndex.value = index;
        }
      };

      $scope.stepIndex = {value: 0};

      $scope.nextStep = function(){
        $window.scrollTo(0,20);
        $scope.userFocusInput.value = true;

        if($scope.stepIndex.value == 0){
          $scope.userInput.s = $scope.submission.Name;
          $scope.stepIndex.value++;
          $scope.QuestionLeft = "0/8";
          $scope.Question = "Full Name";
          $scope.tip = "Or press Enter"
        }
        else if($scope.stepIndex.value == 1){
          if($scope.userInput.s == ""){
            $scope.ErrorMsg = "Please Enter";
          }
          else{
            $scope.submission.Name = $scope.userInput.s;
            $scope.userInput.s = $scope.submission.Email;
            $scope.ErrorMsg = "";
            $scope.stepIndex.value++;
            $scope.QuestionLeft = "1/8";
            $scope.Question = "Email";
            $scope.tip = "(We will send you the link through your email)";
          }
        }
        else if($scope.stepIndex.value == 2){
          if($scope.userInput.s == ""){
            $scope.ErrorMsg = "Please Enter";
          }else{
            $scope.submission.Email = $scope.userInput.s;
            $scope.userInput.s =  $scope.submission.Phone;
            $scope.ErrorMsg = "";
            $scope.stepIndex.value++;
            $scope.QuestionLeft = "2/8";
            $scope.Question = "Phone";
            $scope.tip = "";
          }
        }
        else if($scope.stepIndex.value == 3){
          if($scope.userInput.s == ""){
            $scope.ErrorMsg = "Please Enter";
          }
          else{
            $scope.submission.Phone = $scope.userInput.s;
            $scope.userInput.s = "";
            $scope.ErrorMsg = "";
            $scope.stepIndex.value++;
            $scope.QuestionLeft = "3/8";
            $scope.Question = "Are you a";
            $scope.tip = "";
          }
        }
        else if($scope.stepIndex.value == 4){
          if($scope.submission.Status == ""){
            $scope.ErrorMsg = "Please Choose";
          }else{
            $scope.ErrorMsg = "";
            $scope.stepIndex.value++;
            $scope.tip = "";
            switch($scope.submission.Status){
              case 'UnderGraduate':
                $scope.Question = "Program Of Study";
                $scope.userInput.s = $scope.submission.Program;
                $scope.QuestionLeft = "4/8";
                $scope.route = "1";
                break;
              case 'Graduate':
                $scope.Question = "Program Of Study";
                $scope.userInput.s = $scope.submission.Program;
                $scope.QuestionLeft = "4/8";
                $scope.route = "1";
                break;
              case 'Alumnus':
                $scope.Question = "Occupation";
                $scope.userInput.s = $scope.submission.Occupation;
                $scope.QuestionLeft = "4/6";
                $scope.route = "2";
                break;
              case 'Other':
                $scope.Question = "Occupation";
                $scope.userInput.s = $scope.submission.Occupation;
                $scope.QuestionLeft = "4/6";
                $scope.route = "2";
                break;
            }
          }
        }
        else if($scope.stepIndex.value == 5){
          if($scope.userInput.s == ""){
            $scope.ErrorMsg = "Please Enter";
          }else{
            $scope.ErrorMsg = "";
            $scope.stepIndex.value++;
            if($scope.route == "1"){
              $scope.submission.Program = $scope.userInput.s;
              $scope.userInput.s = $scope.submission.Year;
              $scope.QuestionLeft = "5/8";
              $scope.Question = "Year of Study";
              $scope.tip = "";
            }else{
              $scope.submission.Occupation = $scope.userInput.s;
              $scope.QuestionLeft = "5/6";
              $scope.Question = "Dietary Restrictions";
              $scope.tip = "";
            }

          }
        }
        else if($scope.stepIndex.value == 6 && $scope.route == "1"){
          if($scope.userInput.s == ""){
            $scope.ErrorMsg = "Please Enter";
          }else{
            $scope.submission.Year = $scope.userInput.s;
            $scope.userInput.s = $scope.submission.Campus;
            $scope.ErrorMsg = "";
            $scope.stepIndex.value++;
            $scope.QuestionLeft = "6/8";
            $scope.Question = "Campus";
            $scope.tip = "";
          }
        }
        else if($scope.stepIndex.value == 7 && $scope.route == "1"){
          if($scope.userInput.s == ""){
            $scope.ErrorMsg = "Please Enter";
          }else{
            $scope.submission.Campus = $scope.userInput.s;
            $scope.userInput.s = "";
            $scope.ErrorMsg = "";
            $scope.stepIndex.value++;
            $scope.QuestionLeft = "7/8";
            $scope.Question = "Dietary Restrictions";
            $scope.tip = "";
          }
        }

        else if( ($scope.stepIndex.value == 6 && $scope.route == "2") || ($scope.stepIndex.value == 8 && $scope.route == "1")  ){
          if($scope.submission.Dietary == ""){
            $scope.ErrorMsg = "Please Enter";
          }else{
            $scope.almostDone = true;
            $scope.ErrorMsg = "";
            $scope.stepIndex.value++;
            if($scope.route == "2"){
              $scope.QuestionLeft = "6/6";
            }else{
              $scope.QuestionLeft = "8/8";
            }

            $scope.Question = "Why and how do you wish to be engaged in the TEDxUofT community?";
            $scope.tip = "";
          }
        }

        else if(($scope.stepIndex.value == 7 && $scope.route == "2") || ($scope.stepIndex.value == 9 && $scope.route == "1") ){
          if($scope.submission.FinalQ == ""){
            $scope.ErrorMsg = "Please Enter";
          }else{
            $scope.done = true;
            $scope.submitStatus="submitting";
            $scope.stepIndex.value++;
            $http.post('php/application_engine.php', $scope.submission).
              success(function(data, status, headers, config) {
                $scope.submitStatus="success";
                localStorageService.remove('applicationSubmission');
              }).
              error(function(data, status, headers, config) {
                $scope.submitStatus="fail";
              });
          }
        }
      };

      $scope.prevStep = function(){
        $scope.stepIndex.value--;
        switch($scope.stepIndex.value){
          case 1:
            $scope.userInput.s = $scope.submission.Name;
            $scope.QuestionLeft = "0/8";
            $scope.Question = "Full Name";
            break;
          case 2:
            $scope.userInput.s = $scope.submission.Email;
            $scope.QuestionLeft = "1/8";
            $scope.Question = "Email";
            break;
          case 3:
            $scope.userInput.s = $scope.submission.Phone;
            $scope.QuestionLeft = "2/8";
            $scope.Question = "Phone";
            break;
          case 4:
            $scope.userInput.s = "";
            $scope.QuestionLeft = "3/8";
            $scope.Question = "Are you a";
            break;
        };

        if($scope.route == "1"){
          switch($scope.stepIndex.value){
            case 5:
              $scope.userInput.s = $scope.submission.Program;
              $scope.Question = "Program of Study";
              $scope.QuestionLeft = "4/8";
              break;
            case 6:
              $scope.userInput.s = $scope.submission.Year;
              $scope.Question = "Year of Study";
              $scope.QuestionLeft = "5/8";
              break;
            case 7:
              $scope.userInput.s = $scope.submission.Campus;
              $scope.Question = "Campus";
              $scope.QuestionLeft = "6/8";
              break;
            case 8:
              $scope.Question = "Dietary Restrictions";
              $scope.QuestionLeft = "7/8";
              $scope.almostDone = false;
              break;

          }
        }else{
          switch($scope.stepIndex.value){
            case 5:
              $scope.userInput.s = $scope.submission.Occupation;
              $scope.Question = "Occupation";
              $scope.QuestionLeft = "4/6";
              break;
            case 6:
              $scope.Question = "Dietary Restrictions";
              $scope.QuestionLeft = "5/6";
              $scope.almostDone = false;
              break;
          }
        }
      };

    }]);
