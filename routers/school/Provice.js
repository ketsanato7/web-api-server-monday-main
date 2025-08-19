const Contorllers = require('../../contorllers/school/Provice');
const router = require('express').Router();

router.post("/Provice/create", Contorllers.create);
router.get("/Provice/read", Contorllers.read);
router.post("/Provice/update", Contorllers.update);
router.post("/Provice/delete", Contorllers.delete);
router.get("/Provice/read1", Contorllers.read1);
router.post("/Provice/readFK", Contorllers.ReadFromID);

module.exports=router;  