import { NextFunction, Response, Request, response } from 'express';
import { IPlace } from '../../interfaces/IPlace';
import { createPlace } from '../../services/place.services';

export async function postPlaceCreate(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, adress, description, img } = req.body;
    const placeData: IPlace = { name, adress, description, img };
    const response = await createPlace(placeData);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}
