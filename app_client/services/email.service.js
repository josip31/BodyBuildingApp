/**
 * Created by josip on 22.1.2017..
 */
angular.module('mainModule').service('emailSrvc', function($http){

    var sendMail = function(data){
        return $http.post('/api/sendMail', data).then(function(response){
            console.log("mail send")
            return response
        }).catch(function(response){
                console.error('Sending error: ', response.status, response.data);
                return response
            }
        );
    };


    return {
        sendMail:sendMail
    };
})