'use strict';

/**
 * @ngdoc service
 * @name problemSetApp.auth
 * @description
 * # auth
 * Factory in the problemSetApp.
 */
angular.module('problemSetApp')
  .factory('Auth', function () {
    var user;
    return{
      setUser : function(aUser){
          user = aUser;
      },
      isLoggedIn : function(){
          return(user)? user : false;
      }
    };
  });
