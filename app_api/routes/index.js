/**
 * Created by josip on 20.1.2017..
 */
var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var key=require("../config/key")

var auth = jwt({
    secret: key.secret,
    userProperty: 'payload'
});

var profile = require('../controllers/profile');
var user_auth = require('../controllers/authentication');
var email_sender=require('../controllers/email.controller');

router.get('/profile', auth, profile.userProfile);
router.post('/profile',profile.editProfile); //trenutno je maknuta auth, lakse testiranje, kasnije je potreno dodati

/*
*router.post("/saveProfilePicture",profile.saveProfilePicture)
*
* radi testiranja kreirana je ta ruta, kasnije maknuti i sve ide u profile
* Ruta ne radi, potrebno dodati novi middleware
* */

router.post('/register', user_auth.register);
router.post('/login', user_auth.login);

router.post("/sendMail/",email_sender.sendMail)

module.exports = router;
