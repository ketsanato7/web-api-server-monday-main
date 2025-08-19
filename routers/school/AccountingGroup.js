const Contorllers = require('../../contorllers/school/AccountingGroup');
const router = require('express').Router();
const url = "/AccountingGroup"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);
    
module.exports=router;  