import { Component } from '@angular/core';

@Component({
  selector: 'app-kitchen-sink',
  standalone: true,
  template: `
    <div class="min-h-screen bg-gray-800 py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-white mb-4">
            Tasker Project - Kitchen Sink
          </h1>
          <p class="text-xl text-gray-300 mb-8">
            Simple testing environment for Tailwind CSS
          </p>
        </div>

        <!-- Two Buttons -->
        <div class="flex justify-center gap-6">
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-200">
            Primary Button
          </button>
          <button class="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-200">
            Secondary Button
          </button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class KitchenSinkComponent {}
