/**
 * Created by josip on 20.1.2017..
 */

angular.module('mainModule').controller('loginCtrl', function ($location,userAuthSrvc){
    var vm = this;
    vm.credentials = {
        email: "",
        password: ""
    };
    vm.login_error=false
    vm.onSubmit = function () {
        
        userAuthSrvc.login(vm.credentials)
                .then(function(response){
                    console.log(response.status)
                    if(response.status==401){
                        vm.login_error=true;
                    }
                    else{
                        $location.path('profile');
                    }
                }).catch(function(){
                    console.log("catch")
        });
        };
    });