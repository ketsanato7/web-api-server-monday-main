const jwt = require('jsonwebtoken');
const maxAge = 60000;
const bcrypt = require('bcryptjs');
require("dotenv").config();
const fs = require('fs');
const date = require('date-and-time') 
const userModels = require("../models/User");
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const otpGenerator = require('otp-generator');
const { messaging } = require('firebase-admin');

const twilio = require("twilio"); // Or, for ESM: import twilio from "twilio";

const client = twilio(accountSid, authToken);



    module.exports.SendOTPByTwilio=async (req,res,next)=>{
        const form = req.body;
     const Tel=form.Tel;
  
     const user = await userModels.findOne({
        Tel:Tel
    });                
       console.log(user)   
if(user){

    console.log("Have ")   

return res.json({
  status:false,
  message:"Have",
})
}
        
    const data = {
      Tel: form.Tel,
      created_date: new Date(),

  }
await userModels.create(data, err => {

        if (!err) {


            console.log("Save");
            return
            res.json({
                status: true,
                message: "Saved"

            })

        } else {

            console.log("error ");

            res.json({
                status: false,
                message:err


            })
        }
    })
res.cookie('otp',`${token}`,{maxAge:30});
res.json({
    status:true,
    message:"Saved",
    data:token
})
        return
client.messages
    .create({
        body: `${otp}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: form.Mobile,
    })
    .then(message => console.log(message.sid));
      console.log(message.body);
    createMessage();
    }


            module.exports.test=async (req,res,next)=>{
                try {
                  
  // Check if the mobile number exists in the OTP store
  if (otpStore.hasOwnProperty(mobileNumber)) {
    // Get the stored OTP and its expiration time
    const { storedOTP, expirationTime } = otpStore[mobileNumber];

    // Verify the OTP and check if it's not expired
    if (storedOTP === otp && Date.now() < expirationTime) {
      // OTP verification successful
      res.json({ success: true, message: 'OTP verification successful!' });
    } else {
      // Invalid OTP or expired OTP
      res.status(400).json({ success: false, message: 'Invalid OTP.' });
    }
  } else {
    // Mobile number not found or OTP expired
    res.status(400).json({ success: false, message: 'Mobile number not found or OTP expired.' });
  }
                  } catch (error) {
                    console.error('Error sending OTP:', error);
                    res.status(500).json({ success: false, message: 'Failed to send OTP.' });
                  }
    }
module.exports.SendOTP=async (req,res,next)=>{

const form =req.body;



const result =await userModels.findOne({Phonenumber:form.Phonenumber});
console.log(result)

if(result){
  console.log("No");
  res.json({
    message: "This is have"

})
return
}else{
 const otp = await otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
 console.log("result:"+otp);
 const salt = await bcrypt.genSalt();
   const  otpPassword = await bcrypt.hash(otp, salt);


   const now  =  new Date(); 
  
   const value = date.addMinutes(now,1);

    const data = {
      Username:"",
      Password:"",
      UserStatus:false,
      OTP:otpPassword,
      Phonenumber:form.Phonenumber,
      VerifyOTP:false,
      OTPExpire: value,
created_date:Date()
    }
    const accountSid = 'ACdeafd53dc46d1c9084b480e58e863ba1';
    const authToken = '101e4aee296ff593b6d7e5ab832c519a';
    const client = require('twilio')(accountSid, authToken);
  
    const message = await client.messages
    .create({
        body: `ລະຫັດຢືນຢັ້ງໂຕຕົນຈາກ Monday Tech Company : ${otp}`,
        from: '+15737632733',
        to: form.Phonenumber,
    })
    .then(message => console.log(message.body));
  
 

return
const a = await userModels.create(data);

 }

    
 
  

        }

module.exports.verifyOTP=async (req,res,next)=>{
      const form = req.body;
      const Phonenumber = form.Phonenumber;
      const OTP = form.OTP;
      const now  =  new Date(); 
  
         const user = await userModels.findOne({Phonenumber
          })
if(now >= user.OTPExpire){
   console.log("end");
return

 }
 const auth = await bcrypt.compare(form.OTP, user.OTP);
 console.log(form.OTP);
 console.log(user.OTP);

console.log(auth);
if(auth){

  res.json({
   status:true,
   message:"OTP Comfirme"
})


}


const data={

  VerifyOTP:true,

}
const result = await userModels.findByIdAndUpdate(user._id,data,{useFindAndModify:false})

}
module.exports.Sms=async (req,res,next)=>{
  const smsCount = req.session.counter || 0;

  let message = 'Hello, thanks for the new message.';

  if(smsCount > 0) {
    message = 'Hello, thanks for message number ' + (smsCount + 1);
  }

  req.session.counter = smsCount + 1;

  const twiml = new MessagingResponse();
  twiml.message(message);

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
}