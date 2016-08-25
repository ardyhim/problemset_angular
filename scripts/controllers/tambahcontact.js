'use strict';

/**
 * @ngdoc function
 * @name problemSetApp.controller:TambahcontactCtrl
 * @description
 * # TambahcontactCtrl
 * Controller of the problemSetApp
 */
angular.module('problemSetApp')
  .controller('tambahContact', function($scope, $mdDialog, $http, contact, toast) {

    $scope.chips = this;
    $scope.chips.readonly = false;
    $scope.chips.phone = [];
    $scope.chips.email = [];
    $scope.chips.andress = [];

    $scope.save = function(e) {
      var data = {
        title: $scope.title,
        name: $scope.name,
        email: $scope.chips.email,
        phone: $scope.chips.phone,
        andress: $scope.chips.andress,
        company: $scope.company
      };
      contact.post(data).then(function(response){
        console.log(response);
        if (response.data.success === true) {
          toast.show(response.data.message, 'success-toast');
          $mdDialog.hide(e);
        }else {
          toast.show(response.data.message, 'error-toast');
        }
      });
    };

    $scope.close = function(e) {
      $mdDialog.hide(e);
    };

  });
