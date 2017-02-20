/*jshint esversion: 6 */

var primed = angular.module('primed', ['ngRoute', 'ngResource']);

primed.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'homeController'
  })

  .when('/forecast', {
    templateUrl: 'pages/forecast.html',
    controller: 'forecastController'
  });
});

primed.controller('homeController', ['$scope', function($scope) {
    
    $scope.name = 'John';

}]);

primed.controller('forecastController', ['$scope', function($scope) {

    $scope.name = 'John';
    
}]);
