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
            var controller = $controller('homeController', { $scope: $scope, $location });
            $scope.submit();
            expect($location.path).toEqual('/forecast');
        });
     });
});