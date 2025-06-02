import { Request, Response } from 'express';
import pool from '../config/database';

export const completeProfile = async (req: Request, res: Response) => {
  const { user_id } = (req as any).user;
  const { name, role } = req.body;

  if (!name || !role) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    const result = await pool.query(
      'UPDATE users SET name = $1, role = $2 WHERE id = $3 RETURNING id, email, name, role, created_at',
      [name, role, user_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    return res.json({ message: 'Perfil actualizado', user: result.rows[0] });
  } catch (error) {
    console.error('Error al actualizar el perfil:', error);
    return res.status(500).json({ message: 'Error al actualizar el perfil' });
  }
};
