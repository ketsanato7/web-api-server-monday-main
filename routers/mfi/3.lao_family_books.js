const Contorllers = require('../../contorllers/mfi/3.lao_family_books');
const router = require('express').Router();
const url = "/lao_family_books"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  