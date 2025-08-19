const Contorllers = require('../../../contorllers/mfi/D/D3.customer_types');
const router = require('express').Router();
const url = "/customer_types"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  