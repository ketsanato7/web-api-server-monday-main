const Contorllers = require('../../../contorllers/mfi/D/D17.districts');
const router = require('express').Router();
const url = "/districts"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);
router.get(`${url}/read1`, Contorllers.read1);
router.post(`${url}/readone`, Contorllers.readone);
router.post(`${url}/read_fk`, Contorllers.read_fk);

module.exports=router;  