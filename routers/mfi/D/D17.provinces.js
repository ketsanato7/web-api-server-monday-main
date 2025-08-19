const Contorllers = require('../../../contorllers/mfi/D/D17.provinces');
const router = require('express').Router();
const url = "/provinces"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);
router.get(`${url}/read1`, Contorllers.read1);
router.post(`${url}/readone`, Contorllers.readone);

module.exports=router;  