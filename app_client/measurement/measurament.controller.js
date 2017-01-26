/**
 * Created by josip on 26.1.2017..
 */
angular.module('mainModule').controller('measurementCtrl', function (measurementData){
    var vm=this
    vm.msg=""
    vm.err;
    vm.all_meas={}
    vm.new_meas={}
    vm.addNew=function(){
        measurementData.addNewMeasurement(vm.new_meas).then(function (res) {
            if(res.status==200){
                vm.clearNewForm()
                vm.err=false;
                vm.msg="Novi zapis je uspješno zabilježen u bazu podataka"
            }
        }).catch(function(res){
            vm.err=true;
            vm.msg=res.body
        })
    }
    vm.clearNewForm=function(){
        vm.new_meas={}
    }
    
})