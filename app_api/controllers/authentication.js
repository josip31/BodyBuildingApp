/**
 * Created by josip on 20.1.2017..
 */
var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.register = function(req, res) {

     if(!req.body.name || !req.body.email || !req.body.password) {
       sendJSONresponse(res, 400, {
         "message": "All fields required"
       });
       return;
     }

    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    user.save(function(err) {
        if(err){
            console.log("Error:"+err)
            res.status(502)
            res.send(err)
        }
        else{
            var token;
            token = user.generateJwt();
            res.status(200);
            res.json({
              "token" : token
            });}
    });

};

module.exports.login = function(req, res) {

     if(!req.body.email || !req.body.password) {
       sendJSONresponse(res, 400, {
         "message": "All fields required"
       });
       return;
     }

    passport.authenticate('local', function(err, user, info){
        var token;

        if (err) {
            res.status(404).json(err);
            return;
        }
        
        if(user){
            token = user.generateJwt();
            res.status(200);
            res.json({
                "token" : token
            });
        } else {
            res.status(401).json(info);
        }
    })(req, res);

};