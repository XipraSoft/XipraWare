const nodemailer = require('nodemailer');
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

console.log('📩 Mailer.js loaded');
console.log('EMAIL_USERNAME:', process.env.EMAIL_USERNAME);
console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '✔️ present' : '❌ missing');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD, // Use environment variables for security
  },
});

const sendOTPEmail = async (to, otp) => {
  const mailOptions = {
    from: `"XipraWare Support" <${process.env.EMAIL_USERNAME}>`,
    to,
    subject: 'Your OTP Code',
    text: `Your OTP is: ${otp}. It will expire in 10 minutes.`,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendOTPEmail };
