import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type JoinPayload = {
  name?: string;
  email?: string;
  contactNumber?: string;
  branch?: string;
  yearOfStudy?: string;
  interest?: string;
  skills?: string;
  github?: string;
  message?: string;
};

const requiredFields: Array<keyof JoinPayload> = [
  'name',
  'email',
  'contactNumber',
  'branch',
  'yearOfStudy',
  'interest',
  'skills',
];

export async function POST(request: Request) {
  const body = (await request.json()) as JoinPayload;

  const missingField = requiredFields.find((field) => !body[field]?.trim());
  if (missingField) {
    return NextResponse.json({ error: `Missing required field: ${missingField}` }, { status: 400 });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipient = process.env.JOIN_FORM_RECIPIENT ?? 'rdxdhruv0@gmail.com';

  if (!smtpUser || !smtpPass) {
    return NextResponse.json(
      { error: 'Email delivery is not configured yet. Add SMTP_USER and SMTP_PASS to .env.local.' },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const lines = [
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    `Contact Number: ${body.contactNumber}`,
    `Branch: ${body.branch}`,
    `Year of Study: ${body.yearOfStudy}`,
    `Primary Interest: ${body.interest}`,
    `Skills: ${body.skills}`,
    `GitHub / Portfolio: ${body.github?.trim() || 'Not provided'}`,
    `Why Deadlock Devs: ${body.message?.trim() || 'Not provided'}`,
  ];

  await transporter.sendMail({
    from: smtpUser,
    to: recipient,
    replyTo: body.email,
    subject: `Deadlock Devs Join Form | ${body.name}`,
    text: lines.join('\n'),
    html: `
      <div style="font-family:Segoe UI,Arial,sans-serif;line-height:1.7;color:#101826">
        <h2>Deadlock Devs Join Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(body.name ?? '')}</p>
        <p><strong>Email:</strong> ${escapeHtml(body.email ?? '')}</p>
        <p><strong>Contact Number:</strong> ${escapeHtml(body.contactNumber ?? '')}</p>
        <p><strong>Branch:</strong> ${escapeHtml(body.branch ?? '')}</p>
        <p><strong>Year of Study:</strong> ${escapeHtml(body.yearOfStudy ?? '')}</p>
        <p><strong>Primary Interest:</strong> ${escapeHtml(body.interest ?? '')}</p>
        <p><strong>Skills:</strong> ${escapeHtml(body.skills ?? '')}</p>
        <p><strong>GitHub / Portfolio:</strong> ${escapeHtml(body.github?.trim() || 'Not provided')}</p>
        <p><strong>Why Deadlock Devs:</strong> ${escapeHtml(body.message?.trim() || 'Not provided')}</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
