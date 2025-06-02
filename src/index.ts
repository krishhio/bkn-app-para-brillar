import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes'; // 👈 Importar rutas

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Ruta base de prueba
app.get('/', (req, res) => {
    res.send('API Para Brillar funcionando');
});

// Registrar rutas de autenticación
app.use('/auth', authRoutes); // 👈 Agregar prefijo /auth

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
