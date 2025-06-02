# ✨ Backend - Para Brillar

Este repositorio contiene el backend de la aplicación móvil **Para Brillar**, una app enfocada en el desarrollo personal, motivación y bienestar. Este backend está construido con **Node.js**, **TypeScript**, **Express** y utiliza **MongoDB** como base de datos.

## 🚀 Objetivo

Brindar una infraestructura segura y escalable para:

- Autenticación de usuarios (vía Firebase)
- Gestión de contenido personalizado
- Integración con pasarelas de pago (Stripe, MercadoPago)
- Control de accesos premium
- Almacenamiento y administración de recursos dinámicos

## 📁 Estructura del proyecto

```bash
backend-para-brillar/
├── src/
│   ├── config/              # Configuraciones (Firebase, DB, Stripe)
│   ├── controllers/         # Lógica de negocio por módulo
│   ├── middleware/          # Middlewares (auth, errores)
│   ├── models/              # Esquemas de Mongoose
│   ├── routes/              # Rutas agrupadas por funcionalidad
│   ├── services/            # Conexión a servicios externos
│   ├── utils/               # Funciones auxiliares
│   └── index.ts             # Punto de entrada
├── .env                     # Variables de entorno (no se sube al repo)
├── package.json
├── tsconfig.json
└── README.md
```

## 🧱 Stack Tecnológico

- **Node.js + Express** – API REST
- **MongoDB** – Base de datos NoSQL
- **TypeScript** – Tipado fuerte y mejor mantenimiento
- **Firebase Admin SDK** – Autenticación de usuarios
- **Stripe (futuro)** – Procesamiento de pagos
- **Cloud Storage (futuro)** – Contenidos dinámicos

## 🛠️ Instalación del entorno

```bash
# Clonar el proyecto
git clone https://github.com/tuusuario/backend-para-brillar.git
cd backend-para-brillar

# Instalar dependencias
npm install
```

## ▶️ Comandos útiles

```bash
npm run dev     # Ejecuta el servidor en desarrollo con nodemon
npm run build   # Compila el proyecto a JavaScript
npm start       # Ejecuta el build en producción
```

## 🌱 API Documentación – App Para Brillar

Este archivo describe los endpoints y procesos fundamentales para el backend de la aplicación “App Para Brillar”. Organizado por módulos funcionales.

---

## 🔐 1. AUTENTICACIÓN (OAuth mediante Firebase)

### POST /auth/login
- Valida el token de Firebase y otorga acceso.
- Entrada: `firebaseToken`
- Salida: JWT backend y datos del usuario

### POST /auth/register
- Registra al usuario tras autenticación con Firebase.
- Entrada: `firebaseToken`, `userInfo`
- Salida: Confirmación y datos del usuario

### POST /auth/logout
- Invalida la sesión del usuario.
- Entrada: token
- Salida: Confirmación

### POST /auth/refresh-token
- Renueva el token de acceso.
- Entrada: `refreshToken`
- Salida: Nuevo `accessToken`

### GET /auth/profile
- Devuelve datos del usuario autenticado.
- Entrada: token
- Salida: Perfil del usuario

---

## 📲 2. CONTENIDO DE LA APP MÓVIL Y DASHBOARD ADMINISTRATIVO

### PARA LA APP MÓVIL

#### GET /content/messages
- Devuelve mensajes/frases.
- Entrada: filtros opcionales
- Salida: Lista de mensajes

#### GET /content/tips
- Devuelve tips por tipo de usuario o estado emocional.
- Entrada: filtros opcionales
- Salida: Lista de tips

### PARA EL DASHBOARD ADMINISTRATIVO

#### GET /admin/content
- Lista de todo el contenido
- Entrada: filtros/paginación
- Salida: Contenido completo

#### POST /admin/content
- Crear nuevo contenido
- Entrada: `tipo`, `título`, `cuerpo`, `categoría`, etc.
- Salida: Contenido creado

#### PUT /admin/content/:id
- Editar contenido
- Entrada: `id`, nuevos valores
- Salida: Contenido actualizado

#### DELETE /admin/content/:id
- Eliminar contenido
- Entrada: ID por URL
- Salida: Confirmación

---

## 💳 3. SISTEMA DE PAGOS

### Para Google Play / Apple Store

#### POST /payments/validate-receipt
- Valida un recibo de compra móvil
- Entrada: `platform`, `receiptData`
- Salida: Estado actualizado de suscripción

### Para Stripe / MercadoPago

#### POST /payments/create-checkout-session
- Crea sesión de pago
- Entrada: `userId`, `planId`, `paymentProvider`
- Salida: URL de pago

#### POST /payments/webhook
- Recibe notificaciones del proveedor
- Entrada: evento del proveedor
- Salida: Actualización de suscripción

#### GET /payments/status
- Consulta estado del pago
- Entrada: `userId`
- Salida: Estado actual de pago

---

## 🛠 4. ADMINISTRACIÓN GENERAL

### GET /admin/users
- Lista de usuarios
- Entrada: filtros
- Salida: Lista con paginación

### PUT /admin/users/:id
- Editar datos del usuario
- Entrada: ID y datos
- Salida: Usuario modificado

### DELETE /admin/users/:id
- Eliminar usuario
- Entrada: ID
- Salida: Confirmación

### GET /admin/dashboard/metrics
- Estadísticas generales
- Entrada: ninguna
- Salida: KPIs del sistema

---

> Este proyecto forma parte del ecosistema de productos de la app **Para Brillar**.
