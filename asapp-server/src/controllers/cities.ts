import { Request, Response, NextFunction } from 'express'
import { cities as getCities } from '../services';

export const cities = async (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  const id = req.params.id;
  try {
    const query = req.query
    const response = await getCities(id, query);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};