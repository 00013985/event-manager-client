import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { ILocation } from '../../ILocation';
import { LocationAPIService } from '../../api/location-api.service';

function findIndexByID(jsonArray: any[], indexToFind: number): number {
  return jsonArray.findIndex((item) => item.id === indexToFind);
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
export class EditLocationComponent {
  ApiService = inject(LocationAPIService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  editedLocation: ILocation = {
    id: 0,
    name: '',
    address: '',
  };

  ngOnInit() {
    this.ApiService.getByID(
      this.activatedRoute.snapshot.params['id']
    ).subscribe((result) => {
      this.editedLocation = result;
    });
  }

  navigateToLocations() {
    this.router.navigateByUrl('locations');
  }

  edit() {
    this.ApiService.edit(this.editedLocation).subscribe((res) => {
      alert('Changes has been updated');
      this.navigateToLocations();
    });
  }
}
