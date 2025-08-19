const Contorllers = require('../../contorllers/school/SystemEduction');
const router = require('express').Router();


router.post("/SystemEduction/create", Contorllers.create);
router.get("/SystemEduction/read", Contorllers.read);
router.post("/SystemEduction/update", Contorllers.update);
router.post("/SystemEduction/delete", Contorllers.delete);

module.exports=router;  