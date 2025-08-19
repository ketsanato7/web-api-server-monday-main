
const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    Email:{     type:String,
        required:[true,"Email is Required"],
        unique:true,
        lowercase: true ,},
    OTP:{type:String},
    
    created_date:{type:Date},
    updated_date:{type:Date}
});
module.exports = mongoose.model('OTPEmail',Schema);