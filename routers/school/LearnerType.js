const Contorllers = require('../../contorllers/school/LearnerType');
const router = require('express').Router();


router.post("/LearnerType/create", Contorllers.create);
router.get("/LearnerType/read", Contorllers.read);
router.post("/LearnerType/update", Contorllers.update);
router.post("/LearnerType/delete", Contorllers.delete);

module.exports=router;  