const UserType = require('../../contorllers/UserType');
const router = require('express').Router();


router.post("/user-type/create", UserType.createUserType);
router.get("/user-type/read", UserType.readUserType);
router.post("/user-type/update", UserType.updateUsertype);
router.post("/user-type/delete", UserType.deleteUserType);
router.post("/user-type/checkUserType", UserType.checkUserType);

module.exports=router;  