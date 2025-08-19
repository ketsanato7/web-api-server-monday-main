const Contorllers = require('../contorllers/SendOTP.contorllers');
const router = require('express').Router();

router.post("/SendOTP/sendotp", Contorllers.SendOTP);


module.exports=router;  