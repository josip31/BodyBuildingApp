/**
 * Created by josip on 20.1.2017..
 */
angular.module('mainModule').controller('navigationCtrl', function ($location,userAuthSrvc){
    var vm = this;
    vm.isLoggedIn = userAuthSrvc.isLoggedIn();
    vm.currentUser = userAuthSrvc.currentUser();
    vm.logout=function(){
        console.log("logout")
        vm.currentUser={}
        userAuthSrvc.logout();
        $location.path("/")
    }
});




