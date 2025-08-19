const Contorllers = require('../../contorllers/school/Activity');
const router = require('express').Router();
const url = "/Activity"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);
    router.get(`${url}/read1`, Contorllers.readUsers1);

module.exports=router;  