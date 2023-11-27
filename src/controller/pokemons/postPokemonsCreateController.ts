import { NextFunction, Response, Request, response } from 'express';
import { IPokemon } from '../../interfaces/IPokemon';
import { createPokemon } from '../../services/pokemon.services';

export async function postPokemonsCreate(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, type, base_experience, alias, items } = req.body;
    const pokemonData: IPokemon = { name, type, base_experience, alias, items };
    const response = await createPokemon(pokemonData);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}
