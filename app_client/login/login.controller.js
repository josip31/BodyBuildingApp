/**
 * Created by josip on 20.1.2017..
 */

angular.module('mainModule').controller('loginCtrl', function ($location,userAuthSrvc){
    var vm = this;
    vm.credentials = {
        email: "",
        password: ""
    };
    vm.onSubmit = function () {
        userAuthSrvc.login(vm.credentials)
                .then(function(){
                    $location.path('profile');
                });
        };
    });