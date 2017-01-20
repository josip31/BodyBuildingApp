/**
 * Created by josip on 20.1.2017..
 */
angular.module('mainModule', ['ngRoute']).run(function($rootScope, $location, userAuthSrvc){
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
        if ($location.path() === '/profile' && !userAuthSrvc.isLoggedIn()) {
            $location.path('/');
        }
    });
});