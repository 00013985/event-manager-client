import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { IEvent } from '../../IEvent';
import { EventAPIService } from '../../api/event-api.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatToolbarModule, MatIconModule],
  templateUrl: './home.component.html',
})
export class EventsComponent {
  EventAPIService = inject(EventAPIService);
  router = inject(Router);
  events: IEvent[] = [];

  ngOnInit() {
    this.EventAPIService.getAll().subscribe((result) => {
      this.events = result;
    });
  }

  displayedColumns: string[] = [
    'ID',
    'Title',
    'Description',
    'Location',
    'Actions',
  ];

  CreateClicked() {
    this.router.navigateByUrl('events/create');
  }

  EditClicked(itemID: number) {
    this.router.navigateByUrl(`events/edit/${itemID}`);
  }

  DetailsClicked(itemID: number) {
    this.router.navigateByUrl(`events/details/${itemID}`);
  }

  DeleteClicked(itemID: number) {
    this.router.navigateByUrl(`events/delete/${itemID}`);
  }
}
