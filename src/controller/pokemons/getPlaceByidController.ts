import { Response, Request, NextFunction } from 'express';
import { getPlacesById } from '../../services/place.services';

export async function getPlacebyidController(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const place = await getPlacesById(id);
    if (!place) {
      res.status(404).json({
        info: `Pokemon whith Id ${id} not found`,
      });
    }
    res.json(place);
  } catch (error) {
    next(error);
  }
}
