const number = "+5492665290020";
const message =
  "👋 ¡Hola, Gabriel! Me interesa conocer más sobre tus servicios. ¿Podrías contactarme para ayudarme con mi proyecto? 😊...Gracias!";

export const template = ({
  name,
  email,
  challenge,
}: {
  name: string;
  email: string;
  challenge: string;
}) => `
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gracias por contactarte</title>
  </head>
  <body style="font-family: 'Segoe UI', Roboto, Verdana, sans-serif; background-color: #eef2f7; margin: 0; padding: 0;">
    <div style="background-color: #fff; max-width: 600px; margin: 40px auto; padding: 30px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
      <h2 style="text-align: center; color: #2c3e50; margin-bottom: 24px; font-size: 22px; font-weight: 600;">¡Gracias por tu mensaje!</h2>
      <div style="color: #4a4a4a; line-height: 1.7; font-size: 15px;">
        <p>Hola <strong>${name}</strong>,</p>
        <p>Gracias por escribirme desde mi portafolio web.</p>
        <p>
          Si querés enviarme los detalles, he adjuntado tu mensaje para Whatsapp o Gmail! No dudes en escribirme directamente
          por esta misma vía, o también podés contactarme por alguno de los
          siguientes medios:
        </p>
        <div style="text-align: center; margin-top: 20px;">
          <a href="https://wa.me/${number}?text=${encodeURIComponent(
  challenge || message
)}" target="_blank" style="margin: 0 6px; text-decoration: none; color: #3498db; font-size: 14px; transition: color 0.3s;">WhatsApp</a>
          <span style="color: #ccc;">•</span>
          <a href="https://www.linkedin.com/in/gabriel-calcagni/" target="_blank" style="margin: 0 6px; text-decoration: none; color: #3498db; font-size: 14px; transition: color 0.3s;">LinkedIn</a>
          <span style="color: #ccc;">•</span>
          <a href="mailto:${email}?subject=${encodeURIComponent(
  "Necesito tus servicios"
)}&body=${encodeURIComponent(
  challenge || message
)}" style="margin: 0 6px; text-decoration: none; color: #3498db; font-size: 14px; transition: color 0.3s;">Email</a>
        </div>

        <p style="margin-top: 24px">
          Mientras tanto, si querés volver a visitar mi portafolio y conocer más
          sobre mis proyectos, podés hacerlo aquí:
        </p>

        <div style="text-align: center; margin: 20px 0;">
          <a href="https://tusitio.com" target="_blank" style="display: inline-block; padding: 12px 24px; background-color: #3498db; color: #fff; text-decoration: none; border-radius: 6px; font-size: 14px; transition: background-color 0.3s;">Ver portafolio</a>
        </div>

        <p>Quedo atento a tu respuesta.</p>
        <p>Saludos,<br /><strong>Gabriel</strong></p>
      </div>

      <div style="margin-top: 30px; text-align: center; font-size: 11px; color: #aaa;">
        Este mensaje fue enviado desde mi portafolio web.
      </div>
    </div>
  </body>
</html>
`;
