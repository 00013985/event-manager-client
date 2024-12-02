import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IEvent } from '../IEvent';
import { baseUrl } from './default';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  httpClient = inject(HttpClient);
  constructor() {}

  getAll() {
    return this.httpClient.get<IEvent[]>(`${baseUrl}/api/Events`);
  }
}
