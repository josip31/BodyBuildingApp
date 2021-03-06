/**
 * Created by josip on 20.1.2017..
 */
var mongoose = require( 'mongoose' );
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var key=require("../config/key");

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    hash:{ type:String},
    salt: {type:String},
    name: {
        type: String,
        required: true,
        unique: false //bio true , ovo je ime a ne username
    },
    dateofbirth:{
        type: Date
    },
    placeofbirth:{
        type:String
    },
    sex: {
        type: String
    },
    education:{
        type:String
    },
    profession:{
        type:String
    },
    profile_img:{
        data:Buffer,
        contentType:String
    }

});

userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000),
    }, key.secret);
};

mongoose.model('User', userSchema);
