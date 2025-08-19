
const Model = require("../models/Register");
const otpGenerator = require('otp-generator')
const jwt = require('jsonwebtoken');
const { model } = require("mongoose");
const maxAge = 600;

let otpLength = 5;
const otpCahe={};
const createToken = (id) => {
    return jwt.sign({
        id
    }, process.env.JWT_SECRET, {
        expiresIn: maxAge
    })
};


module.exports.create=async (req,res,next)=>{
const form = req.body;
const a1 =otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
 const a = createToken(a1);

const data = {
    Tel:form.Tel,
    Otp:a1,
    created_date:new Date()

}

Model.create(data,err=>{

    if(!err){
    

        res.json({
            status:true,
            message:"Saved",
            data:a1

        })

    }else{
        console.log("error ");

        res.json({
            status:false,
            message:err


        })
    }
})
}


module.exports.read=async (req,res,next)=>{
    Model.find().exec((err,data)=>{
    if(!err){

        res.json({
            status:true, 
            message:"selete all data ",
        data:data
    })
    }else{


        console.log("error");
        res.json({
            status:false,
        message:err
    })
    }
  });
        
    }

    module.exports.ConfirmOtp=async (req,res,next)=>{
        const form = req.body;
        const data = {
            Tel:form.Tel,
            Otp:form.Otp,
        }        
console.log(data)

        Model.find(data).exec((err,data1)=>{

            if(!err){

             const token=   createToken(data1._id);  

                      res.json({
                    status:true, 
                    message:"Otp is correct ",
                data:token
            })


   }else{
    
                res.json({
                    status:false,
                message:err

            })
            }
          });
       


    }


    
    module.exports.delete=async (req,res,next)=>{

        const form = req.body; 
   
        
        Model.findByIdAndDelete(form._id,{useFindAndModify:false}).exec((err)=>{

            if(!err){
        console.log("Delete Sucess  ");

                res.json({
                    status:true,
                message:"Delete Sucess !",
           
                })
      
            }else{
                console.log(" Delete error");

          res.json({
                    status:false,
                message:err})


            }
        })



    }