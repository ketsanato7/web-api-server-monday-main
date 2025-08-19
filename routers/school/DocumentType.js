const Contorllers = require('../../contorllers/DocumentType');
const router = require('express').Router();


router.post("/DocumentType/create", Contorllers.create);
router.get("/DocumentType/read", Contorllers.read);
router.post("/DocumentType/update", Contorllers.update);
router.post("/DocumentType/delete", Contorllers.delete);


module.exports=router;  