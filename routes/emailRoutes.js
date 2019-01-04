const nodemailer = require('nodemailer');
const keys = require('../config/keys');

module.exports = app => {
  app.post('/api/email', (req, res) => {
    // const { name, email, subject, body } = req.body;

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

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Test Tester 👻" <foo@example.com>', // sender address
      to: '', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log(`Message sent: ${info.messageId}`);
      // Preview only available when sending through an Ethereal account
      // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

    console.log('message sent');

    res.send({ message: 'Hi there!' });
  });

  app.get('/api/test', (req, res) => {
    res.send({ message: 'Hi there!' });
  });
};
