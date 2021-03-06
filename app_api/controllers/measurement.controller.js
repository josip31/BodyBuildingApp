/**
 * Created by josip on 26.1.2017..
 */
var mongoose = require('mongoose');
var Measurement = mongoose.model('Measurement');


module.exports.insert=function(req, res){
    console.log("NEW MEAS")
    var meas = new Measurement();
    meas.email = req.body.email;
    meas.bodypart = req.body.bodypart;
    meas.measured_value = req.body.measured_value;
    meas.measured_date = req.body.measured_date;
    meas.unit = req.body.unit;
    console.log("ADD NEW MEAS FOR USER:"+meas.email)
    meas.save(function(err) {
        if(err) {
            console.log("Error:"+err)
            res.status(500)
            res.send(err)
        }
        else{
            res.status(200);
            res.send("OK");
        }
    })
}

module.exports.measurements=function(req, res){
    var query={email:req.headers.email}
    console.log("Find measurement for user:"+req.headers.email+"\n\n")
    Measurement.find(query)
        .sort({measured_date:1}).exec(function(err,mes){
            if(err !=null){
                console.log(err)
                res.status(400)
                res.send(err)
            }
            else{
                res.status(200)
                res.send(mes)
            }
    })
}

module.exports.clearmeasurement=function(req,res){
    var query={_id:req.body.meas_id}
    console.log("Delete measurement for user:"+query._id)
    Measurement.findByIdAndRemove(query._id,function(err,mes){
        if(err){
            res.status(500)
            res.send(err)
        }
        else{
            res.status(200)
            res.send()
        }
    })

}