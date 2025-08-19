const Contorllers = require('../../contorllers/school/Holiday_types');
const router = require('express').Router();


router.post("/holiday_types/create", Contorllers.create);
router.get("/holiday_types/read", Contorllers.read);
router.post("/holiday_types/update", Contorllers.update);
router.post("/holiday_types/delete", Contorllers.delete);

module.exports=router;  