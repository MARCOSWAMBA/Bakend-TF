import { Router } from 'express';
import { getApodController } from '../controller/nasa/getApodController';

export const router = Router();

//basepath---> /nasa

router.get('/apod', getApodController);
