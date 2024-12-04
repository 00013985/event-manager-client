import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ILocation } from '../ILocation';
import { baseUrl } from './instance';

@Injectable({
  providedIn: 'root',
})
export class LocationAPIService {
  httpClient = inject(HttpClient);
  constructor() {}

  getAll() {
    return this.httpClient.get<ILocation[]>(`${baseUrl}/api/Locations`);
  }

  getByID(id: number) {
    return this.httpClient.get<ILocation>(`${baseUrl}/api/Locations/${id}`);
  }

  edit(item: ILocation) {
    return this.httpClient.put(`${baseUrl}/api/Locations`, item);
  }

  delete(id: number) {
    return this.httpClient.delete(`${baseUrl}/api/Locations/${id}`);
  }

  create(item: Omit<ILocation, 'id'>) {
    return this.httpClient.post<ILocation>(`${baseUrl}/api/Locations`, item);
  }
}
