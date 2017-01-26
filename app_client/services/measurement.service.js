/**
 * Created by josip on 26.1.2017..
 */
angular.module('mainModule').service('measurementData', function ($http){

    var addNewMeasurement= function(new_meas){
        return $http.post("/api/newMeasurament",new_meas
        ).then(function (response){
            console.log("API CALL NEW MEAS"+response.data)
            return response;
        }).catch(function (response){
            console.log("Edit profile error :"+response)
        })
    }
    
    return {
        addNewMeasurement:addNewMeasurement
    }
})