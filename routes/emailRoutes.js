const Mailer = require('../services/Mailer');
const contactTemplate = require('../services/emailTemplates/contactTemplate');

module.exports = app => {
  app.post('/api/email', async (req, res) => {
    // const { name, email, subject, message } = req.body;

    // Creat mailer object
    const mailer = new Mailer(req.body, contactTemplate(req.body));

    try {
      // Send email!
      await mailer.send();

      res.send({ status: 'successful' });
    } catch (err) {
      res.status(500).send(err);
    }
  });
};
