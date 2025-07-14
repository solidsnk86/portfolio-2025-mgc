import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) return Response.json({ mesage: "Falta el email en el cuerpo" });

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_GMAIL_USER,
        pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_GMAIL_USER,
      to: email,
      subject: "Gracias por contactarme",
      html: ``,
    };

    await transporter.sendMail(mailOptions);
    return {
      success: true,
      message: `Se ha enviado un correo a ${email}. No olvides revisar tu bandeja de entrada y, si no lo ves, échale un vistazo a la carpeta de SPAM. 🚀`,
      status: 200,
    };
  } catch (error) {
    return Response.json(
      { message: "Server error: " + (error as TypeError).message },
      { status: 500 }
    );
  }
}
