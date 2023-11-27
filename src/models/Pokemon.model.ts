import mongoose from 'mongoose';
import { IPokemon } from '../interfaces/IPokemon';

const PokemonSchema = new mongoose.Schema<IPokemon>({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: [String],
    required: true,
  },
  base_experience: {
    type: Number,
    required: true,
  },
  alias: {
    type: String,
    required: false,
  },
  items: {
    type: [String],
    required: false,
  },
});

export const Pokemon = mongoose.model('Pokemon', PokemonSchema);
