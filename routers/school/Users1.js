const User = require('../../contorllers/Users1');
const router = require('express').Router();
router.get("/users1/read",User.readUsers);
router.post("/users1/create",User.createUsers);
router.post("/users1/update",User.updateUsers);
router.post("/users1/delete",User.deleteUsers);
router.get("/users1/read1",User.readUsers1);
router.get("/users1/sendotp",User.SendOTP);
router.post("/users1/ReadUserByUserTypeId",User.readUserByUserTypeID);
router.post("/users1/checkUsername",User.checkUsername);
router.post("/users1/checkTel",User.checkTel);

module.exports=router;