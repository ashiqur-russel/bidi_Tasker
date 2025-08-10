import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <div class="projects-header">
      <div class="projects-title">
        <h1>Projects</h1>
        <p class="text-secondary">Manage your projects and track progress</p>
      </div>
      <div class="projects-actions">
        <button class="btn btn-primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          New Project
        </button>
      </div>
    </div>
    
    <div class="projects-grid">
      <div class="project-card">
        <div class="project-header">
          <h3>Website Redesign</h3>
          <span class="badge badge-primary">Active</span>
        </div>
        <p>Complete redesign of the company website with modern UI/UX principles</p>
        <div class="project-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: 75%"></div>
          </div>
          <span class="progress-text">75% Complete</span>
        </div>
        <div class="project-meta">
          <span>Due Dec 15, 2024</span>
          <span>12/16 tasks</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .projects-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: var(--spacing-8);
      gap: var(--spacing-6);
    }
    
    .projects-title h1 {
      margin-bottom: var(--spacing-2);
    }
    
    .projects-title p {
      margin: 0;
      font-size: var(--font-size-lg);
    }
    
    .projects-actions {
      display: flex;
      gap: var(--spacing-4);
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: var(--spacing-6);
    }
    
    .project-card {
      background-color: var(--color-surface);
      border: 1px solid var(--color-outline);
      border-radius: var(--radius-xl);
      padding: var(--spacing-6);
      transition: all var(--transition-fast);
    }
    
    .project-card:hover {
      box-shadow: var(--shadow-md);
      transform: translateY(-2px);
    }
  `],
  standalone: false
})
export class ProjectsComponent {
  // Component logic will be added here
}
