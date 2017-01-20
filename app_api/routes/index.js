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

router.get('/profile', auth, profile.userProfile);


router.post('/register', user_auth.register);
router.post('/login', user_auth.login);

module.exports = router;
