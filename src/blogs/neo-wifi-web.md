22 de Julio de 2025

# 🚀 Creando Neo-WiFi: conectividad inteligente para todos

En un mundo cada vez más conectado, encontrar acceso gratuito a Internet puede ser la clave para estudiar, trabajar o simplemente mantenerse en contacto.  
Por eso decidí crear **Neo-WiFi**, una aplicación web pensada para localizar de manera precisa y sencilla los puntos de acceso WiFi públicos más cercanos en distintas ciudades de Argentina 🇦🇷 … y más allá.  

En este artículo quiero contarte cómo fue el proceso de creación, qué tecnologías utilicé y cuáles son las características que hacen de Neo-WiFi una herramienta única para la conectividad inteligente.

---

## ✨ La idea detrás de Neo-WiFi

Todo comenzó con una necesidad concreta: facilitar el acceso a las redes WiFi públicas del Gobierno de la Provincia de San Luis.  
Pero no quise quedarme solo en eso; quería crear una aplicación que pudiera escalar y servir también para otras provincias y hasta otros países, integrando un **mapa inteligente de antenas** y ofreciendo siempre la mejor experiencia para el usuario.

Así nació **Neo-WiFi Web**, pensada para ayudarte a encontrar los puntos más cercanos, calcular las distancias con precisión y guiarte paso a paso gracias a un asistente de inteligencia artificial integrado.

---

## 🧩 Cómo funciona

La app ofrece un conjunto de características diseñadas para resolver el problema real de encontrar WiFi en movimiento:

### 📍 Geolocalización precisa

Implementé una **API propia** con un mapeo en JSON de las provincias y antenas públicas.  
Además, usé la fórmula matemática de **Haversine** para calcular las distancias entre tu ubicación y cada antena, logrando una precisión sorprendente.  
Claro, siempre respetando la privacidad y solicitando el permiso de geolocalización del navegador.

### 🗺️ Mapeo inteligente

Actualmente cubre localidades de **San Luis**, **Buenos Aires**, **Córdoba**, **Mendoza**, **San Juan**, **Corrientes**, **Tucumán**, y otros puntos en universidades, hospitales y espacios públicos.  
Neo-WiFi te muestra los **3 puntos más cercanos**, con la distancia exacta a cada uno.

### 🖥️ También en escritorio

Neo-WiFi no es solo una app web: también desarrollé una **aplicación de escritorio para Windows**, pensada especialmente para automatizar la conexión en sistemas TP-LINK en las redes públicas de San Luis.

### 🤖 Asistente IA integrado

Como extra, agregué un pequeño asistente basado en inteligencia artificial, que ayuda a entender cómo usar la app, disponible en varios idiomas y compatible con micrófono para entrada por voz.  
Una experiencia más humana, menos fría.

---

## 🔨 Las tecnologías detrás

Para hacer realidad Neo-WiFi, combiné varias herramientas y frameworks modernos:

- 📐 **Fórmula de Haversine** para los cálculos geográficos.
- 🌐 **API REST propia**, alimentada por un mapeo JSON de provincias y antenas.
- ⚛️ **Next.js** para el frontend web.
- 🖥️ **Electron.js** para la versión de escritorio.
- 🤖 **Cohere AI** para el asistente inteligente.

La app está pensada para escalar y para ser mantenida con facilidad, con una arquitectura clara y sencilla.

---

## 🌍 Pruébala en vivo

Si querés probar Neo-WiFi y ver cómo puede ayudarte a encontrar WiFi gratuito cerca de vos, visitá la versión web:  
👉 [https://neo-wifi.vercel.app/](https://neo-wifi.vercel.app/)

Y si preferís la versión de escritorio, no dudes en escribirme para más detalles.

---

<div align="center">
  <p><strong>SolidSnk86 ©2025</strong></p>
</div>
