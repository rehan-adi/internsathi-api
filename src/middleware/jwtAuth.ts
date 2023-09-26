import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { iUser } from '../../types';

export const jwtAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ error: 'Internal server error' });
  }
  try {
    const decodedToken = jwt.verify(token, 'wrong-secret');
    res.locals.user = decodedToken as iUser;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
