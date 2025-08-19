const Contorllers = require('../../contorllers/District');
const router = require('express').Router();


router.post("/District/create", Contorllers.create);
router.get("/District/read", Contorllers.read);
router.post("/District/update", Contorllers.update);
router.post("/District/delete", Contorllers.delete);

router.get("/District/read1", Contorllers.read1);
router.post("/District/readFK", Contorllers.ReadFromID);

module.exports=router;  