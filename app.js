var primed = angular.module('primed', ['ngRoute', 'ngResource']);

//ROUTES
primed.config(function($routeProvider) {
    
  $routeProvider
      .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'homeController'
      })

      .when('/forecast', {
      templateUrl: 'pages/forecast.html',
      controller: 'forecastController'
      })
    
      .when('/forecast/:days', {
      templateUrl: 'pages/forecast.html',
      controller: 'forecastController'
      });
    
});

//SERVICES
primed.service('cityService', function() {
    
    this.city = "Denver";
    
});

//CONTROLLERS
primed.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });

}]);

primed.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {

    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '3';

    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?appid=7725b4973215a5596e6c67a9eeb3bb22&units=imperial', { callback: 'JSON_CALLBACK' }, { get: { method: 'JSONP' }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });
    
    $scope.simpleTemp = function(temp) {
        
        return Math.floor(temp);
        
    };
    
    $scope.convertToDate = function(date) {
        
        return new Date(date * 1000);
        
    };
    
}]);

//DIRECTIVES
primed.directive('daily', function() {
    
    return {
        restrict: 'E',
        templateUrl: 'directives/daily.html',
        replace: true,
        scope: {
            day: '=',
            round: '&',
            convertToDate: '&',
            dateFormat: '@'
        }
    }
    
});

















   