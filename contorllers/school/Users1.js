const userModels = require("../models/Users1");
const jwt = require('jsonwebtoken');
const maxAge = 60000;
const bcrypt = require('bcryptjs');
const OTPGenerator = require('otp-generator');

const qr = require("qrcode");

module.exports.createUsers = async (req, res, next) => {

    const form = req.body;
    const salt = await bcrypt.genSalt();
    password = await bcrypt.hash(form.Password, salt);

    const data = {
        username: form.Username,
        password: password,
        user_online: false,
        Tel: form.Tel,
        user_type_id: form.user_type_id,
        created_date: new Date()
    }


    await userModels.create(data, err => {
            
        
        if (!err) {

            console.log(data)
            console.log("Save");
            res.json({
                status: true,
                message: "Saved"
            });


        } else {
            console.log("error");

            res.json({

                status: false,
                message: err


            })
        }
    })





};

module.exports.checkUsername = async (req, res, next) => {

    const form = req.body;

    const data1 = {
        username: form.Username,
    }

     await userModels.find(data1).exec((err,data)=>{

        if (!err) { 

            if(data.length > 0){
                res.json({
                    status: true,
                    message: "This Username or Email can not use!!!!",
                    data:data
                })
        
            }else{

                res.json({
                    status: false,
                    message: "This Username or Email can  use!!!!",
        
                })
            }
         
        } else {
            
            res.json({
                status: false,
                message: "Server error"
    
            })
        }}
    );

}

module.exports.checkTel = async (req, res, next) => {
    const form = req.body;
    const data1 = {
        Tel: form.Tel 
    }
    
    console.log(data1)
    await userModels.find(data1).exec((err,data)=>{

        if (!err) { 

            console.log(data)
            if(data.length > 0){
                res.json({
                    status: true,
                    message: "This Username can not use!!!!",
                    data:data
                })
        
            }else{

                res.json({
                    status: false,
                    message: "This Phone can use!!!!"
        
                })
            }
         
        } else {
            
            res.json({
                status: false,
                message: "Server error"
    
            })
        }}
    );

   
}
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
module.exports.checkUsernameUpdate = async (req, res, next) => {

    const form = req.body;

    const data1 = {
        username: form.Username,
    }

     await userModels.find(data1).exec((err,data)=>{

        if (!err) { 

            if(data.length > 0){
                
                res.json({
                    status: true,
                    message: "This Username or Email can not use!!!!",
                    data:data
                })
        
            }else{

                res.json({
                    status: false,
                    message: "This Username or Email can  use!!!!",
        
                })
            }
         
        } else {
            
            res.json({
                status: false,
                message: "Server error"
    
            })
        }}
    );

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
module.exports.readUserByUserTypeID = async (req, res, next) => {
    const form = req.body;


    userModels.find({
        user_type_id: {
            $eq: form.user_type_id
        }
    }).exec((err, data) => {
        console.log(data)

        if (!err) {


            res.json({
                status: true,
                message: "selete all data ",
                data: data
            })
        } else {



            res.json({
                status: false,
                message: err,

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
        Tel: form.Tel,
        user_type_id: form.user_type_id,
        updated_date: new Date()

    }
    userModels.findByIdAndUpdate(form._id, data, {
        useFindAndModify: false
    }).exec((err, data) => {

        if (!err) {
            console.log("Update Sucess  ");

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

module.exports.SendOTP = async (req, res, next) => {

    const form = req.body;



}