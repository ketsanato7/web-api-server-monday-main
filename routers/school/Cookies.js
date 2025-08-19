
const {cookiesget,cookiesset} = require('../../contorllers/school/Cookies');

const router = require('express').Router();
router.post("/cookies/get", cookiesget);

router.post("/cookies/set",cookiesset);



module.exports=router;