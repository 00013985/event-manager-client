import { Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { EventAPIService } from '../../api/event-api.service';
import { IEvent } from '../../IEvent';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatButtonModule],
  templateUrl: './delete.component.html',
})
export class DeleteEventComponent {
  eventToDelete: IEvent = {
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
  service = inject(EventAPIService);
  activateRote = inject(ActivatedRoute);
  router = inject(Router);
  ngOnInit() {
    this.service
      .getByID(this.activateRote.snapshot.params['id'])
      .subscribe((result) => {
        this.eventToDelete = result;
      });
  }
  onHomeButtonClick() {
    this.router.navigateByUrl('');
  }
  onDeleteButtonClick(id: number) {
    this.service.delete(id).subscribe((r) => {
      this.router.navigateByUrl('');
    });
  }
}
