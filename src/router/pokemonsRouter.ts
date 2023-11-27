import { Router } from 'express';
import { getPokemonsController } from '../controller/pokemons/getPokemonsController';
import { getPokemonsbyidController } from '../controller/pokemons/getPokemonsByidController';
import { postPokemonsCreate } from '../controller/pokemons/postPokemonsCreateController';
import { validatePokemonBody } from '../middleware/validacionMiddleware';

export const router = Router();

router.get('/', getPokemonsController);

router.get('/:id', getPokemonsbyidController);

router.post('/', validatePokemonBody, postPokemonsCreate);
