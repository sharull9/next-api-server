import { createTransport } from "nodemailer";

export async function sendMail(
  name: string,
  email: string,
  message: string,
  toMail?: string
) {
  let transporter = createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  let mailOptions = {
    from: `"Sharull API" <${process.env.NODEMAILER_EMAIL}>`,
    to: `arafatulla124@gmail.com`,
    subject: `${name} has sent you an email (${email})`,
    text: message,
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
