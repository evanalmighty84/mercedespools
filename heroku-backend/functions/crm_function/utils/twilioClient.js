// /server/crm_function/utils/twilioClient.js
const twilio = require('twilio');

const accountSid = 'AC910995dd2522a9a1a7e86e2b9490c986'; // Twilio Account SID
const authToken = '407fb49d930f554949b242f7c329e59d';     // Twilio Auth Token
const messagingServiceSid = 'MG975e1e2e596d57c9b51a829862531e17'; // Messaging SID

const client = twilio(accountSid, authToken);

module.exports = { client, messagingServiceSid };
