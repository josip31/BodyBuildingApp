angular.module('mainModule').service('profileData', function ($http,Upload, $timeout,userAuthSrvc){
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

    var uploadImage=function(img,user_id){
        Upload.upload({
            url: '/api/saveProfilePicture',
            headers:{email:user_id},
            method:'POST',
            data: {file: img, 'email': user_id},
            file:img,
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    }


        return {
            getProfile : getProfile,
            editProfile: editProfile,
            uploadImage: uploadImage
        };
    });



