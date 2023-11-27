import { Response, Request, NextFunction } from 'express';
import { getPokemonsById } from '../../services/pokemon.services';

export async function getPokemonsbyidController(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const pokemon = await getPokemonsById(id);
    if (!pokemon) {
      res.status(404).json({
        info: `Pokemon whith Id ${id} not found`,
      });
    }
    res.json(pokemon);
  } catch (error) {
    next(error);
  }
}
