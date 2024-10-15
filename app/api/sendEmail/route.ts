import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configurar POST para recibir el contacto del formulario
export async function POST(req: Request) {
  const { nombre, email, mensaje } = await req.json();

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: 'Faltan campos en el formulario' }, { status: 400 });
  }

  // Configuración del transporte SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'miltonmdecampos@gmail.com',
      pass: 'edio eplb dmqs ffgv', // Usa una App Password en lugar de tu contraseña real
    },
  });

  // Configurar el contenido del email
  const mailOptions = {
    from: email,
    to: 'pathwalkingtechnology@gmail.com',
    subject: `Nuevo mensaje de ${nombre}`,
    text: mensaje,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Correo enviado exitosamente' }, { status: 200 });
  } catch (error) {
    console.error('Error enviando el correo:', error);
    return NextResponse.json({ error: 'Error enviando el correo' }, { status: 500 });
  }
}
