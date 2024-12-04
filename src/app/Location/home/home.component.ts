import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { LocationAPIService } from '../../api/location-api.service';
import { ILocation } from '../../ILocation';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatToolbarModule, MatIconModule],
  templateUrl: './home.component.html',
})
export class LocationsComponent {
  ApiService = inject(LocationAPIService);
  router = inject(Router);
  locations: ILocation[] = [];

  ngOnInit() {
    this.ApiService.getAll().subscribe((result) => {
      this.locations = result;
    });
  }

  displayedColumns: string[] = ['ID', 'Name', 'Address', 'Actions'];

  CreateClicked() {
    this.router.navigateByUrl('locations/create');
  }

  EditClicked(itemID: number) {
    this.router.navigateByUrl(`locations/edit/${itemID}`);
  }

  DetailsClicked(itemID: number) {
    this.router.navigateByUrl(`locations/details/${itemID}`);
  }

  DeleteClicked(itemID: number) {
    this.router.navigateByUrl(`locations/delete/${itemID}`);
  }
}
