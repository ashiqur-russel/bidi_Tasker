import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NavbarComponent],
  template: `
    <div class="hero-container">
      <header class="hero-header">
        <app-navbar></app-navbar>
      </header>

      <div class="hero-content">
        <div class="hero-background-top" aria-hidden="true">
          <div class="hero-gradient-top"></div>
        </div>
        <div class="hero-main">
          <div class="hero-announcement">
            <div class="announcement-badge">
              🚀 New features coming soon. <a href="#" class="announcement-link"><span aria-hidden="true" class="link-overlay"></span>Learn more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <div class="hero-text">
            <h1 class="hero-title">Organize tasks, boost productivity</h1>
            <p class="hero-description">Tasker helps teams collaborate, track progress, and achieve goals faster. Simple, powerful, and designed for modern workflows.</p>
            <div class="hero-buttons">
              <button (click)="goToDashboard()" class="btn btn-primary">Get started free</button>
              <button (click)="goToDashboard()" class="btn btn-secondary">View demo <span aria-hidden="true">→</span></button>
            </div>
          </div>
        </div>
        <div class="hero-background-bottom" aria-hidden="true">
          <div class="hero-gradient-bottom"></div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    * {
      box-sizing: border-box;
    }

    .hero-container {
      background-color: #111827;
      position: relative;
      min-height: 100vh;
      width: 100%;
      overflow-x: hidden;
    }

    .hero-header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      width: 100%;
    }

    .hero-content {
      position: relative;
      isolation: isolate;
      padding: 0 1rem;
      padding-top: 4rem;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media (min-width: 640px) {
      .hero-content {
        padding: 0 1.5rem;
        padding-top: 5rem;
      }
    }

    @media (min-width: 1024px) {
      .hero-content {
        padding: 0 2rem;
        padding-top: 6rem;
      }
    }

    .hero-background-top {
      position: absolute;
      top: -5rem;
      left: 0;
      right: 0;
      z-index: -10;
      transform: translateZ(0);
      overflow: hidden;
      filter: blur(24px);
    }

    @media (min-width: 640px) {
      .hero-background-top {
        top: -10rem;
      }
    }

    .hero-gradient-top {
      position: relative;
      left: 50%;
      transform: translateX(-50%) rotate(30deg);
      width: 100%;
      max-width: 36rem;
      aspect-ratio: 1155/678;
      background: linear-gradient(to top right, #6366f1, #8b5cf6);
      opacity: 0.3;
      clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);
    }

    @media (min-width: 640px) {
      .hero-gradient-top {
        max-width: 48rem;
      }
    }

    .hero-main {
      width: 100%;
      max-width: 42rem;
      margin: 0 auto;
      text-align: center;
      padding: 2rem 0;
    }

    @media (min-width: 640px) {
      .hero-main {
        padding: 3rem 0;
      }
    }

    @media (min-width: 1024px) {
      .hero-main {
        padding: 4rem 0;
      }
    }

    .hero-announcement {
      display: none;
    }

    @media (min-width: 640px) {
      .hero-announcement {
        display: flex;
        margin-bottom: 2rem;
        justify-content: center;
      }
    }

    .announcement-badge {
      position: relative;
      border-radius: 9999px;
      padding: 0.75rem 1rem;
      font-size: 0.875rem;
      line-height: 1.5rem;
      color: #9ca3af;
      border: 1px solid rgba(255, 255, 255, 0.1);
      white-space: nowrap;
    }

    .announcement-badge:hover {
      border-color: rgba(255, 255, 255, 0.2);
    }

    .announcement-link {
      font-weight: 600;
      color: #818cf8;
      text-decoration: none;
    }

    .link-overlay {
      position: absolute;
      inset: 0;
    }

    .hero-text {
      text-align: center;
    }

    .hero-title {
      font-size: 2.5rem;
      font-weight: 600;
      letter-spacing: -0.025em;
      color: white;
      margin: 0 0 1.5rem 0;
      line-height: 1.1;
    }

    @media (min-width: 640px) {
      .hero-title {
        font-size: 3.5rem;
        margin-bottom: 2rem;
      }
    }

    @media (min-width: 1024px) {
      .hero-title {
        font-size: 4rem;
      }
    }

    .hero-description {
      font-size: 1rem;
      font-weight: 500;
      color: #9ca3af;
      margin: 0 0 2rem 0;
      line-height: 1.6;
      max-width: 32rem;
      margin-left: auto;
      margin-right: auto;
    }

    @media (min-width: 640px) {
      .hero-description {
        font-size: 1.125rem;
        margin-bottom: 2.5rem;
      }
    }

    @media (min-width: 1024px) {
      .hero-description {
        font-size: 1.25rem;
        line-height: 1.7;
      }
    }

    .hero-buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    @media (min-width: 640px) {
      .hero-buttons {
        flex-direction: row;
        justify-content: center;
        gap: 1.5rem;
      }
    }

    .btn {
      font-size: 0.875rem;
      font-weight: 600;
      text-decoration: none;
      border-radius: 0.375rem;
      padding: 0.75rem 1.5rem;
      transition: all 0.2s ease;
      border: none;
      cursor: pointer;
      white-space: nowrap;
      min-width: 140px;
    }

    @media (min-width: 640px) {
      .btn {
        padding: 0.875rem 2rem;
        font-size: 1rem;
      }
    }

    .btn-primary {
      background-color: #6366f1;
      color: white;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }

    .btn-primary:hover {
      background-color: #4f46e5;
      transform: translateY(-1px);
    }

    .btn-primary:focus-visible {
      outline: 2px solid #6366f1;
      outline-offset: 2px;
    }

    .btn-secondary {
      color: white;
      background: none;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .btn-secondary:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.3);
    }

    .hero-background-bottom {
      position: absolute;
      bottom: -5rem;
      left: 0;
      right: 0;
      z-index: -10;
      transform: translateZ(0);
      overflow: hidden;
      filter: blur(24px);
    }

    @media (min-width: 640px) {
      .hero-background-bottom {
        bottom: -10rem;
      }
    }

    .hero-gradient-bottom {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 36rem;
      aspect-ratio: 1155/678;
      background: linear-gradient(to top right, #6366f1, #8b5cf6);
      opacity: 0.3;
      clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);
    }

    @media (min-width: 640px) {
      .hero-gradient-bottom {
        max-width: 48rem;
      }
    }
  `]
})
export class HeroComponent {
  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
