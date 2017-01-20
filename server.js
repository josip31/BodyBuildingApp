/**
 * Created by josip on 20.1.2017..
 */
/*

 There are some minor modifications to the default Express setup
 Each is commented and marked with [SH] to make them easy to find

 */

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');

require('./app_api/models/db');
require('./app_api/config/passport');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//ovo se mora da da app_client bude home
app.use(express.static(path.join(__dirname, 'app_client')));

//passport se mora init prije ruta inače ne radi
app.use(passport.initialize());

//dodavanje ruta
app.use('/api', require('./app_api/routes/index'));


app.use(function(req, res) {
    res.sendFile(path.join(__dirname, 'app_client', 'index.html'));
});

// 404
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({"message" : err.name + ": " + err.message});
    }
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}


app.listen(8080);
module.exports = app;
