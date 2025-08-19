
// require("dotenv").config();
const {initializeApp,cert} = require('firebase-admin/app');
const { getRemoteConfig } = require('firebase-admin/remote-config');
const {getAuth} = require('firebase-admin/auth');
const { getMessaging } = require('firebase-admin/messaging');
const admin = require('firebase-admin');
const fs = require('fs');
const serviceAccount = require("../key/starlit-lotus-440808-u3-firebase-adminsdk-mn5n8-1d15c760fb.json");

  admin.initializeApp({
   credential: admin.credential.cert(serviceAccount),
  });

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAV--C28ldkoc3BORPVKEEJINon9c3M7W8",
//   authDomain: "starlit-lotus-440808-u3.firebaseapp.com",
//   projectId: "starlit-lotus-440808-u3",
//   storageBucket: "starlit-lotus-440808-u3.firebasestorage.app",
//   messagingSenderId: "962025942251",
//   appId: "1:962025942251:web:5df09e0834f02bc96fa2ae",
//   measurementId: "G-33Q5W7DHDS"
// };
// initializeApp(firebaseConfig);


api="BFNni1VYcRY-gWsl53kQ_K8g3gvIfJXwTMKKdMfEh2JDKB8kGM_t4BxkQCbk77kUkImCswohZjycMQ4E-y6HMhs";

// Initialize Firebase
const credential = cert(serviceAccount);

// const token =credential.getAccessToken().then((accessTokenInfo) => {
//   const accessToken = accessTokenInfo.access_token;
//   const expirationTime = accessTokenInfo.expires_in;

//   // Attach accessToken to HTTPS request in the "Authorization: Bearer" header
//   // After expirationTime, you must generate a new access token
//   // [START_EXCLUDE]
//   console.log(`The token ${accessToken}\n expires in ${expirationTime}`);
//   // [END_EXCLUDE]
// });
//   // [END_EXCLUDE]

function subscribeToTopic() {
  const topic = 'test';

  // [START fcm_subscribe_to_topic]
  // These registration tokens come from the client FCM SDKs.
  

  const registrationTokens = [
    `ya29.c.c0ASRK0GYl2js8prieGoca1eEi4FIrXJDU5N43xRAurTCM75JAAG5nWAAGrxX4oG5KqkCMzKz
    puiG7W5eJ7_WXzYDOxuG1EF6Nb1d3JrtHDTisCFD_nNq61hC_zy6jD
    zL91heMiiOVjcKmLIG9jx75xILzrIJh-vW5LgnTSMFGmvUC73znVTZSFjOy72l9QN
    ltrioRyfc4389ZOwY4BIg0SkEzZ4CmmRTUx9VMSBZKTeQo84gPkzzL9YDstVgYAmarDMHV4k
    QhvUpSrUc7HxlaFaFO-PHi387ZvFFcphP12Z2UgfPRdW_Qwycr-3VTCTwK1dkH8vmMv2h68B6GmZtm7gaCvalBLd65l7w4i-iimL--i52uQ7lsjL8xGVn3_lhVswT395CtSFb3J4ja0Q00yesjVxljhmtaIZQ16W2Qmv11wV2MSf4ti6zQs62k1BpxtFbng5vou6pg70YjekZ1qtsyse7nl2abWpFkBflXB3w8_4p64hx5ffi8i1Zye-zI47ussFSf7SduzO9u-Yc36r10uuReI6_SFQtBkqsiauubnFV2ytVFR5x0XJJngRYRuq80Qtk59nri87azq_pd-FkVw6_dI3Fiu9cyqwm2fXMwwWqhz2Zsfk5lFRJQl3woeIOn8I_kBo_by9RYRs7po6Biw1cmRswVfw7bpohgk3urchU3Ia38ZQm1d6Qequm0B2BWRnY55htn7giBUef9Bs0lxXJ06e44U340UclB1QdF7R7gaumFe4pu2Vcik7rJZ6-Ub9f2fvzXZcOB1oUm8O-ccooRg5k8uYQW5iVOsYptrhVV4YzReRQ74WJXXpfMh2wgxcJO--O0-oUvxJ6b75OU9b9JkYWjSgrh041OcuermwRsvZhzM2f36marFlRsyYSntlJB8BWJjWZR8gMJQRQYpXzjpddVp-YeWwVFWhZzYJqxu7SUQs3h72nfqZ6Vdg9bV-U8sO7XumQSdR0Wi4Xn46dfIV7zurtSf2uIaZ4UXFZ1jxzMoY_`,
    // ...
    'YOUR_REGISTRATION_TOKEN_n'
  ];

  // Subscribe the devices corresponding to the registration tokens to the
  // topic.
  getMessaging().subscribeToTopic(registrationTokens, topic)
    .then((response) => {
      // See the MessagingTopicManagementResponse reference documentation
      // for the contents of response.
      console.log('Successfully subscribed to topic:', response);
    })
    .catch((error) => {
      console.log('Error subscribing to topic:', error);
    });
  // [END fcm_subscribe_to_topic]
}



/**
 * Get a valid access token.
 */
// [START retrieve_access_token]
function getAccessToken() {
  return admin.credential.applicationDefault().getAccessToken()
      .then(accessToken => {
        return accessToken.access_token;
      })
      .catch(err => {
        console.error('Unable to get access token');
        console.error(err);
      });
}
// [END retrieve_access_token]

/**
 * Retrieve the current Firebase Remote Config template from the server. Once
 * retrieved the template is stored locally in a file named `config.json`.
 */
// [START retrieve_template]
function getTemplate() {
  const config = admin.remoteConfig();
  config.getTemplate()
      .then(template => {
        console.log('ETag from server: ' + template.etag);
        const templateStr = JSON.stringify(template);
        fs.writeFileSync('config.json', templateStr);
      })
      .catch(err => {
        console.error('Unable to get template');
        console.error(err);
      });
}
// [END retrieve_template]

/**
 * Publish the local template stored in `config.json` to the server.
 */
// [START publish_template]
function publishTemplate() {
  const config = admin.remoteConfig();
  const template = config.createTemplateFromJSON(
      fs.readFileSync('config.json', 'utf-8'));
  config.publishTemplate(template)
      .then(updatedTemplate => {
        console.log('Template has been published');
        console.log('ETag from server: ' + updatedTemplate.etag);
      })
      .catch(err => {
        console.error('Unable to publish template.');
        console.error(err);
      });
}
// [END publish_template]
// export gcloud=/Users/vee/development/google-cloud-sdk/bin

// [START update_template]
async function getAndUpdateTemplate() {
  const config = admin.remoteConfig();
  try {
    // Get current active template.
    const template = await config.getTemplate();
    // Set "android_en" condition.
    template.conditions.push({
      name: 'android_en',
      expression: 'device.os == \'android\' && device.country in [\'us\', \'uk\']',
      tagColor: 'BLUE',
    });
    // Set "header_text" parameter.
    template.parameters['header_text'] = {
      defaultValue: {
        value: 'A Gryffindor must be brave, talented and helpful.'
      },
      conditionalValues: {
        android_en: {
          value: 'A Droid must be brave, talented and helpful.'
        },
      },
    };
    // Validate template after updating it.
    await config.validateTemplate(template);
    // Publish updated template.
    const updatedTemplate= await config.publishTemplate(template);
    console.log('Latest etag: ' + updatedTemplate.etag);
  } catch (err) {
    console.error('Unable to get and update template.');
    console.error(err);
  }
}
// [END update_template]

const action = process.argv[2];

if (action && action === 'get') {
  getTemplate();
} else if (action && action === 'publish') {
  publishTemplate();
} else if (action && action === 'update') {
  getAndUpdateTemplate();
} else {
  console.log(
`
Invalid command. Please use one of the following:
node index.js get
node index.js publish
node index.js update
`
  );
}
