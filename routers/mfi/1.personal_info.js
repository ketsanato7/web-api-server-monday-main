const Contorllers = require('../../contorllers/mfi/1.personal_info');
const router = require('express').Router();
const url = "/personal_info"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);
router.get(`${url}/read1`, Contorllers.read1);
router.get(`${url}/read_village`, Contorllers.read_village);

module.exports=router;  