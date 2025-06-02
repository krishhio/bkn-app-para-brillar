import { Router } from 'express';
import {
  login,
  register,
  logout,
  refreshToken,
  getProfile,
} from '../controllers/auth.controller';
import { authenticateToken } from '../middlewares/auth.middleware';

const router = Router();

// Rutas públicas
router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);
router.post('/refresh-token', refreshToken);

// Ruta protegida
router.get('/profile', authenticateToken, getProfile);

export default router;
