import { Component } from '@angular/core';

@Component({
  selector: 'app-kitchen-sink',
  standalone: true,
  template: `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-12">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
            </svg>
          </div>
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Tasker Project - Tailwind CSS v4 Kitchen Sink
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            A testing environment for Tailwind CSS utility classes
          </p>
          <div class="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">What is this?</h2>
            <p class="text-gray-700 leading-relaxed mb-6">
              This kitchen sink component is a testing ground for Tailwind CSS v4 utility classes. 
              It allows developers to quickly test and verify that all Tailwind CSS features are working 
              correctly in the Tasker project.
            </p>
            <div class="flex justify-center">
              <button class="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-200">
                🎉 Tailwind CSS v4 is Working!
              </button>
            </div>
          </div>
        </div>

        <!-- Quick Test Section -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Quick Test</h3>
          <p class="text-gray-600 mb-6">
            If you can see this styled content and the button above, Tailwind CSS v4 is successfully configured!
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-primary-50 border border-primary-200 rounded-lg p-4 text-center">
              <div class="text-primary-600 font-semibold">Primary Colors</div>
              <div class="text-sm text-primary-500">Working ✓</div>
            </div>
            <div class="bg-secondary-50 border border-secondary-200 rounded-lg p-4 text-center">
              <div class="text-secondary-600 font-semibold">Secondary Colors</div>
              <div class="text-sm text-secondary-500">Working ✓</div>
            </div>
            <div class="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div class="text-green-600 font-semibold">Utility Classes</div>
              <div class="text-sm text-green-500">Working ✓</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class KitchenSinkComponent {}
