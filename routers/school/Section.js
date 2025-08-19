const Contorllers = require('../../contorllers/school/Section');
const router = require('express').Router();

router.post("/Section/create", Contorllers.create);
router.get("/Section/read", Contorllers.read);
router.post("/Section/update", Contorllers.update);
router.post("/Section/delete", Contorllers.delete);

module.exports=router;  