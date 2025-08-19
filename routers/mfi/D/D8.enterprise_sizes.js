const Contorllers = require('../../../contorllers/mfi/D/D8.enterprise_sizes');
const router = require('express').Router();
const url = "/enterprise_sizes"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  