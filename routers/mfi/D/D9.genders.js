const Contorllers = require('../../../contorllers/mfi/D/D9.genders');
const router = require('express').Router();
const url = "/genders"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  