
const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

    Tel:{  type:String, 
        required:[true,"This phone number is already in use"]
   , unique:true
},
    Otp:String,
    created_date:{type:Date},
    updated_date:{type:Date}

});
 
module.exports = mongoose.model('Register',Schema);