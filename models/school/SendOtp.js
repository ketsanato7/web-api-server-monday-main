
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');

const { Schema } = mongoose;

const userSchema= new mongoose.Schema({
    number:{
        type:String,
        required:true

    } ,
    created_date:{
    type:Date
} 
});
userSchema.method.generateJWT=function(){
    const token = jwt.sign({
        _id:this._id,
        nuber:this.number}
        ,process.env.JWT_SECRET,{expiresIn:"7d"}
    )
}
module.exports=mongoose.model("UserOTP",userSchema);
