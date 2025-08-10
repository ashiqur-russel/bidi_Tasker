import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  template: `
    <div class="calendar-header">
      <h1>Calendar</h1>
      <p class="text-secondary">View and manage your schedule</p>
    </div>
    <div class="calendar-placeholder">
      <div class="placeholder-content">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <h3>Calendar Coming Soon</h3>
        <p>Calendar functionality will be implemented in the next iteration.</p>
      </div>
    </div>
  `,
  styles: [`
    .calendar-header {
      margin-bottom: var(--spacing-8);
    }
    
    .calendar-header h1 {
      margin-bottom: var(--spacing-2);
    }
    
    .calendar-header p {
      margin: 0;
      font-size: var(--font-size-lg);
    }
    
    .calendar-placeholder {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 400px;
      background-color: var(--color-surface);
      border: 1px solid var(--color-outline);
      border-radius: var(--radius-xl);
    }
    
    .placeholder-content {
      text-align: center;
      color: var(--color-on-surface-variant);
    }
    
    .placeholder-content svg {
      margin-bottom: var(--spacing-4);
      color: var(--color-secondary-400);
    }
    
    .placeholder-content h3 {
      margin-bottom: var(--spacing-2);
      color: var(--color-on-surface);
    }
    
    .placeholder-content p {
      margin: 0;
    }
  `],
  standalone: false
})
export class CalendarComponent {
  // Component logic will be added here
}
