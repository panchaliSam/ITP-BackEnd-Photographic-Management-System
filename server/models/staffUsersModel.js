const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const staffUsersSchema = new Schema({
    empName:{
        type:String,
        required: true 
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('StaffUser', staffUsersSchema)