import { IPokemon } from '../interfaces/IPokemon';
import { Pokemon } from '../models/Pokemon.model';

export async function getPokemons(type?: string) {
  const query = type ? { type: type } : {};
  const pokemons = await Pokemon.find(query);
  return pokemons.map((pokemon) => {
    return pokemon.toJSON();
  });
}
export async function getPokemonsById(id: string) {
  const pokemon = await Pokemon.findById(id);
  return pokemon?.toJSON();
}

export async function createPokemon(pokemonData: IPokemon) {
  const pokemon = new Pokemon(pokemonData);
  return pokemon.save();
}
