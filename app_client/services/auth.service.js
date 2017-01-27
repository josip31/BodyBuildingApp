angular.module('mainModule').service('userAuthSrvc', function($http,$window){
            var saveToken = function (token) {
                $window.localStorage['mean-token'] = token;
            };

            var getToken = function () {
                return $window.localStorage['mean-token'];
            };

            var isLoggedIn = function() {
                var token = getToken();
                var payload;

                if(token){
                    payload = token.split('.')[1];
                    payload = $window.atob(payload);
                    payload = JSON.parse(payload);

                    return payload.exp > Date.now() / 1000;
                } else {
                    return false;
                }
            };

            var currentUser = function() {
                if(isLoggedIn()){
                    var token = getToken();
                    var payload = token.split('.')[1];
                    payload = $window.atob(payload);
                    payload = JSON.parse(payload);
                    return {
                        email : payload.email,
                        name : payload.name
                    };
                }
            };

            register = function(user) {
                return $http.post('/api/register', user).then(function(response){
                    saveToken(response.data.token);
                    return response
                }).catch(function(response){
                    console.error('Register error', response.status, response.data);
                    return response;
                }
            );
            };

            login = function(user) {
                return $http.post('/api/login', user).then(function (response) {
                    if(response.status ==401){
                        console.log(401)
                    }
                    else{
                        saveToken(response.data.token);
                        return response
                    }
                }).catch(function (response) {
                    console.error('Login error', response.status);
                    return response
                });
            };

            logout = function() {
                $window.localStorage.removeItem('mean-token');
            };

            return {
                currentUser : currentUser,
                saveToken : saveToken,
                getToken : getToken,
                isLoggedIn : isLoggedIn,
                register : register,
                login : login,
                logout : logout
            };
        }
    );

