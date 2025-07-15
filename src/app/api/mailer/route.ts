import nodemailer from "nodemailer";
import { template } from "./template/template";

export async function POST(req: Request) {
  try {
    const { name, email, challenge } = await req.json();

    if (!name && !email)
      return Response.json(
        {
          message:
            "Faltan completar los campos requeridos: " + name + " " + email,
        },
        { status: 400 }
      );

    const gmail =
      process.env.GAMIL_APP_USER || "calcagni.gabriel86@gmail.com";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmail,
        pass: process.env.GMAIL_APP_KEY,
      },
    });

    const mailOptions = {
      from: gmail,
      to: email,
      subject: "Gracias por contactarme",
      html: template({ name: name, email: gmail, challenge }),
    };

    await transporter.sendMail(mailOptions);
    return Response.json({
      success: true,
      message: `Te he enviado un correo a ${email}. No olvides revisar tu bandeja de entrada y, si no lo ves 👀, échale un vistazo a la carpeta de SPAM.`,
      status: 200,
    });
  } catch (error) {
    return Response.json(
      { message: "Error en el servidor" + " " + error },
      { status: 500 }
    );
  }
}
