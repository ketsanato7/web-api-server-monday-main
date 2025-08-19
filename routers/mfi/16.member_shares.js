const Contorllers = require('../../contorllers/mfi/16.member_shares');
const router = require('express').Router();
const url = "/member_shares"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  