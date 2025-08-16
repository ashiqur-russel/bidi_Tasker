import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService, Todo, CreateTodoDto } from '../services/api.service';
import { ButtonComponent } from '../shared/components/button';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent]
})
export class TasksComponent implements OnInit {
  tasks: Todo[] = [];
  filteredTasks: Todo[] = [];
  loading = true;
  error = '';
  
  // Filter states
  statusFilter = '';
  priorityFilter = '';
  searchQuery = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.loading = true;
    this.error = '';

    this.apiService.getTodos({ page: 1, limit: 50 }).subscribe({
      next: (response) => {
        this.tasks = response.data;
        this.filteredTasks = [...this.tasks];
        this.loading = false;
        console.log('Tasks loaded:', this.tasks);
      },
      error: (error) => {
        console.error('Error loading tasks:', error);
        this.error = 'Failed to load tasks';
        this.loading = false;
      }
    });
  }

  onStatusFilterChange(event: any): void {
    this.statusFilter = event.target.value;
    this.applyFilters();
  }

  onPriorityFilterChange(event: any): void {
    this.priorityFilter = event.target.value;
    this.applyFilters();
  }

  onSearchChange(event: any): void {
    this.searchQuery = event.target.value;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredTasks = this.tasks.filter(task => {
      // Status filter
      if (this.statusFilter) {
        if (this.statusFilter === 'completed' && !task.completed) return false;
        if (this.statusFilter === 'todo' && task.completed) return false;
      }

      // Priority filter
      if (this.priorityFilter && task.priority !== this.priorityFilter) {
        return false;
      }

      // Search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        const titleMatch = task.title.toLowerCase().includes(query);
        const descriptionMatch = task.description?.toLowerCase().includes(query) || false;
        if (!titleMatch && !descriptionMatch) return false;
      }

      return true;
    });
  }

  toggleTaskComplete(task: Todo): void {
    console.log('Toggling task:', task._id);
    this.apiService.toggleTodoComplete(task._id).subscribe({
      next: (updatedTask) => {
        console.log('Task updated:', updatedTask);
        // Update the task in both arrays
        const index = this.tasks.findIndex(t => t._id === task._id);
        if (index !== -1) {
          this.tasks[index] = updatedTask;
        }
        this.applyFilters();
      },
      error: (error) => {
        console.error('Error toggling task:', error);
        this.error = 'Failed to update task';
      }
    });
  }

  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'high': return 'warning';
      case 'medium': return 'secondary';
      case 'low': return 'success';
      default: return 'secondary';
    }
  }

  getPriorityLabel(priority: string): string {
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  }

  formatDate(date: Date | string | undefined): string {
    if (!date) return '';
    return new Date(date).toLocaleDateString();
  }

  createNewTask(): void {
    console.log('Creating new task');
    // TODO: Implement task creation logic
  }
}
