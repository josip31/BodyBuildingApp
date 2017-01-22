/**
 * Created by josip on 20.1.2017..
 */

angular.module('mainModule').controller('profileCtrl', function($location,profileData){
    var vm = this;
    vm.user = {};
    vm.error=false;
    vm.profileImg;
    
    
    profileData.getProfile()
        .then(function(response) {
            console.log("GET PROFILE: "+response.data)
            vm.user = response.data;
        })

    vm.editProfile= function(){
        profileData.editProfile(vm.user).then(function (response){
            if(response.status == 200){
                $location.path("/profile")
            }
            else{
                vm.error=true;
            }
        })
    }


    vm.uploadImage = function(){
        profileData.uploadImage(vm.profileImg)
    }









});
  