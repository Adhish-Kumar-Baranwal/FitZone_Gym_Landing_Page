import nodemailer from "nodemailer";

const sendMail = async ({ to, subject, text }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GYM_OWNER_MAIL_ID,
      pass: process.env.MAIL_ID_PASSWORD,
    },
  });

  await transporter.verify();

  await transporter.sendMail({
    from: process.env.GYM_OWNER_MAIL_ID,
    to,
    subject,
    text,
  });
};

export { sendMail };
