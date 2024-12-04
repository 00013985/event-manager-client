import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';

import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { EventAPIService } from '../../api/event-api.service';
import { LocationAPIService } from '../../api/location-api.service';
import { ILocation } from '../../ILocation';
import { IEvent } from '../../IEvent';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './create.component.html',
})
export class CreateEventComponent {
  LocationAPIService = inject(LocationAPIService);
  EventAPIService = inject(EventAPIService);

  router = inject(Router);

  locations: ILocation[] = [];

  choosenLocationId: number = 0;

  choosenLocation: ILocation = {
    id: 0,
    name: '',
    address: '',
  };

  createEvent: IEvent = {
    id: 0,
    title: '',
    description: '',
    locationId: 0,
    location: {
      id: 0,
      name: '',
      address: '',
    },
  };

  ngOnInit() {
    this.LocationAPIService.getAll().subscribe((result) => {
      this.locations = result;
    });
  }
  create() {
    const foundLocation = this.locations.find(
      (location) => location.id === this.choosenLocationId
    );
    if (foundLocation) {
      this.createEvent.location = foundLocation;
    } else {
      alert('Choose location');
      return;
    }
    this.createEvent.locationId = this.choosenLocationId;

    this.EventAPIService.create(this.createEvent).subscribe((result) => {
      alert('Item Saved');
      this.router.navigateByUrl('');
    });
  }
}
