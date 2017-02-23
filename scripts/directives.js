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
//            single: '='
        }
    }
    
});