/**
 * Created by josip on 26.1.2017..
 */
angular.module('mainModule').service('measurementData', function ($http,userAuthSrvc){

    var addNewMeasurement= function(new_meas){
        user=userAuthSrvc.currentUser();
        new_meas.email=user.email
        console.log("Add new meas"+new_meas)
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