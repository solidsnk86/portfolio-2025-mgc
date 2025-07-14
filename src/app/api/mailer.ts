import nodemailer from "nodemailer";
import { template } from "./template/template";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) return Response.json({ mesage: "Falta el email en el cuerpo" });

  const gmail = process.env.NEXT_PUBLIC_GMAIL_USER || "calcagni.gabriel86@gmail.com"
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmail,
        pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: gmail,
      to: email,
      subject: "Gracias por contactarme",
      html: template({ name: "", email: gmail  }),
    };

    await transporter.sendMail(mailOptions);
    return {
      success: true,
      message: `Se ha enviado un correo a ${email}. No olvides revisar tu bandeja de entrada y, si no lo ves, échale un vistazo a la carpeta de SPAM.`,
      status: 200,
    };
  } catch (error) {
    return Response.json(
      { message: "Server error: " + (error as TypeError).message },
      { status: 500 }
    );
  }
}
