import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <div class="min-h-screen bg-gray-900">
      <app-navbar></app-navbar>

      <div class="relative isolate px-6 pt-14 lg:px-8">
        <!-- Background decoration -->
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>

        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

          <!-- Main content -->
          <div class="text-center">
            <h1 class="text-display-lg text-white">Organize tasks, boost productivity</h1>
            <p class="mt-8 text-body-lg text-gray-300 max-w-xl mx-auto">
              Tasker helps teams collaborate, track progress, and achieve goals faster. Simple, powerful, and designed for modern workflows.
            </p>
            <div class="mt-12 flex items-center justify-center gap-x-6">
              <button (click)="goToDashboard()" class="btn btn-primary btn-lg">
                Get started free
              </button>
              <button (click)="goToDashboard()" class="btn btn-outline btn-lg text-white border-gray-400 hover:bg-gray-800">
                View demo <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Bottom background decoration -->
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class HeroComponent {
  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
