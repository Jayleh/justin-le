const nodemailer = require('nodemailer');
const keys = require('../config/keys');
const contactTemplate = require('./emailTemplates/contactTemplate');

module.exports = app => {
  app.post('/api/email', (req, res) => {
    const { name, email, subject, message } = req.body;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: keys.googleUsername,
        pass: keys.googlePassword
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: `"${name}" <${email}>`, // sender address
      to: keys.defaultRecipient, // list of receivers
      subject: subject, // Subject line
      text: message, // plain text body
      html: contactTemplate(req.body) // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log(`Message sent: ${info.messageId}`);
      // console.log(info.envelope.from); // foo@example.com
    });

    res.send({ message: 'Hi there!' });
  });

  app.get('/api/test', (req, res) => {
    res.send({ message: 'Hi there!' });
  });
};
