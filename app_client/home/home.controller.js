/**
 * Created by josip on 20.1.2017..
 */
angular.module('mainModule').controller('homeCtrl', function($location,userAuthSrvc){
    if (userAuthSrvc.currentUser()){
        $location.path("/profile")
    }
});
