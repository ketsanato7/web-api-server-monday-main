const Contorllers = require('../../contorllers/mfi/20.employees');
const router = require('express').Router();
const url = "/employees"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  