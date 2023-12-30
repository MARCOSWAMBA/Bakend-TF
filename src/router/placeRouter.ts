import { Router } from 'express';
import { getPlaceController } from '../controller/pokemons/getPlaceController';
import { getPlacebyidController } from '../controller/pokemons/getPlaceByidController';
import { postPlaceCreate } from '../controller/pokemons/postPlaceCreateController';
import { validatePlaceBody } from '../middleware/validacionMiddleware';

export const router = Router();

router.get('/', getPlaceController);

router.get('/:id', getPlacebyidController);

router.post('/', validatePlaceBody, postPlaceCreate);
