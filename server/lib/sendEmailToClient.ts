import nodemailer from "nodemailer";

const fromEmail = process.env.FROM_EMAIL;

const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: fromEmail,
    pass: process.env.PASSWORD,
  },
});

export const sendEmailToClient = (email: string) => {
  const mailOptions = {
    from: fromEmail,
    to: email,
    subject: "Congrats! Your purchase using Light Locker was successful!",
    text: `You can email at ${fromEmail} or call ${process.env.PHONE_NUMBER} for more information regarding the status of your order, or for a refund`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    err ? console.error(err) : console.log("Email sent: " + info.response);
  });
};
