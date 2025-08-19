const Contorllers = require('../../contorllers/mfi/10.loan_collaterals');
const router = require('express').Router();
const url = "/loan_collaterals"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  