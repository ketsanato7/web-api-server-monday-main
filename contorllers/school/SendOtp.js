const Models = require("../models/SendOtp.models");
const jwt = require('jsonwebtoken');
const maxAge = 60000;
const bcrypt = require('bcryptjs');

module.exports.SendOTP=async (req,res,next)=>{
    try{
    
        const otp = $(Math.floor(1000+Math.random()*9000));
    const mailOptions={
        from:process.env_AUTH_EMAIL,
        to:email,
        subject:process.env_AUTH_EMAIL,
        html:process.HTML,
    };
    const saltRounds=10;
    const hashedOTP=await bcrypt.hash(otp,saltRounds);
const newOtpVerification=await new Models({
    user
})
    
    
    }catch(err){
    
    
    }
    
    }



module.exports.createUsers = async (req, res, next) => {

    const form = req.body;
    const salt = await bcrypt.genSalt();
    password = await bcrypt.hash(form.Password, salt);

    const data = {
        username: form.Username,
        password: password,
        user_online: false,
        Tel:form.Tel,
        user_type_id: form.user_type_id,
        created_date: new Date()
    }

    console.log(data)
    
    await userModels.create(data, err => {

        if (!err) {


            console.log("Save");
            res.json({
                status: true,
                message: "Saved"

            })
        } else {
            console.log("error ");

            res.json({
                status: false,
                message:err


            })
        }
    })








};


module.exports.readUsers1 = async (req, res, next) => {

    userModels.aggregate([{
        $lookup: {
            from: "user_types",
            localField: "user_type_id",
            foreignField: "_id",
            as: "user_type_name"
        }
    }, ]).exec((err, data) => {

        if (!err) {

            res.json({
                status: true,
                message: "selete all data ",
                data: data
            })

        } else {


            console.log("error");
            res.json({
                status: false,
                message: err
            })
        }
    });

}

module.exports.readUsers = async (req, res, next) => {

    userModels.find().exec((err, data) => {

        if (!err) {


            res.json({
                status: true,
                message: "selete all data ",
                data: data
            })
        } else {



            res.json({
                status: false,
                message: err
            })
        }
    });

}

module.exports.testUser = async (req, res, next) => {

    userModels.find().populate('author').exec((err, data) => {

        if (!err) {


            res.json({
                status: true,
                message: "selete all data ",
                data: data
            })
        } else {


            console.log("error");
            res.json({
                status: false,
                message: err
            })
        }
    });

}


module.exports.updateUsers = async (req, res, next) => {

    const form = req.body;
    const salt = await bcrypt.genSalt();
    password = await bcrypt.hash(form.Password, salt);

    const data = {
        username: form.Username,
        password: password,
        user_online: false,
        Tel:form.Tel,
        user_type_id: form.user_type_id,
        updated_date: new Date()
        
    }
    userModels.findByIdAndUpdate(form._id, data, {
        useFindAndModify: false
    }).exec((err, data) => {

        if (!err) {

            res.json({
                status: true,
                message: "Update Sucess !",
                data: data

            })

        } else {
            console.log("error");

            res.json({
                status: false,
                message: err
            })


        }
    })



}

module.exports.deleteUsers = async (req, res, next) => {

    const form = req.body;


    userModels.findByIdAndDelete(form._id, {
        useFindAndModify: false
    }).exec((err, data) => {

        if (!err) {
            console.log("Delete Sucess  ");

            res.json({
                status: true,
                message: "Delete Sucess !",
                data: data

            })

        } else {

            console.log(" Delete error");

            res.json({
                status: false,
                message: err
            })


        }
    })



}