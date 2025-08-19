const Contorllers = require('../../contorllers/mfi/2.lao_id_cards');
const router = require('express').Router();
const url = "/lao_id_cards"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  