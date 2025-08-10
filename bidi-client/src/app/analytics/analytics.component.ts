import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  template: `
    <div class="analytics-header">
      <h1>Analytics</h1>
      <p class="text-secondary">Track your productivity and performance metrics</p>
    </div>
    <div class="analytics-placeholder">
      <div class="placeholder-content">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 3v18h18"></path>
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
        </svg>
        <h3>Analytics Coming Soon</h3>
        <p>Analytics and reporting features will be implemented in the next iteration.</p>
      </div>
    </div>
  `,
  styles: [`
    .analytics-header {
      margin-bottom: var(--spacing-8);
    }
    
    .analytics-header h1 {
      margin-bottom: var(--spacing-2);
    }
    
    .analytics-header p {
      margin: 0;
      font-size: var(--font-size-lg);
    }
    
    .analytics-placeholder {
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
export class AnalyticsComponent {
  // Component logic will be added here
}
