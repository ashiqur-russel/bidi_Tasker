import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './shared/components/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ButtonComponent]
})
export class AppComponent {
  sidebarOpen = false;

  constructor(private router: Router) {}

  isHeroRoute(): boolean {
    return this.router.url === '/';
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  quickAdd(): void {
    console.log('Quick add clicked');
    // TODO: Implement quick add functionality
  }
}
