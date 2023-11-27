import { Response, Request, NextFunction } from 'express';
import { getPokemons } from '../../services/pokemon.services';

export async function getPokemonsController(req: Request, res: Response, next: NextFunction) {
  try {
    const type = req.query.type as string | undefined;
    const pokemons = await getPokemons(type);
    res.status(200).json(pokemons);
  } catch (error) {
    next(error);
  }
}
