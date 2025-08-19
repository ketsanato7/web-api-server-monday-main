const Contorllers = require('../../contorllers/school/SendOtpPhoneNumber.contorllers');
const router = require('express').Router();


router.post("/SendOTPPhoneNumber/sendotp", Contorllers.SendOTP);
router.post("/SendOTPPhoneNumber/verifyotp", Contorllers.verifyOTP);
router.post("/SendOTPPhoneNumber/sendotp2", Contorllers.SendOTPByTwilio);
router.post("/SendOTPPhoneNumber/sms", Contorllers.Sms);



module.exports=router;  