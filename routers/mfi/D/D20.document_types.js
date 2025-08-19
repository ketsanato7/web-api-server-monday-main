const Contorllers = require('../../../contorllers/mfi/D/D20.document_types');
const router = require('express').Router();
const url = "/document_types"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  