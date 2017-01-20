/**
 * Created by josip on 20.1.2017..
 */

angular.module('mainModule').controller('profileCtrl', function($location,profileData){
    var vm = this;
    vm.user = {};
    profileData.getProfile()
        .then(function(response) {
            vm.user = response.data;
        })
});
  