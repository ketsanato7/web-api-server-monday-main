const Contorllers = require('../../contorllers/school/Teacher');
const router = require('express').Router();


router.post("/Teacher/create", Contorllers.create);
router.get("/Teacher/read", Contorllers.read);
router.post("/Teacher/update", Contorllers.update);
router.post("/Teacher/delete", Contorllers.delete);

module.exports=router;  