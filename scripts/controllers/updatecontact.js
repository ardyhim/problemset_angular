'use strict';

/**
 * @ngdoc function
 * @name problemSetApp.controller:UpdatecontactCtrl
 * @description
 * # UpdatecontactCtrl
 * Controller of the problemSetApp
 */
angular.module('problemSetApp')
  .controller('UpdatecontactCtrl', function ($scope, $mdDialog, toast, contact, data) {
    $scope.data = data;
    $scope.title = data.title;
    $scope.name = data.name;
    $scope.company = data.company;
    $scope.chips = this;
    $scope.chips.readonly = false;
    $scope.chips.phone = data.phone;
    $scope.chips.email = data.email;
    $scope.chips.andress = data.andress;

    $scope.save = function(e, id) {
      var data = {
        title: $scope.title,
        name: $scope.name,
        email: $scope.chips.email,
        phone: $scope.chips.phone,
        andress: $scope.chips.andress,
        company: $scope.company
      };
      contact.put(data, id).then(function(response){
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
