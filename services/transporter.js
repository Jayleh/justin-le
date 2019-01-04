const nodemailer = require('nodemailer');
const keys = require('../config/keys');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: keys.googleUsername,
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    type: 'OAuth2',
    user: keys.googleUsername,
    clientId: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    refreshToken: keys.refreshToken
  }
});

module.exports = transporter;
