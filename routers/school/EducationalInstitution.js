const Contorllers = require('../../contorllers/school/EducationalInstitution');
const router = require('express').Router();


router.post("/EducationalInstitution/create",Contorllers.create);
router.get("/EducationalInstitution/read", Contorllers.read);
router.post("/EducationalInstitution/update", Contorllers.update);
router.post("/EducationalInstitution/delete", Contorllers.delete);

module.exports=router;  