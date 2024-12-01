import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { IEvent } from '../../IEvent';
import { APIService } from '../../api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatToolbarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  ApiService = inject(APIService);
  router = inject(Router);
  items: IEvent[] = [];

  ngOnInit() {
    this.ApiService.getAll().subscribe((result) => {
      this.items = result;
    });
  }

  displayedColumns: string[] = [
    'ID',
    'Title',
    'Description',
    'DateTime',
    'Location',
    'Actions',
  ];

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
