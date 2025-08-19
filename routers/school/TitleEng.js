const Contorllers = require('../../contorllers/school/TitleEng');
const router = require('express').Router();


router.post("/TitleEng/create", Contorllers.create);
router.get("/TitleEng/read", Contorllers.read);
router.post("/TitleEng/update", Contorllers.update);
router.post("/TitleEng/delete", Contorllers.delete);

module.exports=router;  