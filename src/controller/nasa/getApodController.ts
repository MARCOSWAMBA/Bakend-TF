import { NextFunction, Request, Response } from 'express';
import axios from 'axios';
import { getApod } from '../../services/apod.services';

export async function getApodController(req: Request, res: Response, next: NextFunction) {
  try {
    const { date, startDate, endDate } = req.query;
    const apod = await getApod({
      date: date as string | undefined,
      startDate: startDate as string | undefined,
      endDate: endDate as string | undefined,
    });
    return res.json(apod);
  } catch (error) {
    const err: any = error;
    console.log('Error' + err.message);
    if (err.response.status === 400) {
      err.message = 'BadRequest';
    }
    next(err);
  }
}
