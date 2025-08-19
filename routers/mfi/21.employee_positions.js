const Contorllers = require('../../contorllers/mfi/21.employee_positions');
const router = require('express').Router();
const url = "/employee_positions"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  