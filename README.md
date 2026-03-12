# 📁 Portfolio Web

Bienvenido a mi **portafolio personal**. Este sitio fue creado para presentar mis proyectos, experiencia profesional y conocimientos en desarrollo web, utilizando tecnologías modernas y buenas prácticas.

El diseño es completamente **responsivo**, limpio y funcional, con un toque elegante gracias a la integración de **íconos 3D** y soporte para contenido enriquecido en Markdown. Además, incluye un asistente con inteligencia artificial para ayudar a los visitantes a navegar y entender las funcionalidades.

---

## ✨ Características destacadas

- ✅ Diseño **responsivo**: Se adapta perfectamente a cualquier dispositivo, desde móviles hasta pantallas grandes.
- ✅ Estilo **elegante y moderno**: Tipografías, colores y disposición pensados para una experiencia agradable.
- ✅ **Íconos 3D**: Integración de gráficos 3D para dar un aspecto visual distintivo.
- ✅ Contenido en **Markdown enriquecido**: Los blogs se escriben en archivos `.md`, son leídos por la API implementada con `node:fs` y renderizados dinámicamente con un renderer de Markdown para una presentación bien formateada.
- ✅ Integración con **GitHub API**: Se consume la API de GitHub para leer los README de los proyectos destacados y mostrar información actualizada de cada proyecto directamente desde el repositorio.
- ✅ **Dark mode con React Context**: La aplicación incluye un modo oscuro configurable implementado mediante `createContext` de React para una mejor experiencia de usuario.
- ✅ Envío automático de emails: Cuando alguien completa el formulario de contacto, se envía automáticamente un correo usando `nodemailer`.
- ✅ **Arquitectura Screaming**: Estructura de carpetas clara y entendible siguiendo el patrón *Screaming Architecture*, con todo el código altamente **componetizado** para facilitar mantenimiento y escalabilidad.

---

## 🚀 Tecnologías y dependencias principales

Este proyecto fue desarrollado sobre **Next.js 15**, y hace uso de las siguientes herramientas y librerías clave:

- [Next.js](https://nextjs.org/) `15.3.5` — Framework para construir aplicaciones React robustas y optimizadas.
- [React](https://reactjs.org/) `19.0.0` — Biblioteca para interfaces de usuario declarativas y componibles.
- [React DOM](https://react.dev/) `19.0.0` — Manejador de renderizado para React en el navegador.
- [Lucide React](https://lucide.dev/) `0.525.0` — Íconos SVG modernos y personalizables para React.
- [Supabase](https://supabase.com/) `2.46.1` — Backend como servicio, con base de datos.
- [Nodemailer](https://nodemailer.com/) `7.0.5` — Envío de correos electrónicos mediante Node.js.

También incluye soporte para contenido Markdown con los siguientes plugins:

- [`react-markdown`](https://github.com/remarkjs/react-markdown) `10.1.0`
- [`remark-gfm`](https://github.com/remarkjs/remark-gfm) `4.0.1`
- [`rehype-raw`](https://github.com/rehypejs/rehype-raw) `7.0.0`
- [`rehype-slug`](https://github.com/rehypejs/rehype-slug) `6.0.0`
- [`rehype-highlight`](https://github.com/rehypejs/rehype-highlight) `7.0.2`
- [`rehype-autolink-headings`](https://github.com/rehypejs/rehype-autolink-headings) `7.1.0`

---

## 📄 Instalación y ejecución

Para poner en marcha el proyecto en tu entorno local, seguí estos pasos:

1️⃣ **Clonar el repositorio:**

```bash
git clone https://github.com/solidsnk86/portfolio-2025-mgc.git
cd portfolio-2025-mgc
```

2️⃣ **Instalar las dependencias:**

El proyecto utiliza pnpm como gestor de paquetes recomendado. Si no lo tenés instalado, podés instalarlo siguiendo la guía oficial: pnpm.io

```bash
pnpm install
```

3️⃣ **Ejecutar el servidor de desarrollo:**

```bash
pnpm dev
```

El proyecto quedará disponible en tu navegador en: <strong>http://localhost:3000</strong>

## 🔐 Variables de entorno necesarias

Para que el proyecto funcione correctamente, asegurate de crear un archivo `.env` en la raíz del proyecto con las siguientes variables configuradas:

```env
# Token personal de GitHub para acceder a la API
GITHUB_TOKEN=<TU_TOKEN>

# URL de tu proyecto en Supabase
SUPABASE_URL=<TU_SUPABASE_URL>

# Clave pública anónima de Supabase
SUPABASE_ANNON_KEY=<TU_SUPABASE_ANNON_KEY>

# Usuario de Gmail (dirección de correo)
GMAIL_USER=<TU_CORREO_GMAIL>

# Contraseña de aplicación generada para Gmail
GMAIL_USER_PASSWORD=<TU_GMAIL_PASS_APPLICATION>
```

## 📝 Licencia

Este proyecto es de uso personal y educativo.
Los íconos 3D son cortesía de [3dicons](https://3dicons.co/) bajo licencia gratuita y fueron cuidadosamente integrados para darle al sitio un aspecto moderno y atractivo.

---

<div align="center">
@solidSnk86 - 2025
</div>