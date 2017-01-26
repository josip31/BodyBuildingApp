/**
 * Created by josip on 26.1.2017..
 */
var mongoose = require('mongoose');
var Measurement = mongoose.model('Measurement');


module.exports.insert=function(req, res){

    var meas = new Measurement();
    meas.email = req.body.email;
    meas.bodypart = req.body.bodypart;
    meas.measured_value = req.body.measured_value;
    meas.measured_date = req.body.measured_date;
    meas.unit = req.body.unit;

    meas.save(function(err) {
        if(err)
            console.log("Error:"+err)
        else
            res.status(200);
    })
}

module.exports.all=function(req, res){}