const number = "+5492665290020";
const message =
  "👋 ¡Hola, Gabriel! Me interesa conocer más sobre tus servicios. ¿Podrías contactarme para ayudarme con mi proyecto? 😊...Gracias!";
const encodedMessage = encodeURIComponent(message);

export const template = ({ name, email }: { name: string; email: string }) => `
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gracias por contactarte</title>
  </head>
  <body style="font-family: Verdana, Geneva, Tahoma, sans-serif; background-color: #f5f5f5; margin: 0; padding: 0;">
    <div style="background-color: #ffffff; max-width: 600px; margin: 40px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="text-align: center; color: #333; margin-bottom: 20px; font-size: 20px; font-weight: bold;">¡Gracias por tu mensaje!</h2>
      <div style="color: #555; line-height: 1.6; font-size: 15px;">
        <p>Hola ${name},</p>
        <p>Gracias por escribirme desde mi portafolio web.</p>
        <p>
          Si querés contarme más detalles, no dudes en escribirme directamente
          por esta misma vía, o también podés contactarme por alguno de los
          siguientes medios:
        </p>
        <div style="text-align: center; margin-top: 20px;">
          <a href="https://wa.me/${number}?text=${encodedMessage}" target="_blank" style="margin: 0 8px; text-decoration: none; color: #007bff; font-size: 14px;">WhatsApp</a>
          ✦
          <a href="https://www.linkedin.com/in/gabriel-calcagni/" target="_blank" style="margin: 0 8px; text-decoration: none; color: #007bff; font-size: 14px;">LinkedIn</a>
          ✦
          <a href="mailto:${email}" style="margin: 0 8px; text-decoration: none; color: #007bff; font-size: 14px;">Email</a>
        </div>
        <p style="margin-top: 20px">
          Mientras tanto, si querés volver a visitar mi portafolio y conocer más
          sobre mis proyectos, podés hacerlo aquí:
        </p>
        <div style="display: flex; justify-content: center; margin: 20px 0;">
          <a href="https://tusitio.com" target="_blank" style="display: inline-block; padding: 12px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 4px; font-size: 14px;">Ver portafolio</a>
        </div>
        <p>Quedo atento a tu respuesta.</p>
        <p>Saludos,<br />Gabriel</p>
      </div>
      <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #999;">
        Este mensaje fue enviado desde mi portafolio web.
      </div>
    </div>
  </body>
</html>
`;
