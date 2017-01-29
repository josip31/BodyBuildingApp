/**
 * Created by josip on 20.1.2017..
 */

angular.module('mainModule').controller('profileCtrl',function($location,$route,profileData,commonSrvc){
    var vm = this;
    vm.user = {};
    vm.error=false;

    vm.picFile
    
    profileData.getProfile()
        .then(function(response) {
            console.log("GET PROFILE: "+response.data)
            vm.user = response.data;
            vm.user.dateofbirth=new Date(vm.user.dateofbirth)
            if(vm.user.profile_img)
                vm.test=commonSrvc.base64ArrayBuffer(vm.user.profile_img.data.data)
           
        })

    vm.editProfile= function(){
        vm.user.profile_img=null
        profileData.editProfile(vm.user).then(function (response){
            if(response.status == 200){
                $route.reload();
            }
            else{
                vm.error=true;
            }
        })
    }


    vm.uploadImage = function(){
        if(vm.picFile){
        profileData.uploadImage(vm.picFile,vm.user.email)
        $route.reload();
        }
    }

    
});
  