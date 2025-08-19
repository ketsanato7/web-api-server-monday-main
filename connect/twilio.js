const twilio = require("twilio"); // Or, for ESM: import twilio from "twilio";
require("dotenv").config();

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

async function createService() {
    const service = await client.messaging.v1.services.create({
      friendlyName: "My First Messaging Service",
    });
  
    console.log(service.sid);
  }


  async function createPhoneNumber() {
    const phoneNumber = await client.messaging.v1
      .services("MG55b621cd1380ad9b3e3c6607e9277db6")
      .phoneNumbers.create({
        phoneNumberSid: "PN36b947a6f9e1aaa45cb347415fdb0d09",
      });
  
    console.log(phoneNumber.sid);
  }

    async function createMessage() {
        const message = await client.messages.create({
          body: "Hello from your Messaging Service!",
          messagingServiceSid: "MG55b621cd1380ad9b3e3c6607e9277db6",
          to: "+8562077977441",
        });
      
        console.log(message.body);
      }
      async function createVerification() {
        const verification = await client.verify.v2
          .services("MG55b621cd1380ad9b3e3c6607e9277db6")
          .verifications.create({
            channel: "sms",
            to: process.env.TWILIO_PHONE_NUMBER,
          });
      
        console.log(verification.status);
      }

async function createValidationRequest() {
  const validationRequest = await client.validationRequests.create({
    friendlyName: "My Home Phone Number",
    phoneNumber: "+14158675310",
  });

  console.log(validationRequest.accountSid);
}
async function fetchOutgoingCallerId() {
  const outgoingCallerId = await client
    .outgoingCallerIds("PNe905d7e6b410746a0fb08c57e5a186f3")
    .fetch();

  console.log(outgoingCallerId.sid);
}

  module.exports= {createService,createMessage,createVerification};