const Contorllers = require('../../../contorllers/mfi/D/D6.economic_sectors');
const router = require('express').Router();
const url = "/economic_sectors"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  