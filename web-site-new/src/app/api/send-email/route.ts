import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

type Body = {
  fullName?: string;
  email?: string;
  nationality?: string;
  phone?: string;
  travelingAs?: string;
  budget?: string;
  subject?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const body: Body = await req.json();

    const {
      fullName,
      email,
      nationality,
      phone,
      travelingAs,
      budget,
      subject,
      message,
    } = body;

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'fullName, email, subject and message are required' },
        { status: 400 }
      );
    }

    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const SMTP_SECURE = process.env.SMTP_SECURE === 'true';

    if (!SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        {
          error:
            'SMTP configuration not set on server. Please add SMTP_USER and SMTP_PASS to .env.local',
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const to = process.env.EMAIL_TO || 'contact@welivemorocco.com';
    const from = `${fullName} <${SMTP_USER}>`;
    const replyTo = email;
    const subjectLine = `Nouveau message depuis le site Web: ${subject}`;

    const html = `
      <h2>Nouveau message depuis le formulaire de contact</h2>
      <p><strong>Nom complet:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Nationalité:</strong> ${nationality || '-'} </p>
      <p><strong>Téléphone:</strong> ${phone || '-'} </p>
      <p><strong>Voyage en tant que:</strong> ${travelingAs || '-'} </p>
      <p><strong>Budget:</strong> ${budget || '-'} </p>
      <p><strong>Message:</strong></p>
      <div>${message.replace(/\n/g, '<br/>')}</div>
    `;

    await transporter.sendMail({
      from,
      replyTo,
      to,
      subject: subjectLine,
      text: `${fullName} (${email})\nNationalité: ${nationality || '-'}\nTéléphone: ${phone || '-'}\nVoyage en tant que: ${travelingAs || '-'}\nBudget: ${budget || '-'}\n\n${message}`,
      html,
    });

    return NextResponse.json({ ok: true, message: 'Email envoyé avec succès.' });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
