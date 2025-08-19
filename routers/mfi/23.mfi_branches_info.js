const Contorllers = require('../../contorllers/mfi/23.mfi_branches_info');
const router = require('express').Router();
const url = "/mfi_branches_info"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  