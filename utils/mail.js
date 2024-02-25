import nodemailer from "nodemailer";

export const sendEmail = async (details) => {
  const transporter = nodemailer.createTransport({
    host: process.env.ELASTIC_EMAIL_SERVER,
    port: process.env.ELASTIC_EMAIL_PORT,
    auth: {
      user: process.env.ELASTIC_EMAIL_USERNAME,
      pass: process.env.ELASTIC_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    // from: `Mubashir Ul Hassan <${process.env.EMAIL_FROM}>`,
    from: `${process.env.EMAIL_FROM}`,
    to: "uzairulhassan24@gmail.com",
    subject: `Message from ${details.name}`,
    text: details.description,
  };

  await transporter.sendMail(mailOptions);
};
