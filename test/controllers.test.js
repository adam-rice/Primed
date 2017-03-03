describe('homeController', function() {
  beforeEach(module('primed'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

    describe('$scope.city', function() {
      it('sets the app city being searched to what is passed to $scope.city', function() {
          var $scope = {};
          var controller = $controller('homeController', { $scope: $scope });
          $scope.city = 'Miami';
          $scope.$watch();
          expect(cityService.city).toEqual('Miami');
        });
    });
    
    describe('$scope.theme', function() {
        it('sets the app theme to what is passed into the $scope.theme ', function() {
            var $scope = {};
            var controller = $controller('homeController', { $scope: $scope });
            $scope.theme = 'party';
            $scope.$watch();
            expect(gifService.theme).toEqual('party');
        });
    });
    
     describe('$scope.submit', function() {
        it('Submit will take the user to the forecast page', function() {
            var $scope = {};
            var controller = $controller('homeController', { $scope: $scope });
            $scope.submit();
            expect($location.path).toEqual('/forecast');
        });
     });
});

/////////////////////////////////////////////////////////////////////////////////

describe('forecastController', function() {
  beforeEach(module('primed'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

    describe('default values', function() {
      it('sets the city days and theme to default values when no input is passed', function() {
          var $scope = {city: null, days: null, theme: null};
          var controller = $controller('forecastController', { $scope: $scope });
          expect($scope.city).toEqual('denver, CO');
          expect($scope.days).toEqual('3');
          expect($scope.theme).toEqual('seinfeld');
        });
    });
    
    describe('simpleTemp', function() {
        it('sets the returned temp to a rounded number', function() {
            var $scope = {};
            var controller = $controller('forecastController', { $scope: $scope });
            var ans = $scope.simpleTemp(59.9);
            expect(ans).toEqual(60);
        });
    });
    
     describe('convertToDate', function() {
        it('sets the returned date to a usable date', function() {
            var $scope = {};
            var controller = $controller('forecastController', { $scope: $scope });
            var ans = $scope.convertToDate(1485766800);
            expect(ans).toEqual('Mon Jan 30 2017 03:00:00 GMT-0600 (CST)');
        });
    });
     
});