import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { APIService } from '../../api/location-api.service';
import { ILocation } from '../../ILocation';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatToolbarModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class LocationsComponent {
  ApiService = inject(APIService);
  router = inject(Router);
  locations: ILocation[] = [];

  ngOnInit() {
    this.ApiService.getAll().subscribe((result) => {
      this.locations = result;
    });
  }

  displayedColumns: string[] = ['ID', 'Name', 'Address', 'Actions'];

  CreateClicked() {
    this.router.navigateByUrl('create');
  }

  EditClicked(itemID: number) {
    console.log(itemID, 'From Edit');
    this.router.navigateByUrl('/edit/' + itemID);
  }
  DetailsClicked(itemID: number) {
    console.log(itemID, 'From Details');
    this.router.navigateByUrl('/details/' + itemID);
  }
  DeleteClicked(itemID: number) {
    console.log(itemID, 'From Delete');
    this.router.navigateByUrl('/delete/' + itemID);
  }
}
