const Contorllers = require('../../../contorllers/mfi/D/D15.key_personnels');
const router = require('express').Router();
const url = "/key_personnels"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  