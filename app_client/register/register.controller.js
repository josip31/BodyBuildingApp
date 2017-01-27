/**
 * Created by josip on 20.1.2017..
 */
angular.module('mainModule').controller('registerCtrl', function($location,userAuthSrvc){
    var vm = this;
    vm.err
    vm.msg=""
    vm.credentials = {
            name : "",
            email : "",
            password : ""
    };
    vm.onSubmit = function () {
        console.log('Registration'+vm.credentials);
        if(vm.credentials.password !== vm.password_check){
            vm.err=true;
            vm.msg="Lozinke se ne podudaraju"
        }
        else{
            userAuthSrvc
                .register(vm.credentials)
                .then(function(res){
                    if(res.status==502){
                        vm.err=true;
                        vm.msg="Korisnik vec postoji"
                    }
                    else{
                        console.log("new route")
                        $location.path('profile')
                    };
                }).catch(function (res){
                if(res.status==502){
                    vm.err=true;
                    vm.msg="Korisnik vec postoji"
                }
            });
            };
    }
});

