const Contorllers = require('../../contorllers/mfi/25.mfi_HQ_service_units');
const router = require('express').Router();
const url = "/mfi_HQ_service_units"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  