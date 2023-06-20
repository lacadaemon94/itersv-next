import nodemailer from "nodemailer";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { fname, lname, email, phone, service, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtppro.zoho.in",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_ZOHO_USER,
      pass: process.env.NEXT_PUBLIC_ZOHO_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_ZOHO_USER,
    to: process.env.NEXT_PUBLIC_ZOHO_RECIPIENT_EMAIL,
    subject: `New message from ${fname} ${lname}`,
    text: `Name ${fname}\n Last Name: ${lname}\n Email: ${email}\n Phone: ${phone}\n Service: ${service}\n Message: ${message}.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Message sent succesfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
