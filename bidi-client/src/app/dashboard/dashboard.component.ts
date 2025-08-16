import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService, TodoStats, Todo } from '../services/api.service';
import { ButtonComponent } from '../shared/components/button';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent]
})
export class DashboardComponent implements OnInit {
  stats: TodoStats = {
    total: 0,
    completed: 0,
    pending: 0,
    byPriority: {
      low: 0,
      medium: 0,
      high: 0
    }
  };

  recentTasks: Todo[] = [];
  loading = true;
  error = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.loading = true;
    this.error = '';

    // Load stats
    this.apiService.getTodoStats().subscribe({
      next: (stats) => {
        this.stats = stats;
        console.log('Stats loaded:', stats);
      },
      error: (error) => {
        console.error('Error loading stats:', error);
        this.error = 'Failed to load dashboard statistics';
        this.loading = false;
      }
    });

    // Load recent tasks
    this.apiService.getTodos({ page: 1, limit: 5 }).subscribe({
      next: (response) => {
        this.recentTasks = response.data;
        this.loading = false;
        console.log('Recent tasks loaded:', response.data);
      },
      error: (error) => {
        console.error('Error loading recent tasks:', error);
        this.error = 'Failed to load recent tasks';
        this.loading = false;
      }
    });
  }

  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'high': return 'error';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'info';
    }
  }

  getPriorityLabel(priority: string): string {
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  }

  formatDate(date: Date | string): string {
    if (!date) return '';
    return new Date(date).toLocaleDateString();
  }

  toggleTaskComplete(task: Todo): void {
    console.log('Toggling task:', task._id);
    this.apiService.toggleTodoComplete(task._id).subscribe({
      next: (updatedTask) => {
        console.log('Task updated:', updatedTask);
        // Update the task in the list
        const index = this.recentTasks.findIndex(t => t._id === task._id);
        if (index !== -1) {
          this.recentTasks[index] = updatedTask;
        }
        // Reload stats
        this.loadDashboardData();
      },
      error: (error) => {
        console.error('Error toggling task:', error);
        this.error = 'Failed to update task';
      }
    });
  }

  createNewTask(): void {
    console.log('Creating new task');
    // TODO: Implement task creation logic
  }

  createNewProject(): void {
    console.log('Creating new project');
    // TODO: Implement project creation logic
  }
}
