import { Response, Request, NextFunction } from 'express';
import { getPlaces } from '../services/place.services';

export async function getPlaceController(req: Request, res: Response, next: NextFunction) {
  try {
    const name = req.query.type as string;
    const places = await getPlaces(name);
    res.status(200).json(places);
  } catch (error) {
    next(error);
  }
}
