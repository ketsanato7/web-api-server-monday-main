const Contorllers = require('../../contorllers/school/Position');
const router = require('express').Router();


router.post("/position/create", Contorllers.create);
router.get("/position/read", Contorllers.read);
router.post("/position/update", Contorllers.update);
router.post("/position/delete", Contorllers.delete);

module.exports=router;  