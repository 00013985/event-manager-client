import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';

import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { LocationAPIService } from '../../api/location-api.service';
import { ILocation } from '../../ILocation';

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
  styleUrl: './create.component.css',
})
export class CreateLocationComponent {
  ApiService = inject(LocationAPIService);

  router = inject(Router);

  cID: number = 0;

  createLocation: Omit<ILocation, 'id'> = {
    name: '',
    address: '',
  };

  create() {
    this.ApiService.create(this.createLocation).subscribe((result) => {
      console.log(result);
      alert('Item Saved');
      this.router.navigateByUrl('locations');
    });
  }
}
