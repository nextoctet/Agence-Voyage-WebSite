/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';

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
      return NextResponse.json({ error: 'fullName, email, subject and message are required' }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === 'true';

    const missing = [
      !host && 'SMTP_HOST',
      !user && 'SMTP_USER',
      !pass && 'SMTP_PASS',
    ].filter(Boolean);

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `SMTP configuration missing on server: ${missing.join(', ')}` },
        { status: 500 }
      );
    }
    const nodemailerModule: any = await import('nodemailer');
    const createTransport = nodemailerModule.createTransport ?? nodemailerModule.default?.createTransport;

    const transporter = createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    const to = process.env.EMAIL_TO || 'contact@welivemorocco.com';
    const from = process.env.EMAIL_FROM || user;
    const replyTo = email;
    const subjectLine = subject ? `Website: ${subject}` : 'Nouveau message depuis le site Web';

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
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = (err as any)?.message || String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
