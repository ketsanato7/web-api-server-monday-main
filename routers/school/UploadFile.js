const Contorllers = require('../contorllers/UploadFile.contorllers');
const router = require('express').Router();

router.post("/UploadFile/create", Contorllers.create);
router.get("/UploadFile/read", Contorllers.read);
router.post("/UploadFile/update", Contorllers.update);
router.post("/UploadFile/delete", Contorllers.delete);

module.exports=router;  