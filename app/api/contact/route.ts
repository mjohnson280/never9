import { Resend } from 'resend';
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

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Server email configuration is incomplete: RESEND_API_KEY' },
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

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'Never9 <onboarding@resend.dev>',
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
