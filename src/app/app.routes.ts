import { Routes } from '@angular/router';
import { EventsComponent } from './Event/home/home.component';
import { LocationsComponent } from './Location/home/home.component';
import { LocationDetails } from './Location/details/details.component';
import { CreateLocationComponent } from './Location/create/create.component';
import { EditLocationComponent } from './Location/edit/edit.component';
import { DeleteLocationComponent } from './Location/delete/delete.component';
import { CreateEventComponent } from './Event/create/create.component';
import { EditEventComponent } from './Event/edit/edit.component';
import { EventDetailsComponent } from './Event/details/details.component';
import { DeleteEventComponent } from './Event/delete/delete.component';

export const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
  },
  {
    path: 'locations',
    component: LocationsComponent,
  },
  {
    path: 'locations/details/:id',
    component: LocationDetails,
  },
  {
    path: 'locations/create',
    component: CreateLocationComponent,
  },
  {
    path: 'locations/edit/:id',
    component: EditLocationComponent,
  },
  {
    path: 'locations/delete/:id',
    component: DeleteLocationComponent,
  },
  {
    path: 'events/create',
    component: CreateEventComponent,
  },
  {
    path: 'events/edit/:id',
    component: EditEventComponent,
  },
  {
    path: 'events/details/:id',
    component: EventDetailsComponent,
  },
  {
    path: 'events/delete/:id',
    component: DeleteEventComponent,
  },
];
