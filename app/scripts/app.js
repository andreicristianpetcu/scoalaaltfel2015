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
      });
  });
