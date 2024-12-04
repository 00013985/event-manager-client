import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { ILocation } from '../../ILocation';
import { LocationAPIService } from '../../api/location-api.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class LocationDetails {
  locationDetails: ILocation = {
    id: 0,
    name: '',
    address: '',
  };
  APIservice = inject(LocationAPIService);
  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.APIservice.getByID(
      this.activatedRoute.snapshot.params['id']
    ).subscribe((resultedItem) => {
      this.locationDetails = resultedItem;
    });
  }
}
