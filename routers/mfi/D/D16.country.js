const Contorllers = require('../../../contorllers/mfi/D/D16.country');
const router = require('express').Router();
const url = "/country"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);
router.post(`${url}/readone`, Contorllers.readone);

module.exports=router;  