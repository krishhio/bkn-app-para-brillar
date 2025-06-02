// src/routes/profile.routes.ts
import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import { completeProfile } from '../controllers/profile.controller';

const router = Router();

router.post('/complete-profile', authenticate, completeProfile);

export default router;
