import axios from 'axios';
import { IApod } from '../interfaces/IApod';

export async function getApod({
  date,
  startDate,
  endDate,
}: {
  date?: string;
  startDate?: string;
  endDate?: string;
}): Promise<IApod> {
  const httpClient = axios.create({
    baseURL: 'https://api.nasa.gov/',
    params: {
      api_key: process.env.NASA_Key,
      date,
      start_date: startDate,
      end_date: endDate,
    },
  });
  const { data } = await httpClient.get<IApod>('/planetary/apod');
  return data;
}
