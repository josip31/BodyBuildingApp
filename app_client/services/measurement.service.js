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
            console.log("Edit meas error :"+response)
        })
    }

    var getAllMeasurement =function(){
        user=userAuthSrvc.currentUser();
        console.log("GET MES "+user.email)
        return $http.get("/api/getMeasurements", {
            headers: {
                email:user.email
            }
        });
    }

    var deleteMeasurement=function(meas_id){
        console.log("Delete meas: "+meas_id)
        return $http.post("/api/deleteMeasurament",{meas_id:meas_id})
            .then(function(res){
                console.log("API CALL DELETE MEAS"+res.data)
                return res;
        }).catch(function (res) {
                console.log("Delete meas error :"+res)
            })
    }

    return {
        addNewMeasurement:addNewMeasurement,
        getAllMeasurement:getAllMeasurement,
        deleteMeasurement:deleteMeasurement
    }
})