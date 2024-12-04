import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatTabsModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  router = inject(Router);
  selectedIndex: number = 0;

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      if (currentUrl.includes('events') || currentUrl === '/') {
        this.selectedIndex = 0;
      } else if (currentUrl.includes('locations')) {
        this.selectedIndex = 1;
      }
    });
  }

  CreateClicked() {
    this.router.navigateByUrl('create');
  }

  onHomeIconClicked() {
    this.router.navigateByUrl('');
  }

  onLocationsClicked() {
    this.router.navigateByUrl('locations');
  }

  onTabChanged(event: any): void {
    if (event.index === 0) {
      this.onHomeIconClicked();
    } else if (event.index === 1) {
      this.onLocationsClicked();
    }
  }
}
