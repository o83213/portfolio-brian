import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "o83213@gmail.com", // generated ethereal user
      pass: "ptxgkyfamfdqouft" // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });
}

const transporter = createTransporter();

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();
  const mailOptions = {
    from: email, // sender address
    to: "o83213@gmail.com", // list of receivers
    subject: subject, // Subject line
    text: message, // plain text body
    html: `<h3>Hello Brain, I am ${name} with email: ${email}</h3>
    <p>${message}</p>
    <p>Best regards</p>
    `
  };
  try {
    await transporter.sendMail(mailOptions, (err, success) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Email send success!");
      }
    });
    return NextResponse.json({ message: "Email send success!" });
    // NextResponse.json({ message: "Email send success!" });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {},
      { status: 500, statusText: "Email send failed!" }
    );
  }
}
