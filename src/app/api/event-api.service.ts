import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IEvent } from '../IEvent';
import { baseUrl } from './instance';

@Injectable({
  providedIn: 'root',
})
export class EventAPIService {
  httpClient = inject(HttpClient);
  constructor() {}

  getAll() {
    return this.httpClient.get<IEvent[]>(`${baseUrl}/api/Events`);
  }

  getByID(id: number) {
    return this.httpClient.get<IEvent>(`${baseUrl}/api/Events/${id}`);
  }

  edit(item: IEvent) {
    return this.httpClient.put(`${baseUrl}/api/Events`, item);
  }

  delete(id: number) {
    return this.httpClient.delete(`${baseUrl}/api/Events/${id}`);
  }

  create(item: Omit<IEvent, 'id'>) {
    return this.httpClient.post<IEvent>(`${baseUrl}/api/Events`, item);
  }
}
