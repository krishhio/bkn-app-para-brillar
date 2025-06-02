import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SUPABASE_JWT_SECRET = process.env.SUPABASE_JWT_SECRET || '';

export interface AuthenticatedRequest extends Request {
  uid?: string;
}

export const authenticate = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Token requerido' });

  try {
    const decoded = jwt.verify(token, SUPABASE_JWT_SECRET) as { sub: string };
    req.uid = decoded.sub;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Token inválido', error: err });
  }
};
