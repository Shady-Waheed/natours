// eslint-disable-next-line import/no-extraneous-dependencies
const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) creating a transporter
  const transport = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'e92e4fe38842f1',
      pass: '1b11c40d7a754b',
    },
  });
  // 2) define the email options
  const mailOptions = {
    from: 'shekohitler@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html:
  };
  //   3) send the email
  await transport.sendMail(mailOptions);
};

module.exports = sendEmail;
