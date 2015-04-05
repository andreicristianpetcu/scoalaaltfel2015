'use strict';

/**
 * @ngdoc overview
 * @name scoalaaltfel2015App
 * @description
 * # scoalaaltfel2015App
 *
 * Main module of the application.
 */
angular
  .module('scoalaaltfel2015App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'oitozero.ngSweetAlert'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/elevi', {
        templateUrl: 'views/elevi.html',
        controller: 'EleviCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  var app = angular.module('scoalaaltfel2015App');
  app.run(function ($rootScope, SweetAlert) {
      $rootScope.$on('$routeChangeSuccess', function () {
          $rootScope.test = 'Global';
          $rootScope.SweetAlert = SweetAlert;
          $rootScope.sweetAlert = SweetAlert;
          $rootScope.elevi = [];
          $rootScope.adaugaElev = function(){
            swal({
              title: "An input!",
              text: "Write something interesting:",
              type: "input",
              showCancelButton: true,
              closeOnConfirm: false,
              animation: "slide-from-top"
            },
            function(inputValue){
              if (inputValue === false) return false;

              if (inputValue === "") {
                swal.showInputError("You need to write something!");
                return false
              }

              $rootScope.elevi.push(inputValue);
              swal("Nice!", "You wrote: " + inputValue, "success");
              $rootScope.$apply();
            });
          }
          $rootScope.salut2 = function(){
            swal("Good job!", "You clicked the button!", "success");
          }

          $rootScope.salut = function(){
            swal({
              title: "Are you sure?",
              text: "You will not be able to recover this imaginary file!",
              type: "warning",
              showCancelButton: true,
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "Yes, delete it!",
              closeOnConfirm: false
            },
            function(){
              swal("Deleted!", "Your imaginary file has been deleted.", "success");
            });
          }
      });
  });
