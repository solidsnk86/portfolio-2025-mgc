import nodemailer from "nodemailer";
import { HTMLTemplate } from "./template/HTMLTemplate";
import { contactSchema } from "@/shared/utils/contactSchema";

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const validation = contactSchema.safeParse(payload);

    if (!validation.success) {
      return Response.json(
        { message: "Datos invalidos", success: false },
        { status: 400 }
      );
    }

    const { name, email, challenge } = validation.data;

    if (req.method !== "POST") return Response.json({ message: "Método no permitido" }, { status: 405 })

    const myGmail = "calcagni.gabriel86@gmail.com";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: myGmail,
        pass: process.env.GMAIL_USER_PASSWORD,
      },
    });

    const mailOptions = {
      from: myGmail,
      to: email,
      subject: name + " gracias por contactarme",
      html: HTMLTemplate({ name: name, email: myGmail, challenge }),
    };

    await transporter.sendMail(mailOptions);
    return Response.json({
      success: true,
      message: `Te he enviado un correo a ${email}. No olvides revisar tu bandeja de entrada y, si no lo ves 👀, échale un vistazo a la carpeta de SPAM.`,
      status: 200,
    });
  } catch (error) {
    return Response.json(
      { message: "Server" + " " + error, success: false },
      { status: 500 }
    );
  }
}
