import { Request, Response } from 'express';
import pool from '../database';

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
