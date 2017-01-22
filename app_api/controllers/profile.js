/**
 * Created by josip on 20.1.2017..
 */
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.userProfile = function(req, res) {

    if (!req.payload._id) {
        res.status(401).json({
            "message" : "UnauthorizedError: private profile"
        });
    } else {
        console.log("Finding user!!\n")
        User
            .findById(req.payload._id)
            .exec(function(err, user) {
                console.log("User found:"+user+" req was:"+req.payload)
                res.status(200).json(user);
            });
    }

};

module.exports.editProfile=function(req,res){
    console.log("Profile is being editted:"+req.body.email)
    var query={email:req.body.email}

    var new_user={}
    new_user.name=req.body.name;
    new_user.placeofbirth=req.body.placeofbirth;
    new_user.dateofbirth=req.body.dateofbirth;
    new_user.profession=req.body.profession;
    new_user.sex=req.body.sex;
    new_user.edutaction=req.body.education;
    console.log("PRE UPDATE DATA: "+new_user.placeofbirth+","+new_user.dateofbirth)

    User.findOneAndUpdate(query,new_user,{upsert:true},function(err,user){
        if(err){
            console.log("error: "+err)
            res.status(500)
        }
        else{
            console.log("EDIT SUCCESS: "+user)
            res.status(200).json(user)
        }
    })
}

module.exports.saveProfilePicture=function(req,res){
    console.log("hallo!")
    console.log("file:")
    


}