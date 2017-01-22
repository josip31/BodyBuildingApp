angular.module('mainModule').service('profileData', function ($http,userAuthSrvc){
    var getProfile = function () {
         return $http.get("/api/profile", {
              headers: {
                   Authorization: "Bearer "+ userAuthSrvc.getToken()
              }
         });
    };

    var editProfile= function(user){
        return $http.post("/api/profile",user
        ).then(function (response){
            console.log("API CALL EDIT"+response.data)
                return response;
            }).catch(function (response){
                console.log("Edit profile error :"+response)
            })
        }


    var uploadImage = function(img) {

        var fd = new FormData();
        var imgBlob = dataURItoBlob(img);
        fd.append('file', imgBlob);
        $http.post(
            '/api/saveProfilePicture',
            fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }
            )
            .then(function(response) {
                console.log('success', response);
            })
            .catch(function(response) {
                console.log('error', response);
            });
    }


    var  dataURItoBlob =  function(dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: mimeString
        });
    }


        return {
            getProfile : getProfile,
            editProfile: editProfile,
            uploadImage: uploadImage
        };
    });



