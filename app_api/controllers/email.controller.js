/**
 * Created by josip on 22.1.2017..
 */
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var email_client = require('../config/email');

/*

BITNO

Antivirus mora biti iskljucen inace neda
Problem s TLS

 */

module.exports.sendMail = function (req,res){
    console.log("krecem s mejlom")
    var transporter = nodemailer.createTransport(smtpTransport({
        service: 'Gmail',
        auth: {
            user: email_client.email_username,
            pass: email_client.email_password
        }
    }));
    
    var mailOptions = {
        from: email_client.email_username,
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text

    };
    console.log("saljem  mejlom")
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json('error');
        }else{
            console.log('Message sent: ' + info.response);
            res.json( info.response);
        };
    });
    transporter.close();
}