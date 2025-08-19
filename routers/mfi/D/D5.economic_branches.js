const Contorllers = require('../../../contorllers/mfi/D/D5.economic_branches');
const router = require('express').Router();
const url = "/economic_branches"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  