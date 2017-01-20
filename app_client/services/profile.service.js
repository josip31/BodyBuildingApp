angular
    .module('mainModule')
    .service('profileData', function ($http,userAuthSrvc){
        var getProfile = function () {
            return $http.get('/api/profile', {
                headers: {
                    Authorization: 'Bearer '+ userAuthSrvc.getToken()
                }
            });
        };

        return {
            getProfile : getProfile
        };
    });



