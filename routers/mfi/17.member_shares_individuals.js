const Contorllers = require('../../contorllers/mfi/17.member_shares_individuals');
const router = require('express').Router();
const url = "/member_shares_individuals"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  