const Contorllers = require('../../contorllers/school/CourseOfStudy');
const router = require('express').Router();


router.post("/CourseOfStudy/create", Contorllers.create);
router.get("/CourseOfStudy/read", Contorllers.read);
router.post("/CourseOfStudy/update", Contorllers.update);
router.post("/CourseOfStudy/delete", Contorllers.delete);

module.exports=router;  