(function() {
  'use strict';

  angular
    .module('ui')
    .controller('home', HomeController);

  /** @ngInject */
  function HomeController($scope, $http) {
    $http.get('/api/token').success(function(token) {
      $http({
        url : 'http://localhost:9000/api/resource',
        method : 'GET',
        headers : {
          'X-Auth-Token' : token.token
        }
      }).success(function(data) {
        $scope.greeting = data;
      });
    })
  }
})();
