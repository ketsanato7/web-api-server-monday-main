
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { books } = require('googleapis/build/src/apis/books');
const { Schema } = mongoose;

const userSchema= new mongoose.Schema({
    Username:{
        type:String,
        lowercase: true 
    },
    Password:{
            type:String,
        },
        UserStatus:{
            type:Boolean
        },
        Phonenumber:{
            type:String, 
            required:[true,"Password is Required"],
       unique:true,
     },
     OTP:{type:String,
        
     }
,VerifyOTP:{
    type:Boolean
},OTPExpire:{
    type:Date
},
created_date:{
    type:Date
},
updated_date:{
    type:Date
}     
});



module.exports=mongoose.model("UserApps",userSchema);