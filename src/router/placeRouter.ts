import { Router } from 'express';
import { getPlaceController } from '../controller/getPlaceController';
import { getPlacebyidController } from '../controller/getPlaceByidController';
import { postPlaceCreate } from '../controller/postPlaceCreateController';
import { validatePlaceBody } from '../middleware/validacionMiddleware';

export const router = Router();

router.get('/', getPlaceController);

router.get('/:id', getPlacebyidController);

router.post('/', validatePlaceBody, postPlaceCreate);
