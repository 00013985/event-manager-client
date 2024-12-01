import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IEvent } from './IEvent';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  httpClient = inject(HttpClient);
  constructor() {}

  getAll() {
    return this.httpClient.get<IEvent[]>(
      'http://localhost:5173/api/event/GetAll'
    );
  }
}
