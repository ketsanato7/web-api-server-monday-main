const Contorllers = require('../../contorllers/SendOtpPhoneNumberByFirebase');
const router = require('express').Router();


router.post("/SendOTPPhoneNumberByFirebase/sendotp", Contorllers.sendOTP);



module.exports=router;  