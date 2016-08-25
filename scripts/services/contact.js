'use strict';

/**
 * @ngdoc service
 * @name problemSetApp.contact
 * @description
 * # contact
 * Factory in the problemSetApp.
 */
angular.module('problemSetApp')
  .factory('contact', function ($http) {

    return {
      get: function (paginate) {
        return $http.get('http://localhost:3000/api/contact/'+paginate);
      },
      post: function(data){
        return $http.post('http://localhost:3000/api/contact', data);
      },
      put: function(data, id){
        return $http.put('http://localhost:3000/api/contact/'+id, data);
      },
      delete: function(id){
        return $http.delete('http://localhost:3000/api/contact/'+id);
      },
      search: function(filter, keyword, paginate){
        return $http.get('http://localhost:3000/api/contact/search/'+filter+'/'+keyword+'/'+paginate);
      },
    };
  });
