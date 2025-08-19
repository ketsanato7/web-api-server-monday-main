
const Model = require("../models/SendOTPEmail");
const otp = require('otp-verify');
const bcrypt = require('bcryptjs');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "ketsanamonday@gmail.com",
        //for gmail, create an app password and use it
        pass: "foejlmjjdtycfsdp",    }
  });
  
let otpLength = 5;
const otpGenerator = require('otp-generator')
const otpCahe={};
module.exports.sendotpmail=async (req,res,next)=>{
const form = req.body;

const a1 =otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });

console.log(a1)
const mailOptions = {
    from: 'ketsanamonday@gmail.com',
    to: form.Email,
    subject: 'OTP from Monday Teach',
    text: `This is your OTP:${a1}`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  const salt =await bcrypt.genSalt();
    password =await bcrypt.hash(a1, salt);

  res.cookie('OTPEmail',password,{maxAge:30000,httpOnly:true});
  res.send({message:"Success"})
  return

    console.log(salt);
    console.log(password);
    const p1=password;

const auth = await bcrypt.compare(p1,password);
console.log(p1);
console.log(auth);
    
const data = {
    
     Email:form.Email,
     OTP:a1,
    created_date:new Date()
}

Model.create(data,err=>{

    if(!err){
        console.log("Save");
        res.json({
            status:true,
            message:"Saved"


        })
    }else{
        console.log("error ");

        res.json({
            status:false,
            message:err


        })
    }
})
}
module.exports.verifyOTP=async (req,res,next)=>{
   
        const form=req.body;
        console.log(form)

if(otpCahe[form.email] === form.OTP.trim()){
    delete otpCahe[form.Email];
    return res.status(200).json({message:"OPT Verified suss"});


}else {

    return res.status(400).json({message:"Invalid OTP"});
}

    }


module.exports.read=async (req,res,next)=>{
    Model.find().exec((err,data)=>{
    if(!err){

        res.json({
            status:true, 
            message:"selete all data ",
        data:data
    })
    }else{


        console.log("error");
        res.json({
            status:false,
        message:err
    })
    }
  });
        
    }

    module.exports.update=async (req,res,next)=>{
        const form = req.body;
        const data = {
            CountryCode:form.CountryCode,
            CountryName:form.CountryName,
            updated_date:new Date()

        }        
        console.log(form);
        Model.findByIdAndUpdate(form._id,data,{useFindAndModify:false}).exec((err,data)=>{

            if(!err){
        console.log("Updatwe Sucess  ");

                res.json({
                    status:true,
                message:"Update Sucess !",
                data:data
                
                })
      
            }else{
                console.log("error");

          res.json({
                    status:false,
                message:err})


            }
        })



    }


    
    module.exports.delete=async (req,res,next)=>{

        const form = req.body; 
   
        
        Model.findByIdAndDelete(form._id,{useFindAndModify:false}).exec((err)=>{

            if(!err){
        console.log("Delete Sucess  ");

                res.json({
                    status:true,
                message:"Delete Sucess !",
           
                })
      
            }else{
                console.log(" Delete error");

          res.json({
                    status:false,
                message:err})


            }
        })



    }