const Contorllers = require('../../contorllers/school/TeacherTitle');
const router = require('express').Router();


router.post("/TeacherTitle/create", Contorllers.create);
router.get("/TeacherTitle/read", Contorllers.read);
router.post("/TeacherTitle/update", Contorllers.update);
router.post("/TeacherTitle/delete", Contorllers.delete);

module.exports=router;  