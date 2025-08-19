const Contorllers = require('../../contorllers/school/TitleLao');
const router = require('express').Router();


router.post("/TitleLao/create", Contorllers.create);
router.get("/TitleLao/read", Contorllers.read);
router.post("/TitleLao/update", Contorllers.update);
router.post("/TitleLao/delete", Contorllers.delete);

module.exports=router;  