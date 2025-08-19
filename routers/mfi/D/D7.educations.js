const Contorllers = require('../../../contorllers/mfi/D/D7.educations');
const router = require('express').Router();
const url = "/educations"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  