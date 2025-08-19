const Contorllers = require('../../contorllers/school/Register');
const router = require('express').Router();


router.post("/Register/register", Contorllers.create);
router.post("/Register/ConfirmOtp", Contorllers.ConfirmOtp);
router.post("/Register/delete", Contorllers.delete);
router.get("/Register/read", Contorllers.read);

module.exports=router;  