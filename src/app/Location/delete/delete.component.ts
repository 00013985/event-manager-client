import { Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { ILocation } from '../../ILocation';
import { LocationAPIService } from '../../api/location-api.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatButtonModule],
  templateUrl: './delete.component.html',
})
export class DeleteLocationComponent {
  deletedLocation: ILocation = {
    id: 0,
    name: '',
    address: '',
  };

  service = inject(LocationAPIService);
  activateRote = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    this.service
      .getByID(this.activateRote.snapshot.params['id'])
      .subscribe((result) => {
        this.deletedLocation = result;
      });
  }

  navigateToLocations() {
    this.router.navigateByUrl('locations');
  }

  onDeleteButtonClick(id: number) {
    this.service.delete(id).subscribe((r) => {
      this.navigateToLocations();
    });
  }
}
