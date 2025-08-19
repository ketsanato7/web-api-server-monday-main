const {getAccessToken} = require("../../connect/firebase");
const admin = require("firebase-admin");



module.exports.create=async (req,res,next)=>{
const form = req.body;
const a =getAccessToken();
const data = {
    topic:"",
   notification:{
    title:form.data
    ,
    body:form.body

   },
   data:{
    story_id:""
   },
   token:a.token



}

try{
    const result = await  admin.messaging().send(data)


}catch(err){
    throw err;
}

}
