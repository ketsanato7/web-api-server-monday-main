const Contorllers = require('../../contorllers/mfi/19.trial_balance');
const router = require('express').Router();
const url = "/trial_balance"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  