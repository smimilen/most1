import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (req: Request) => {
  try {
    const { name, phone } = await req.json();

    if (!name || !phone) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Сайт" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      subject: 'Новая заявка с сайта',
      text: `Имя: ${name}\nТелефон: ${phone}`,
      html: `<p><strong>Имя:</strong> ${name}</p><p><strong>Телефон:</strong> +${phone}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Ошибка отправки письма' },
      { status: 500 }
    );
  }
};
