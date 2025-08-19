const Contorllers = require('../../../contorllers/mfi/D/D10.loan_categories');
const router = require('express').Router();
const url = "/loan_categories"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  