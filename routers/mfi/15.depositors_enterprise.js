const Contorllers = require('../../contorllers/mfi/15.depositors_enterprise');
const router = require('express').Router();
const url = "/depositors_enterprise"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  