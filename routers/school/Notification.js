const Contorllers = require('../../contorllers/Notification');
const router = require('express').Router();


router.post("/Notification/push", Contorllers.create);

module.exports=router;  