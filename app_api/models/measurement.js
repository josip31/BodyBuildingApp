/**
 * Created by josip on 26.1.2017..
 */
var mongoose = require( 'mongoose' );

var measurementSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    bodypart:{
        type:String,
        required: true
    },
    measured_value:{
        type:Number,
        required: true
    },
    unit:{
        type:String,
        required:true
    },
    measured_date:{
        type:Date,
        required:true
    }
})

mongoose.model('Measurement', measurementSchema);