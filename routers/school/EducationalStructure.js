const Contorllers = require('../../contorllers/school/EducationalInstitutionDetail');
const router = require('express').Router();


router.post("/EducationalInstitutionDetail/create", Contorllers.create);
router.get("/EducationalInstitutionDetail/read", Contorllers.read);
router.post("/EducationalInstitutionDetail/update", Contorllers.update);
router.post("/EducationalInstitutionDetail/delete", Contorllers.delete);

module.exports=router;  