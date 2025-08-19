const Contorllers = require('../../contorllers/mfi/18.member_shares_enterprises');
const router = require('express').Router();
const url = "/member_shares_enterprises"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  