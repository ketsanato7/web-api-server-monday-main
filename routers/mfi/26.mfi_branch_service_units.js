const Contorllers = require('../../contorllers/mfi/26.mfi_branch_service_units');
const router = require('express').Router();
const url = "/mfi_branch_service_units"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  