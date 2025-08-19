const Contorllers = require('../../contorllers/school/Religion');
const router = require('express').Router();


router.post("/Religion/create", Contorllers.create);
router.get("/Religion/read", Contorllers.read);
router.post("/Religion/update", Contorllers.update);
router.post("/Religion/delete", Contorllers.delete);

module.exports=router;  