import * as dotenv from "dotenv";
import nodemailer, { TransportOptions } from "nodemailer";
import ejs from "ejs";

dotenv.config();

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
} as TransportOptions);

export const sendEmail = (template: string, subject: string, to: string[] | string, data: object) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html: ejs.render(template, data),
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Successfully sent", info);
  });
};
