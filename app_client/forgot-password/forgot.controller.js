/**
 * Created by josip on 22.1.2017..
 */
angular.module("mainModule").controller("forgotPassCtrl",function(emailSrvc){
    var vm = this;
    vm.email_address;
    vm.sendMail =function(){
            emailSrvc.sendMail({
                to:vm.email_address,
                subject:"PASSWORD FORGOT",
                text:"Not implemented"
            }).then(function(response){
                
            })


    }
})