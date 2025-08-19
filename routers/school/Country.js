const Contorllers = require('../../contorllers/school/Country');
const router = require('express').Router();


router.post("/Country/create", Contorllers.create);
router.get("/Country/read", Contorllers.read);
router.post("/Country/update", Contorllers.update);
router.post("/Country/delete", Contorllers.delete);

module.exports=router;  