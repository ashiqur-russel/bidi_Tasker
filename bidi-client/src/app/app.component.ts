import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Notification {
  id: number;
  message: string;
  time: string;
  read: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {
  title = 'Tasker';
  sidebarOpen = false;
  
  // Search functionality
  searchQuery = '';
  
  // Notifications
  notificationsOpen = false;
  notificationCount = 3;
  notifications: Notification[] = [
    {
      id: 1,
      message: 'Task "Complete project proposal" is due tomorrow',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      message: 'New comment on "Design system updates"',
      time: '4 hours ago',
      read: false
    },
    {
      id: 3,
      message: 'Project "Mobile app" has been completed',
      time: '1 day ago',
      read: false
    }
  ];
  
  // User menu
  userMenuOpen = false;

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

  // Search methods
  onSearch(): void {
    // TODO: Implement search functionality
    console.log('Searching for:', this.searchQuery);
  }

  clearSearch(): void {
    this.searchQuery = '';
  }

  // Quick add method
  openQuickAdd(): void {
    // TODO: Implement quick add modal
    console.log('Opening quick add modal');
  }

  // Notification methods
  toggleNotifications(): void {
    this.notificationsOpen = !this.notificationsOpen;
    if (this.notificationsOpen) {
      this.userMenuOpen = false;
    }
  }

  markAllAsRead(): void {
    this.notifications.forEach(notification => notification.read = true);
    this.notificationCount = 0;
  }

  // User menu methods
  toggleUserMenu(): void {
    this.userMenuOpen = !this.userMenuOpen;
    if (this.userMenuOpen) {
      this.notificationsOpen = false;
    }
  }

  logout(): void {
    // TODO: Implement logout functionality
    console.log('Logging out...');
  }
}
