const Contorllers = require('../contorllers/Family.contorllers');
const router = require('express').Router();


router.post("/Family/create", Contorllers.create);
router.get("/Family/read", Contorllers.read);
router.post("/Family/update", Contorllers.update);
router.post("/Family/delete", Contorllers.delete);
router.get("/Family/read1", Contorllers.read1);
module.exports=router;  