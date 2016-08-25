'use strict';

/**
 * @ngdoc overview
 * @name problemSetApp
 * @description
 * # problemSetApp
 *
 * Main module of the application.
 */
angular
  .module('problemSetApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($window, $location, Auth){
    if ($window.sessionStorage.token) {
      Auth.setUser($window.sessionStorage.username);
    }
  });
