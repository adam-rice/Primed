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

//SERVICE
primed.service('cityService', function() {
    
    this.city = "Denver, CO";
    
});

//CONTROLLERS
primed.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });

}]);

primed.controller('forecastController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService) {

    $scope.city = cityService.city;
    
}]);
   