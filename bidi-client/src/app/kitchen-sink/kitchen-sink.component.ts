import { Component } from '@angular/core';

@Component({
  selector: 'app-kitchen-sink',
  standalone: true,
  template: `
    <div class="kitchen-sink-container">
      <div class="kitchen-sink-content">
        <!-- Header -->
        <div class="kitchen-sink-header">
          <h1 class="kitchen-sink-title">
            Tasker Project - Kitchen Sink
          </h1>
          <p class="kitchen-sink-subtitle">
            Simple testing environment for components
          </p>
        </div>

        <h1 class="text-3xl font-bold underline">
  Hello world!
</h1>

        <!-- Two Buttons -->
        <div class="kitchen-sink-buttons">
          <button class="btn btn-primary">
            Primary Button
          </button>
          <button class="btn btn-secondary">
            Secondary Button
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .kitchen-sink-container {
      min-height: 100vh;
      background-color: #1f2937;
      padding: 3rem 0;
    }

    .kitchen-sink-content {
      max-width: 56rem;
      margin: 0 auto;
      padding: 0 1rem;
    }

    @media (min-width: 640px) {
      .kitchen-sink-content {
        padding: 0 1.5rem;
      }
    }

    @media (min-width: 1024px) {
      .kitchen-sink-content {
        padding: 0 2rem;
      }
    }

    .kitchen-sink-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .kitchen-sink-title {
      font-size: 2.25rem;
      font-weight: bold;
      color: white;
      margin-bottom: 1rem;
    }

    .kitchen-sink-subtitle {
      font-size: 1.25rem;
      color: #d1d5db;
      margin-bottom: 2rem;
    }

    .kitchen-sink-buttons {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
    }

    .btn {
      font-weight: 600;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .btn:hover {
      transform: scale(1.05);
    }

    .btn-primary {
      background-color: #2563eb;
      color: white;
    }

    .btn-primary:hover {
      background-color: #1d4ed8;
    }

    .btn-secondary {
      background-color: #4b5563;
      color: white;
    }

    .btn-secondary:hover {
      background-color: #374151;
    }
  `]
})
export class KitchenSinkComponent {}
