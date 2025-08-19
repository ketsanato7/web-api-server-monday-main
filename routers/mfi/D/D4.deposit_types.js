const Contorllers = require('../../../contorllers/mfi/D/D4.deposit_types');
const router = require('express').Router();
const url = "/deposit_types"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  