const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registeredUsersSchema = new Schema({
    username:{
        type:String,
        required: true 
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('RegisteredUser', registeredUsersSchema)