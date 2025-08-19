const Contorllers = require('../../contorllers/school/EducationalInstitutionType');
const router = require('express').Router();


router.post("/EducationalInstitutionType/create", Contorllers.create);
router.get("/EducationalInstitutionType/read", Contorllers.read);
router.post("/EducationalInstitutionType/update", Contorllers.update);
router.post("/EducationalInstitutionType/delete", Contorllers.delete);

module.exports=router;  