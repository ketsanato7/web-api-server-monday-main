const Contorllers = require('../../contorllers/school/Job');
const router = require('express').Router();


router.post("/Job/create", Contorllers.create);
router.get("/Job/read", Contorllers.read);
router.post("/Job/update", Contorllers.update);
router.post("/Job/delete", Contorllers.delete);

module.exports=router;  