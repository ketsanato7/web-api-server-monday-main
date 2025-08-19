const Contorllers = require('../../contorllers/mfi/14.depositors_individual');
const router = require('express').Router();
const url = "/depositors_individual"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  