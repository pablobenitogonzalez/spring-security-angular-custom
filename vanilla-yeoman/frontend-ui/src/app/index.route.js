(function() {
  'use strict';

  angular
    .module('ui')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider.when('/', {
      templateUrl : 'app/home/home.html',
      controller : 'home'
    }).when('/login', {
      templateUrl : 'app/navigation/login.html',
      controller : 'navigation'
    }).otherwise('/');

  }

})();
