'use strict';

/**
 * @ngdoc function
 * @name problemSetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the problemSetApp
 */
angular.module('problemSetApp')
  .controller('MainCtrl', function($mdDialog, $mdMedia, $window, $location, $scope, $http, contact, toast) {
    $scope.paginate = 0;
    $scope.filter = "none";
    $scope.keyword = "";
    if (!$window.sessionStorage.username) {
      $location.path('/login');
    }

    contact.get($scope.paginate).then(function(response) {
      $scope.datas = response.data.data;
    });

    $scope.search = function(filter, keyword){
      $scope.paginate = 0;
      contact.search(filter, keyword, $scope.paginate).then(function(response){
        $scope.datas = response.data;
        console.log(response.data);
      });
    };

    $scope.edit = function(ev, data) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
      $mdDialog.show({
        controller: 'UpdatecontactCtrl',
        templateUrl: 'views/updateContact.html',
        parent: angular.element(document.body),
        locals: {
          data: data
        },
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: useFullScreen
      });
      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
    };

    $scope.delete = function(id) {
      contact.delete(id).then(function(response) {
        if (response.data.success === true) {
          toast.show(response.data.message, 'success-toast');
          contact.get().then(function(response) {
            $scope.datas = response.data.data;
          });
        } else {
          toast.show(response.data.message, 'error-toast');
        }
      });
    };

    $scope.reset = function(){
      $scope.paginate = 0;
      $scope.filter = "none";
      $scope.keyword = "";
      contact.get($scope.paginate, 'default').then(function(response) {
        $scope.datas = response.data.data;
      });
    };

    $scope.forward = function(){
      $scope.paginate += 10;
      console.log($scope.paginate);
      if ($scope.filter === "none") {
        contact.get($scope.paginate).then(function(response) {
          $scope.datas = response.data.data;
        });
      }else{
        contact.search($scope.filter, $scope.keyword, $scope.paginate).then(function(response){
          $scope.datas = response.data;
          console.log(response.data);
        });
      }
    };
    $scope.backward = function(){
      $scope.paginate -= 10;
      console.log($scope.paginate);
      if ($scope.filter === "none") {
        contact.get($scope.paginate).then(function(response) {
          $scope.datas = response.data.data;
        });
      }else{
        contact.search($scope.filter, $scope.keyword, $scope.paginate).then(function(response){
          $scope.datas = response.data;
          console.log(response.data);
        });
      }
    };


  });
