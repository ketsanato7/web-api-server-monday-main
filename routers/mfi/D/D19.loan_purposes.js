const Contorllers = require('../../../contorllers/mfi/D/D19.loan_purposes');
const router = require('express').Router();
const url = "/loan_purposes"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  