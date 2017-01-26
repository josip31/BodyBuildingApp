/**
 * Created by josip on 20.1.2017..
 */

angular.module('mainModule').controller('profileCtrl',function($location,profileData,commonSrvc){
    var vm = this;
    vm.user = {};
    vm.error=false;

    vm.picFile

    vm.fileReaderSupported = window.FileReader !== null;
    
    profileData.getProfile()
        .then(function(response) {
            console.log("GET PROFILE: "+response.data)
            vm.user = response.data;
            vm.user.dateofbirth=new Date(vm.user.dateofbirth)
            vm.test=commonSrvc.base64ArrayBuffer(vm.user.profile_img.data.data)
           
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
        profileData.uploadImage(vm.picFile,vm.user.email)
    }

    
});
  