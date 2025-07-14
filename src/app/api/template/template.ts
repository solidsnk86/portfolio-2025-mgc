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
    <style>
      body {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        background-color: #f5f5f5;
        margin: 0;
        padding: 0;
      }
      body:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 200px;
        background: linear-gradient(
          90deg,
          #00daf4 0%,
          #5edc99 10%,
          #3861bc 20%,
          #5606ef 30%,
          #d400a5 40%,
          #ee4c54 50%,
          #ff7800 60%,
          #ffaf00 70%,
          #ffc800 80%,
          #bada6d 100%
        );
        filter: blur(120px);
        border-radius: 999px;
        opacity: 0.6;
        z-index: -2;
      }
      .container {
        background-color: #ffffff;
        max-width: 600px;
        margin: 40px auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
      }
      .header {
        text-align: center;
        color: #333;
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: bold;
      }
      .content {
        color: #555;
        line-height: 1.6;
        font-size: 15px;
      }
      .button {
        display: inline-block;
        margin-top: 20px;
        padding: 12px 20px;
        background-color: #007bff;
        color: #fff;
        text-decoration: none;
        border-radius: 4px;
        font-size: 14px;
      }
      @property --rotate {
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
      }
      .fancy-button {
        --btn-color: #181818;
        --radius: 6px;
        --inset: 2px;
        --animation-duration: 2.1s;
        --light-color: var(--spark-color);
        position: relative;
        border: none;
        padding: 12px 16px;
        border-radius: var(--radius);
        inset: var(--inset);
        transition: 0.3s ease-in-out;
        cursor: pointer;
      }
      .fancy-button:hover {
        transform: scale(1.05);
        filter: drop-shadow(0 0 6px var(--color));
      }
      .light::after {
        background-color: var(--btn-color);
        content: "";
        position: absolute;
        inset: var(--inset);
        border-radius: var(--radius);
      }
      .light::before {
        content: "";
        position: absolute;
        rotate: 0;
        background: conic-gradient(
          from var(--rotate),
          #00daf4 0deg,
          #5edc99 36deg,
          #3861bc 72deg,
          #5606ef 108deg,
          #d400a5 144deg,
          #ee4c54 180deg,
          #ff7800 216deg,
          #ffaf00 252deg,
          #ffc800 288deg,
          #bada6d 324deg,
          #00daf4 360deg
        );
        inset: 0;
        border-radius: var(--radius);
        animation: rotate var(--animation-duration) linear infinite both;
      }
      .text {
        position: relative;
        font-weight: 600;
        color: #fff;
        z-index: 9;
      }
      @keyframes rotate {
        to {
          --rotate: 360deg;
        }
      }
      .footer {
        margin-top: 30px;
        text-align: center;
        font-size: 12px;
        color: #999;
      }
      .social-links {
        margin-top: 10px;
      }
      .social-links a {
        margin: 0 8px;
        text-decoration: none;
        color: #007bff;
        font-size: 14px;
      }
      .social-links a:hover {
        background: linear-gradient(
          90.42deg,
          #4ab1f1 0.58%,
          #566cec 37.22%,
          #d749af 73.87%,
          #ff7c51 112.26%
        );
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .color-span {
        background: linear-gradient(
          to right,
          #f06844 0%,
          #ee4c54 25%,
          #d45e95 50%,
          #9c6ca6 75%,
          #6583c1 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2 class="header">¡Gracias por tu mensaje!</h2>
      <div class="content">
        <p>Hola ${name},</p>
        <p>Gracias por escribirme desde mi portafolio web.</p>
        <p>
          Si querés contarme más detalles, no dudes en escribirme directamente
          por esta misma vía, o también podés contactarme por alguno de los
          siguientes medios:
        </p>
        <div class="social-links" style="text-align: center; margin-top: 20px">
          <a
            href="https://wa.me/${number}?text=${encodedMessage}"
            target="_blank"
            >WhatsApp</a
          >
          <span class="color-span">✦</span>
          <a
            href="https://www.linkedin.com/in/gabriel-calcagni/"
            target="_blank"
            >LinkedIn</a
          >
          <span class="color-span">✦</span>
          <a href="mailto:${email}">Email</a>
        </div>
        <p style="margin-top: 20px">
          Mientras tanto, si querés volver a visitar mi portafolio y conocer más
          sobre mis proyectos, podés hacerlo aquí:
        </p>
        <div style="display: flex; justify-content: center;">
        <button title="Ir al portafolio" class="fancy-button">
          <div class="light" />
          <span class="text">Ver portafolio</span>
        </button>    
        </div>
        <p>Quedo atento a tu respuesta.</p>
        <p>Saludos,<br />Gabriel</p>
      </div>
      <div class="footer">
        Este mensaje fué enviado automaticamente desde mi portafolio web.
      </div>
    </div>
  </body>
</html>
`;
