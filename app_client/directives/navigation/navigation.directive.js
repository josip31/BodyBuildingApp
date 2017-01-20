/**
 * Created by josip on 20.1.2017..
 */
angular.module('mainModule').directive('navigation', function (){
    return {
        restrict: 'EA',
        templateUrl: 'directives/navigation/navigation.view.html',
        controller: 'navigationCtrl as navvm'
    }
});
