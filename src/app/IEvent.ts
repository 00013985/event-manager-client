import { ILocation } from './ILocation';

export interface IEvent {
  id: number;
  title: string;
  description: string;
  locationId: number;
  location: ILocation;
}
