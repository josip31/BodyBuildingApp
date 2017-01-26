/**
 * Created by josip on 20.1.2017..
 */

angular.module('mainModule').config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/home/home.view.html',
            controller: 'homeCtrl',
            controllerAs: 'vm'
        })
        .when('/register', {
            templateUrl: '/register/register.view.html',
            controller: 'registerCtrl',
            controllerAs: 'vm'
        })
        .when('/login', {
            templateUrl: '/login/login.view.html',
            controller: 'loginCtrl',
            controllerAs: 'vm'
        })
        .when('/profile', {
            templateUrl: '/profile/profile.view.html',
            controller: 'profileCtrl',
            controllerAs: 'vm'
        })
        .when('/forgot-password', {
            templateUrl: '/forgot-password/forgot.password.view.html',
            controller: 'forgotPassCtrl',
            controllerAs: 'vm'
        })
        .when('/measurement',{
            templateUrl:'/measurement/measurement.view.html',
            controller: 'measurementCtrl',
            controllerAs: 'vm'
        })
        .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});