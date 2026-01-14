Noviembre 11, 2025

# Pascale Clothes: E-commerce para Tienda de Ropa en Chile

Desarrollo de una plataforma e-commerce para Pascale Clothes, tienda de ropa ubicada en un mall de Santiago, Chile. Construido con el stack PERN (PostgreSQL, Express, React, Node.js) e integración con Mercado Pago.

## Descripción del Proyecto

Pascale Clothes es una tienda de ropa física que buscaba expandir su presencia al mundo digital. El proyecto consistió en desarrollar una plataforma de comercio electrónico completa que permita a sus clientes explorar y comprar productos desde cualquier lugar de Chile.

La plataforma ofrece una experiencia de compra moderna e intuitiva, manteniendo la identidad visual de la marca y facilitando la gestión del inventario para la propietaria.

## Link del Proyecto:
Pueden ver el proyecto en línea 👉 [aquí.](https://pascale-clothes.vercel.app/)

## Diseño y Estética

El diseño fue pensado para reflejar la elegancia y estilo de la tienda física:

- **Paleta de colores:** Tonos neutros y elegantes que destacan los productos
- **Tipografía:** Fuentes modernas y legibles para una experiencia de compra cómoda
- **Elementos visuales:** Diseño limpio, minimalista y centrado en las imágenes de productos
- **Layout:** Diseño responsivo que se adapta perfectamente a móviles, tablets y desktop

## Arquitectura de Páginas

### Páginas Públicas
- **Home:** Página de inicio con productos destacados y colecciones
- **Catálogo de Productos:** Listado completo con sistema de búsqueda y filtros
- **Detalle de Producto:** Vista individual con galería, tallas disponibles y descripción
- **Login/Registro:** Sistema de autenticación para clientes
- **Contacto:** Información de la tienda física y formulario de comunicación

### Área del Cliente
- **Carrito de Compras:** Gestión de productos seleccionados
- **Checkout:** Proceso de compra integrado con Mercado Pago
- **Historial de Pedidos:** Registro de compras realizadas
- **Perfil de Usuario:** Gestión de datos personales y direcciones de envío

### Panel de Administración
- **Dashboard:** Panel de control con métricas de ventas
- **Gestión de Inventario:** CRUD completo de productos
- **Gestión de Pedidos:** Visualización y administración de órdenes
- **Configuración:** Ajustes de la tienda

## Funcionalidades Principales

### Para Clientes

**Sistema de Búsqueda:**
- Búsqueda por nombre y categoría
- Filtrado por tipo de prenda, talla y precio
- Navegación intuitiva por colecciones

**Carrito de Compras:**
- Validación de stock en tiempo real
- Selección de tallas disponibles
- Cálculo automático de envío

**Proceso de Checkout:**
- Integración con Mercado Pago para pagos seguros
- Opciones de envío a domicilio o retiro en tienda
- Confirmación de pedido por email

### Para la Administración

**Dashboard:**
- Estadísticas de ventas
- Pedidos pendientes de envío
- Productos con bajo stock

**Gestión de Productos:**
- Carga de productos con múltiples imágenes
- Gestión de tallas y stock por variante
- Categorización de productos

## Stack Tecnológico

### Backend
- **Node.js & Express:** Servidor y API REST
- **PostgreSQL:** Base de datos relacional
- **Middleware personalizado:** Autenticación y autorización

### Frontend
- **React:** Construcción de interfaces
- **Tailwind CSS:** Estilos responsivos y modernos
- **React Router:** Navegación SPA
- **Context API:** Gestión de estado (Auth, Cart)
- **Axios:** Comunicación con el backend

### Servicios Externos
- **Mercado Pago:** Procesamiento de pagos en pesos chilenos (CLP)

## Arquitectura del Código

### Backend
```
backend/
├── src/
│   ├── routes/          # Endpoints de la API
│   ├── controllers/     # Lógica de negocio
│   ├── models/          # Modelos de datos
│   ├── middleware/      # Autenticación
│   └── config/          # Configuración
```

### Frontend
```
frontend/
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── pages/           # Páginas principales
│   ├── context/         # Contextos globales
│   └── services/        # Llamadas a la API
```

## Sistema de Carrito (CartContext)

**Métodos Principales:**
- `addToCart(product, size, quantity)` - Agregar producto con talla
- `removeFromCart(productId, size)` - Eliminar del carrito
- `updateQuantity(productId, size, quantity)` - Actualizar cantidad
- `getCartTotal()` - Calcular total con envío
- `clearCart()` - Vaciar carrito post-compra

**Características:**
- Validación de stock por talla
- Cálculo de costos de envío según ubicación
- Persistencia en localStorage

## Estructura de Productos

```javascript
{
  id: UUID,
  name: string,
  description: string,
  price: number,
  category: 'tops' | 'bottoms' | 'dresses' | 'accessories',
  sizes: [
    { size: 'S', stock: number },
    { size: 'M', stock: number },
    { size: 'L', stock: number },
    { size: 'XL', stock: number }
  ],
  color: string,
  images: string[],
  featured: boolean
}
```

## Consideraciones Técnicas

1. **Pagos en CLP:** Integración con Mercado Pago configurada para pesos chilenos
2. **Gestión de Tallas:** Sistema de stock independiente por cada talla
3. **Imágenes Optimizadas:** Carga lazy y formatos optimizados para web
4. **SEO Básico:** Meta tags y estructura semántica para mejor posicionamiento

## Conclusión

Pascale Clothes representa mi primer proyecto real para un cliente, llevando una tienda física al mundo digital. La experiencia de trabajar con requerimientos reales y una clienta en Chile me permitió aplicar conocimientos técnicos en un contexto profesional, desde la comunicación con el cliente hasta el deploy en producción.