const Contorllers = require('../../../contorllers/mfi/D/D18.nationality');
const router = require('express').Router();
const url = "/nationality"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  