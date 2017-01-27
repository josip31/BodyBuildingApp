/**
 * Created by josip on 26.1.2017..
 */
angular.module('mainModule').controller('measurementCtrl', function ($location,measurementData){
    var vm=this
    vm.msg
    vm.err;
    vm.succ;
    vm.all_meas=[]
    vm.new_meas={}
    
    measurementData.getAllMeasurement().then(function (res){
        vm.all_meas=res.data
        $location.path("/measurement")
    })
    
    vm.addNew=function(){
        measurementData.addNewMeasurement(vm.new_meas).then(function (res) {
            if(res.status==200){
                vm.clearNewForm()
                vm.succ=true;
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

    vm.deleteMeasurement=function(ind){
        measurementData.deleteMeasurement(vm.all_meas[ind]._id).then(function (res){
            vm.succ=true;
            vm.err=false;
            vm.msg="Zapis je uspješno izbrisan"
        })
    }

})