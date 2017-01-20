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
        User
            .findById(req.payload._id)
            .exec(function(err, user) {
                console.log("User found:"+user+" req was:"+req.payload)
                res.status(200).json(user);
            });
    }

};
