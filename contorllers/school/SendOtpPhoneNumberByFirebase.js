const jwt = require('jsonwebtoken');
const maxAge = 60000;
const bcrypt = require('bcryptjs');
const {app,auth} = require('../../connect/firebase');

require("dotenv").config();


    module.exports.sendOTP=async (req,res,next)=>{
        const form = req.body;

        const phoneNumber = form.Phonenumber;
        const appVerifier = form.recaptchaVerifier;
signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
    confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });
// [END auth_phone_signin_modular]
    }