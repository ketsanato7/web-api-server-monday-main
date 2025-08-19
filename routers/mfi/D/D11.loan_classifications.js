const Contorllers = require('../../../contorllers/mfi/D/D11.loan_classifications');
const router = require('express').Router();
const url = "/loan_classifications"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  