const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    customer_name:{
        type:String,
        required: true 
    },
    address:{
        type:String,
        required:true
    },
    contactNo1:{
        type:Int,
        required:true
    },
    contactNo2:{
        type:Int,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    eventType:{
        type:String,
        required:true
    },
    eventName:{
        type:String,
        required:true
    },
    eventLocation:{
        type:String,
        required:true
    },
    eventDate:{
        type:String,
        required:true
    },
    startTime:{
        type:String,
        required:true
    },
    duration:{
        type:Int,
        required:true
    },
    guestCount:{
        type:Int,
        required:true
    },
    photographer:{
        type:Int
    },
    specialRequest:{
        type:String
    }
})

module.exports = mongoose.model('Reservation', ReservationSchema)