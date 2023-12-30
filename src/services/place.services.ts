import { IPlace } from '../interfaces/IPlace';
import { Places } from '../models/Place.model';

export async function getPlaces(name: string) {
  const query = name ? { name: name } : {};
  const places = await Places.find(query);
  return places.map((place) => {
    return place.toJSON();
  });
}
export async function getPlacesById(id: string) {
  const place = (await Places.findById(id))?.toObject();
  return place;
}

export async function createPlace(placeData: IPlace) {
  const place = new Places(placeData);
  return place.save();
}
