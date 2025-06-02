import { Request, Response } from 'express';
import admin from 'firebase-admin';
import jwt from 'jsonwebtoken';
import admin from '../config/firebase';

import { JWT_SECRET } from '../config';
import pool from '../database'; // conexión a PostgreSQL

// 🔐 POST /auth/login
export const login = async (req: Request, res: Response) => {
  const { firebaseToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(firebaseToken);
    const uid = decodedToken.uid;

    const result = await pool.query(
      'SELECT * FROM "User" WHERE uid_firebase = $1',
      [uid]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no registrado' });
    }

    const user = result.rows[0];
    const token = jwt.sign({ uid: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user });
  } catch (err) {
    res.status(401).json({ message: 'Token inválido', error: err });
  }
};

// 🔐 POST /auth/register
export const register = async (req: Request, res: Response) => {
  const { firebaseToken, userInfo } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(firebaseToken);
    const uid = decodedToken.uid;

    const existing = await pool.query(
      'SELECT * FROM "User" WHERE uid_firebase = $1',
      [uid]
    );

    if (existing.rows.length > 0) {
      return res.status(400).json({ message: 'Usuario ya registrado' });
    }

    const { email, name } = userInfo;

    const result = await pool.query(
      `INSERT INTO "User" (id, uid_firebase, email, name, role, "createdAt")
       VALUES (uuid_generate_v4(), $1, $2, $3, 'user', NOW())
       RETURNING *`,
      [uid, email, name]
    );

    const user = result.rows[0];
    const token = jwt.sign({ uid: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token, user });
  } catch (err) {
    res.status(401).json({ message: 'Token inválido', error: err });
  }
};

// 🔐 POST /auth/logout
export const logout = (_req: Request, res: Response) => {
  res.json({ message: 'Sesión cerrada' });
};

// 🔐 POST /auth/refresh-token
export const refreshToken = (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  try {
    const payload = jwt.verify(refreshToken, JWT_SECRET) as any;
    const newAccessToken = jwt.sign({ uid: payload.uid }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token: newAccessToken });
  } catch (err) {
    res.status(401).json({ message: 'Refresh token inválido', error: err });
  }
};

// 🔐 GET /auth/profile
export const getProfile = async (req: Request, res: Response) => {
  const uid = (req as any).uid;

  try {
    const result = await pool.query('SELECT * FROM "User" WHERE id = $1', [uid]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({ user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ message: 'Error interno', error: err });
  }
};
