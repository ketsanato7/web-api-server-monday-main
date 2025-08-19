const Contorllers = require('../../contorllers/school/SendOTPEmail');
const router = require('express').Router();


router.post("/SendOTPEmail/sendotpmail", Contorllers.sendotpmail);
router.post("/SendOTPEmail/verifyotp", Contorllers.verifyOTP);

router.get("/SendOTPEmail/read", Contorllers.read);
router.post("/SendOTPEmail/update", Contorllers.update);
router.post("/SendOTPEmail/delete", Contorllers.delete);

module.exports=router;  