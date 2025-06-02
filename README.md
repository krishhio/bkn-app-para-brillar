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

## 🌱 Próximas funcionalidades

- [ ] Endpoint de login con Firebase
- [ ] Esquema de usuario en MongoDB
- [ ] Middleware de autenticación
- [ ] Integración con Stripe o MercadoPago
- [ ] Administración de contenidos desde panel

---

> Este proyecto forma parte del ecosistema de productos de la app **Para Brillar**.  
> Más adelante se documentarán los endpoints, flujo de autenticación, y el esquema de contenidos dinámicos.
