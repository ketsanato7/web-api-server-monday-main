const Contorllers = require('../../contorllers/mfi/27.report_info');
const router = require('express').Router();
const url = "/report_info"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  