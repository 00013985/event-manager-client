import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { EventAPIService } from '../../api/event-api.service';
import { IEvent } from '../../IEvent';
import { LocationAPIService } from '../../api/location-api.service';
import { ILocation } from '../../ILocation';

function findLocationByID<ILocation extends { id: number }>(
  locations: ILocation[],
  id: number
): number {
  return locations.findIndex((location) => location.id === id);
}

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './edit.component.html',
})
export class EditEventComponent {
  EventAPIService = inject(EventAPIService);
  LocationAPIService = inject(LocationAPIService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  editFeature: IEvent = {
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
  locations: ILocation[] = [];
  selectedLocation: any;

  ngOnInit() {
    this.EventAPIService.getByID(
      this.activatedRoute.snapshot.params['id']
    ).subscribe((result) => {
      this.editFeature = result;
      this.selectedLocation = this.editFeature.locationId;
    });

    this.LocationAPIService.getAll().subscribe((result) => {
      this.locations = result;
    });
  }

  toHome() {
    this.router.navigateByUrl('');
  }

  edit() {
    this.editFeature.locationId = this.selectedLocation;
    this.editFeature.location =
      this.locations[findLocationByID(this.locations, this.selectedLocation)];
    this.EventAPIService.edit(this.editFeature).subscribe((res) => {
      alert('Changes has been updated');
      this.router.navigateByUrl('');
    });
  }
}
