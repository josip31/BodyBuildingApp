/**
 * Created by josip on 26.1.2017..
 */
angular.module('mainModule').controller('measurementCtrl', function (measurementData){
    var vm=this
    vm.all_meas={}

    vm.addNew=function(){
        measurementData.addNewMeasurement(vm.new_meas)
    }
    
})