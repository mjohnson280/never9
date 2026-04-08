import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const MAX_MESSAGE_LENGTH = 1500;
const TO_EMAIL = 'mjohnson280@gmail.com';
const SUBJECT = 'Never9 submission';

type ContactPayload = {
  name?: string;
  industry?: string;
  message?: string;
  email?: string;
  phone?: string;
};

function getMissingEnv(): string[] {
  const requiredVars = [
    'SMTP_HOST',
    'SMTP_PORT',
    'SMTP_USER',
    'SMTP_PASS',
    'SMTP_FROM',
  ] as const;

  return requiredVars.filter((key) => !process.env[key]);
}

export async function POST(request: Request) {
  const missing = getMissingEnv();
  if (missing.length > 0) {
    return NextResponse.json(
      {
        error: `Server email configuration is incomplete: ${missing.join(', ')}`,
      },
      { status: 500 }
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = payload.name?.trim() ?? '';
  const industry = payload.industry?.trim() ?? '';
  const message = payload.message?.trim() ?? '';
  const email = payload.email?.trim() ?? '';
  const phone = payload.phone?.trim() ?? '';

  if (!name || !industry || !message || !email || !phone) {
    return NextResponse.json(
      { error: 'All fields are required.' },
      { status: 400 }
    );
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.` },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: TO_EMAIL,
      subject: SUBJECT,
      replyTo: email,
      text: [
        'New Never9 contact submission',
        '',
        `Name: ${name}`,
        `Industry: ${industry}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        '',
        'Pain point submission:',
        message,
      ].join('\n'),
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to send submission email.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
