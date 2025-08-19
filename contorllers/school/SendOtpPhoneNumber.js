const jwt = require('jsonwebtoken');
const maxAge = 60000;
const bcrypt = require('bcryptjs');
const firebase = require('../../connect/firebase');
const https = require('https');
const serviceAccount = require("../connect/starlit-lotus-440808-u3-firebase-adminsdk-mn5n8-1d15c760fb.json");
require("dotenv").config();

const PROJECT_ID = serviceAccount.project_id;
const HOST = 'fcm.googleapis.com';
const PATH = '/v1/projects/' + PROJECT_ID + '/messages:send';
const MESSAGING_SCOPE = 'https://www.googleapis.com/auth/firebase.messaging';
const SCOPES = ['https://www.googleapis.com/auth/cloud-platform'];

    const jwtClient = new google.auth.JWT(
      serviceAccount.client_email,
      null,
      serviceAccount.private_key,
      SCOPES,
      null
      
    );
    const twilio = require("twilio"); // Or, for ESM: import twilio from "twilio";

    // Find your Account SID and Auth Token at twilio.com/console
    // and set the environment variables. See http://twil.io/secure
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
  
const client = require('twilio')(accountSid, authToken);

    module.exports.SendOTPByTwilio=async (req,res,next)=>{
        const form = req.body.Mobile;


        const otp = Math.floor(100000 + Math.random() * 900000);

client.messages
    .create({
        body: `${otp}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: form.Mobile,
    })
    .then(message => console.log(message.sid));
    
      console.log(message.body);
    
    
    createMessage();
    }

module.exports.SendOTP=async (req,res,next)=>{

    const token= jwtClient.authorize(function(err, tokens) {
        if (err) {
          reject(err);
          return;
        }
        console.log(tokens.access_token);
        return tokens.access_token
      });
      const body = {
        message: {
          data: { key: 'value' },
          notification: {
            title: 'Notification title',
            body: 'Notification body',
            image:""
          },
          webpush: {
            headers: {
              Urgency: 'high'
            },
            notification: {
              requireInteraction: 'true'
            }
          },
          token: token
        }}
 const options = {
            hostname: HOST,
            path: PATH,
            method: 'POST',
            // [START use_access_token]
            headers: {
              'Authorization': 'Bearer ' + token
            }
            // [END use_access_token]
          };
        try{
        const { data } = await axios.post(options, body, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            }
          })
          console.log('name: ', data.name)
        } catch (err) {
          console.log('err: ', err.message)
        }

     
        
        
        }
            module.exports.test=async (req,res,next)=>{
                try {
                  
  // Check if the mobile number exists in the OTP store
  if (otpStore.hasOwnProperty(mobileNumber)) {
    // Get the stored OTP and its expiration time
    const { storedOTP, expirationTime } = otpStore[mobileNumber];

    // Verify the OTP and check if it's not expired
    if (storedOTP === otp && Date.now() < expirationTime) {
      // OTP verification successful
      res.json({ success: true, message: 'OTP verification successful!' });
    } else {
      // Invalid OTP or expired OTP
      res.status(400).json({ success: false, message: 'Invalid OTP.' });
    }
  } else {
    // Mobile number not found or OTP expired
    res.status(400).json({ success: false, message: 'Mobile number not found or OTP expired.' });
  }
                  } catch (error) {
                    console.error('Error sending OTP:', error);
                    res.status(500).json({ success: false, message: 'Failed to send OTP.' });
                  }
    }