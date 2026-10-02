import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

export async function POST(request: NextRequest) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || name.length > 120 || !validEmail || email.length > 254 || !message || message.length > 4000) {
    return NextResponse.json({ message: "Enter a name, a valid email, and a message under 4,000 characters." }, { status: 400 });
  }

  const { NEXT_URL_SMTP_USER, NEXT_URL_SMTP_PASS, NEXT_URL_RECEIVER_EMAIL } = process.env;
  if (!NEXT_URL_SMTP_USER || !NEXT_URL_SMTP_PASS || !NEXT_URL_RECEIVER_EMAIL) {
    return NextResponse.json({ message: "Email is not configured. Please use the email link below." }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_URL_SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.NEXT_URL_SMTP_PORT) || 587,
    secure: process.env.NEXT_URL_SMTP_SECURE === "true",
    auth: { user: NEXT_URL_SMTP_USER, pass: NEXT_URL_SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: NEXT_URL_SMTP_USER,
      to: NEXT_URL_RECEIVER_EMAIL,
      replyTo: email,
      subject: `Portfolio enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return NextResponse.json({ message: "Message sent." });
  } catch {
    return NextResponse.json({ message: "Email delivery failed. Please use the email link below." }, { status: 502 });
  }
}