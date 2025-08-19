const Contorllers = require('../../../contorllers/mfi/D/D12.loan_funding_sources');
const router = require('express').Router();
const url = "/loan_funding_sources"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  