var primed = angular.module('primed', ['ngRoute', 'ngResource']);

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

















   