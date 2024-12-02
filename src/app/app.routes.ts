import { Routes } from '@angular/router';
import { HomeComponent } from './Event/home/home.component';
import { LocationsComponent } from './Location/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'locations',
    component: LocationsComponent,
  },
];
