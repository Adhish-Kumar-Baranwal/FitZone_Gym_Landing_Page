import nodemailer from "nodemailer";

const sendMail = async ({ to, subject, text }) => {
  console.log("Creating Brevo transporter...");

  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GYM_OWNER_MAIL_ID,
      pass: process.env.MAIL_ID_PASSWORD,
    },
  });

  // console.log("Verifying Brevo SMTP connection...");

  // await transporter.verify();

  // console.log("Brevo SMTP connection verified");
  console.log("Sending email through Brevo...");

  await transporter.sendMail({
    from: process.env.GYM_OWNER_MAIL_ID_REAL,
    to: process.env.GYM_OWNER_MAIL_ID_ALIAS,
    subject,
    text,
  });

  console.log("Email sent successfully");
};

export { sendMail };
