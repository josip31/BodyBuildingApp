/**
 * Created by josip on 20.1.2017..
 */
angular.module('mainModule').controller('registerCtrl', function($location,userAuthSrvc){
    var vm = this;
    vm.credentials = {
            name : "",
            email : "",
            password : ""
    };
    vm.onSubmit = function () {
        console.log('Registration'+vm.credentials);
        userAuthSrvc
            .register(vm.credentials)
            .then(function(){
                $location.path('profile');
            });
    };
});

