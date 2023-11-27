import { ObjectId } from 'mongoose';

export interface IPokemon {
  name: string;
  type: string[];
  base_experience: number;
  alias?: string;
  items?: string[];
}
