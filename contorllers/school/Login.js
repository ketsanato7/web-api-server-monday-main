const userModels = require("../models/Users1");

const jwt = require('jsonwebtoken');
const maxAge = 60000;
const bcrypt = require('bcryptjs');
const opt = require('otp-generator');
const _ = require("lodash");

const createToken = (id) => {
    return jwt.sign({
        id
    }, process.env.JWT_SECRET, {
        expiresIn: maxAge
    })
};


module.exports.userLogin = async (req, res, next) => {

    const form = req.body;
    const username = form.Username;
    const user = await userModels.findOne({
        Username:username
    });
    console.log(username)

    if (user != null) {

        const auth = await bcrypt.compare(form.Password, user.password);
        console.log(auth)
        console.log(auth)

console.log(auth)
        if (auth) {

       
            const data1={
                user_online: true,
        
         }
                userModels.findByIdAndUpdate(user._id, data1, {
                    useFindAndModify: false
                }).exec((err) => {
            
                    if (!err) {
                        console.log("Update Status User Sucess  ");
            
                    } else {
                        console.log("error");
            
                    }
                })
            
        

            const token = createToken(user._id);

            res.cookie("id", token, {
                withCredent: true,
                httpOnly: true,
                maxAge: 60000,

            });

            res.json({
                status: true,
                message: "login Succecss  !",
                token: token

            })

        } else {


            res.json({
                status: false,
                message: "password is not corect!",

            })

        }
        return
    }

    res.json({
        status: false,
        message: "username have not !",

    })




};

module.exports.checkToken = async (req, res, next) => {

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModels.findById(decoded.id);


        if (user)

            return res.status(200).json({
                status: true,
                data: user
            });



    } else {

        return res.status(401).json({
            status: false,
            message: "Token is not "
        })


    }

};


module.exports.register = async (req, res, next) => {

    const form = req.body;
    const salt =await bcrypt.genSalt();
    const password =await bcrypt.hash(form.Password, salt);


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





    




module.exports.checkUser1 = async (req,res,next)=> {

    const token =req.session['id'];

 
     if(token){

        console.log("token start");
        const decoded= jwt.verify(token,process.env.JWT_SECRET, async  (err,decodedToken)=>{

            if(err){
                
return                res.json({status:false,messqge:"error check user"});

            }else{


                const user = await User.findById(decodedToken.id);

                if(user)
                return res.json({
                status:true,
                user:user.username
            });
        }
             
        })


     }else{

        res.json({status:false,message:"token is not "});
        next();
    }
};


module.exports.checkToken1 = async (req,res,next)=> {

if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);


    if(user)

    return res.status(200).json({
    status:true,
    data:user
});



}  else {

return res.status(401).json({status:false,message:"Token is not "})


}

}
