import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { Email } from './email';

export async function sendMail(name: string, email: string, message: string) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const emailHtml = render(Email({ url: "https://example.com" }));

  let mailOptions = {
    from: `"Sharull API" <${process.env.NODEMAILER_EMAIL}>`,
    to: process.env.NODEMAILER_EMAIL,
    subject: `${name} has sent you an email (${email})`,
    html: emailHtml,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      //@ts-ignore
      throw new Error(error);
    } else {
      return true;
    }
  });
}
