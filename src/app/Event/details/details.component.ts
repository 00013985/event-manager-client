import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { IEvent } from '../../IEvent';
import { EventAPIService } from '../../api/event-api.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './details.component.html',
})
export class EventDetailsComponent {
  eventDetails: IEvent = {
    id: 0,
    title: '',
    description: '',
    locationId: 0,
    location: {
      id: 0,
      address: '',
      name: '',
    },
  };
  APIservice = inject(EventAPIService);
  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.APIservice.getByID(
      this.activatedRoute.snapshot.params['id']
    ).subscribe((resultedItem) => {
      this.eventDetails = resultedItem;
    });
  }
}
