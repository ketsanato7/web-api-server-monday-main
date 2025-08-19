const Contorllers = require('../../contorllers/school/Gender');
const router = require('express').Router();


router.post("/Gender/create", Contorllers.create);
router.get("/Gender/read", Contorllers.read);
router.post("/Gender/update", Contorllers.update);
router.post("/Gender/delete", Contorllers.delete);

module.exports=router;  