//CONTROLLERS
primed.controller('homeController', ['$scope', '$location', 'cityService', 'gifService', function($scope, $location, cityService, gifService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
    
    $scope.theme = gifService.theme;
    
    $scope.$watch('theme', function() {
       gifService.theme = $scope.theme; 
    });
    
    $scope.submit = function() {
        $location.path('/forecast');
    };

}]);

primed.controller('forecastController', ['$scope', '$resource', '$routeParams', '$location', '$route', 'cityService', 'gifService', 'randomService', function($scope, $resource, $routeParams, $location, $route, cityService, gifService, randomService) {
    
    //Weather
    $scope.city = cityService.city || 'denver, CO';
    
    $scope.days = $routeParams.days || '3';
    
    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?appid=7725b4973215a5596e6c67a9eeb3bb22&units=imperial', { callback: 'JSON_CALLBACK' }, { get: { method: 'JSONP' }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });
    
    $scope.simpleTemp = function(temp) {
        return Math.floor(temp);
    };
    
    $scope.convertToDate = function(date) {
        return new Date(date * 1000);
    };
    
    //Theme
    $scope.theme = gifService.theme || 'seinfeld';
    
    $scope.searchTheme = 'http://api.giphy.com/v1/gifs/search?q=' 
        + $scope.theme 
        + '&api_key=dc6zaTOxFJmzC&limit=' 
        + $scope.days;
    
    $scope.giphyAPI = $resource($scope.searchTheme);  //removing JSONP requirement allows response
    
    $scope.themeResult = $scope.giphyAPI.get();
    
    $scope.randomTheme = function() {
        var a = [
            'birds', 'dance', 'ocean', 
            'computer', 'monster', 'star trek', 
            'drink', 'sunny in philadelphia', 
            'breaking bad', 'bill murray'
        ];
        gifService.theme = a[Math.floor(Math.random()*a.length)];
        $route.reload();
    };
    
}]);