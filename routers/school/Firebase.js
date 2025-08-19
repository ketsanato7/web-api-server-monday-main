const Contorllers = require('../../contorllers/Firebase');
const router = require('express').Router();


router.post("/Firebase/register", Contorllers.registerUser);
router.post("/Firebase/login", Contorllers.loginUser);
router.post("/Firebase/logout", Contorllers.logoutUser);
router.post("/Firebase/reset-password", Contorllers.resetPassword);
router.get("/Firebase/verifyToken", Contorllers.verifyToken);

module.exports=router;  