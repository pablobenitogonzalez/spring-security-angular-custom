(function() {
  'use strict';

  angular
    .module('ui')
    .controller('home', MainController);

  /** @ngInject */
  function MainController($scope, $http) {
    $http.get('api/resource/').success(function(data) {
      $scope.greeting = data;
    });
  }
})();
