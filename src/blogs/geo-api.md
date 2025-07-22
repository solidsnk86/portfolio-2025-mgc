22 de Julio de 2025

# 🌐 Solid Geolocation: una API para ubicarte en el mundo

En el desarrollo web moderno, muchas veces nos olvidamos del enorme potencial que tiene la **geolocalización** para crear experiencias más personalizadas y útiles.  
Por eso decidí crear **Solid Geolocation**, una API sencilla pero poderosa para obtener información de ubicación basada en tu dirección IP o en tus coordenadas GPS.  

Hoy te cuento un poco sobre cómo surgió la idea, cómo funciona y qué la hace especial.

---

## ✨ La motivación

Muchas aplicaciones necesitan saber dónde estás: para mostrarte servicios cercanos, calcular distancias, ajustar horarios a tu zona o simplemente para ofrecer una experiencia más local.  
Pero no siempre es fácil acceder a una API gratuita, clara y rápida que devuelva exactamente los datos que necesitas.

Con esa premisa nació **Solid Geolocation**:  
una API REST construida con **Node.js** y **Express**, que devuelve información detallada en formato JSON sobre tu ubicación actual.

---

## 🧭 ¿Qué hace Solid Geolocation?

En esencia, la API ofrece dos formas de consultar:

- Por **IP pública**: simplemente accediendo al endpoint `/location`, la API detecta tu dirección IP y devuelve un objeto con ciudad, país, coordenadas, idioma del sistema, navegador que usás… incluso con el emoji de la bandera.  
- Por **coordenadas GPS**: si tu aplicación ya obtiene la latitud y longitud (por ejemplo, usando la API de geolocalización del navegador), podés consultar al endpoint `/geolocation` con esos parámetros y recibir información enriquecida de esa posición exacta.

En ambos casos, la respuesta es clara y amigable, ideal para integrarla en un frontend o en una aplicación móvil.

---

## 🚀 Pensada para desarrolladores

Uno de los objetivos desde el principio fue que fuera cómoda para los desarrolladores.  
Por eso:

- No necesitas autenticación.
- Responde rápido.
- Incluye un limitador de tasa para proteger el servidor, pero suficientemente generoso para testing y desarrollo.
- Devuelve datos fáciles de consumir: ciudad, departamento, provincia, país, coordenadas, distancia a la plaza central y hasta el aeropuerto más cercano.

Me aseguré de que las respuestas incluyeran no solo los datos técnicos, sino también detalles útiles para usuarios finales.

---

## 📊 Datos curiosos

Uno de los puntos más interesantes al desarrollar esta API fue calcular también qué tan lejos está el usuario de lugares emblemáticos, como la **plaza central** de su ciudad o el **aeropuerto más cercano**.  
Estos pequeños detalles pueden hacer que una app sea más útil para turistas, repartidores, viajeros frecuentes, etc.

---

## 🌍 Probarla en vivo

La API está desplegada y lista para usarse en cualquier proyecto. Podés probarla ahora mismo visitando:

👉 [https://solid-geolocation.vercel.app/location](https://solid-geolocation.vercel.app/location)

O, si ya tenés tus propias coordenadas GPS, podés probar con el endpoint `/geolocation`.

---

## 👨‍💻 ¿Qué sigue?

Queda mucho por explorar: más cobertura internacional, formatos adicionales de respuesta, e integración con bases de datos externas para enriquecer aún más los datos devueltos.

Mi objetivo es mantenerla simple pero flexible, para que cualquiera que necesite geolocalización rápida la pueda usar sin dolores de cabeza.

---

**@solidSnk86 — 2024**

¡Espero que te resulte útil y, si tenés ideas o feedback, siempre son bienvenidos!
