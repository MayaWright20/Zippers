"use strict";
const twilio = require('twilio');
const accountSid = `AC${process.env.ACCOUNT_SID}`;
const authToken = `${process.env.AUTH_TOKEN}`;
module.exports = new twilio.Twilio(accountSid, authToken);
//# sourceMappingURL=twilio.js.map