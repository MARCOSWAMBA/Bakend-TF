import { Schema, model } from 'mongoose';
import { IPlace } from '../interfaces/IPlace';

const PlaceSchema = new Schema<IPlace>({
  name: Schema.Types.ObjectId,
  adress: {
    latitude: Number,
    length: Number,
    maps: String,
  },
  description: String,
  img: String,
});

export const Places = model('Places', PlaceSchema);
