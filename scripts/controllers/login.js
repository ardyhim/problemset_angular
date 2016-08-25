'use strict';

/**
 * @ngdoc function
 * @name problemSetApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the problemSetApp
 */
angular.module('problemSetApp')
  .controller('LoginCtrl', function ($scope, $window, $http, $location, Auth) {
    $scope.submit = function(){
      console.log('login');
      var data = {
        username: $scope.username,
        password: $scope.password
      };
      $http.post('http://localhost:3000/api/login', data).then(function(response){
        console.log(response);
        if (response.data.success === true) {
          $window.sessionStorage.token = response.data.token;
          $window.sessionStorage.username = $scope.username;
          Auth.setUser($scope.username);
          $location.path('/main');
        }
      });
    };
  });
