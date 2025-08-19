const Contorllers = require('../../contorllers/mfi/11.borrowers_individual');
const router = require('express').Router();
const url = "/borrowers_individual"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  