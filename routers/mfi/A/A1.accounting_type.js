const Contorllers = require('../../../contorllers/mfi/A/A1.accounting_type');
const router = require('express').Router();
const url = "/accounting_types"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);
router.post(`${url}/readone`, Contorllers.readone);

module.exports=router;  