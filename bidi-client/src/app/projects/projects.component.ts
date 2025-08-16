import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div class="space-y-8">
        <!-- Page Header -->
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-display-md text-white">Projects</h1>
            <p class="text-body-md text-gray-300 mt-2">Manage your projects and track progress</p>
          </div>
          <button class="btn btn-primary">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
            New Project
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="space-y-6">
          <div class="flex items-center justify-between">
            <h2 class="text-heading-lg text-white">Active Projects</h2>
            <div class="flex items-center space-x-4">
              <select class="input text-sm w-32">
                <option>All Status</option>
                <option>Active</option>
                <option>Planning</option>
                <option>Completed</option>
                <option>On Hold</option>
              </select>
              <select class="input text-sm w-36">
                <option>All Priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <!-- Project Card 1 -->
            <div class="card hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div class="card-body p-6">
                <div class="flex items-start justify-between mb-4">
                  <h3 class="text-heading-md text-gray-900 dark:text-white">Website Redesign</h3>
                  <span class="badge badge-primary">Active</span>
                </div>
                
                <p class="text-body-sm text-gray-600 dark:text-gray-300 mb-6">Complete redesign of the company website with modern UI/UX principles and improved performance.</p>
                
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="text-caption text-gray-500 dark:text-gray-400">Progress</span>
                    <span class="text-caption text-gray-700 dark:text-gray-200 font-medium">75%</span>
                  </div>
                  <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div class="w-3/4 h-2 bg-indigo-600 rounded-full"></div>
                  </div>
                  
                  <div class="flex items-center justify-between text-caption text-gray-500 dark:text-gray-400">
                    <span>Due Dec 15, 2024</span>
                    <span>12/16 tasks</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Card 2 -->
            <div class="card hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div class="card-body p-6">
                <div class="flex items-start justify-between mb-4">
                  <h3 class="text-heading-md text-gray-900 dark:text-white">Mobile App</h3>
                  <span class="badge badge-warning">Planning</span>
                </div>
                
                <p class="text-body-sm text-gray-600 dark:text-gray-300 mb-6">Develop a cross-platform mobile application for task management with offline capabilities.</p>
                
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="text-caption text-gray-500 dark:text-gray-400">Progress</span>
                    <span class="text-caption text-gray-700 dark:text-gray-200 font-medium">25%</span>
                  </div>
                  <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div class="w-1/4 h-2 bg-yellow-600 rounded-full"></div>
                  </div>
                  
                  <div class="flex items-center justify-between text-caption text-gray-500 dark:text-gray-400">
                    <span>Due Mar 30, 2025</span>
                    <span>8/32 tasks</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Card 3 -->
            <div class="card hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div class="card-body p-6">
                <div class="flex items-start justify-between mb-4">
                  <h3 class="text-heading-md text-gray-900 dark:text-white">API Integration</h3>
                  <span class="badge badge-success">Completed</span>
                </div>
                
                <p class="text-body-sm text-gray-600 dark:text-gray-300 mb-6">Integrate third-party APIs for enhanced functionality and data synchronization.</p>
                
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="text-caption text-gray-500 dark:text-gray-400">Progress</span>
                    <span class="text-caption text-gray-700 dark:text-gray-200 font-medium">100%</span>
                  </div>
                  <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div class="w-full h-2 bg-green-600 rounded-full"></div>
                  </div>
                  
                  <div class="flex items-center justify-between text-caption text-gray-500 dark:text-gray-400">
                    <span>Completed Dec 10, 2024</span>
                    <span>15/15 tasks</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Card 4 -->
            <div class="card hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div class="card-body p-6">
                <div class="flex items-start justify-between mb-4">
                  <h3 class="text-heading-md text-gray-900 dark:text-white">Marketing Campaign</h3>
                  <span class="badge badge-secondary">On Hold</span>
                </div>
                
                <p class="text-body-sm text-gray-600 dark:text-gray-300 mb-6">Launch comprehensive marketing campaign across multiple channels and platforms.</p>
                
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="text-caption text-gray-500 dark:text-gray-400">Progress</span>
                    <span class="text-caption text-gray-700 dark:text-gray-200 font-medium">45%</span>
                  </div>
                  <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div class="w-11/20 h-2 bg-gray-600 rounded-full"></div>
                  </div>
                  
                  <div class="flex items-center justify-between text-caption text-gray-500 dark:text-gray-400">
                    <span>Due Feb 28, 2025</span>
                    <span>9/20 tasks</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Card 5 -->
            <div class="card hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div class="card-body p-6">
                <div class="flex items-start justify-between mb-4">
                  <h3 class="text-heading-md text-gray-900 dark:text-white">Database Migration</h3>
                  <span class="badge badge-warning">Planning</span>
                </div>
                
                <p class="text-body-sm text-gray-600 dark:text-gray-300 mb-6">Migrate legacy database to modern cloud-based solution with improved performance.</p>
                
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="text-caption text-gray-500 dark:text-gray-400">Progress</span>
                    <span class="text-caption text-gray-700 dark:text-gray-200 font-medium">10%</span>
                  </div>
                  <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div class="w-1/10 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  
                  <div class="flex items-center justify-between text-caption text-gray-500 dark:text-gray-400">
                    <span>Due Apr 15, 2025</span>
                    <span>3/30 tasks</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Card 6 -->
            <div class="card hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div class="card-body p-6">
                <div class="flex items-start justify-between mb-4">
                  <h3 class="text-heading-md text-gray-900 dark:text-white">Security Audit</h3>
                  <span class="badge badge-primary">Active</span>
                </div>
                
                <p class="text-body-sm text-gray-600 dark:text-gray-300 mb-6">Conduct comprehensive security audit and implement necessary security measures.</p>
                
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="text-caption text-gray-500 dark:text-gray-400">Progress</span>
                    <span class="text-caption text-gray-700 dark:text-gray-200 font-medium">60%</span>
                  </div>
                  <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div class="w-3/5 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  
                  <div class="flex items-center justify-between text-caption text-gray-500 dark:text-gray-400">
                    <span>Due Jan 31, 2025</span>
                    <span>18/30 tasks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div class="text-center py-12" *ngIf="false">
            <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
            <h3 class="text-heading-md text-gray-900 dark:text-white mb-2">No projects yet</h3>
            <p class="text-body-sm text-gray-700 dark:text-gray-200 mb-4">Create your first project to get started</p>
            <button class="btn btn-primary">Create Project</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
  standalone: false
})
export class ProjectsComponent {
  // Component logic will be added here
}
