import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar" aria-label="Global">
      <div class="nav-left">
        <a href="#" class="logo-link">
          <span class="sr-only">Tasker</span>
          <div class="logo-text">Tasker</div>
        </a>
      </div>
      
      <div class="nav-mobile">
        <button type="button" class="mobile-menu-btn" (click)="toggleMobileMenu()">
          <span class="sr-only">Open main menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="menu-icon">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      
      <div class="nav-desktop">
        <a href="#" class="nav-link">Features</a>
        <a href="#" class="nav-link">Projects</a>
        <a href="#" class="nav-link">Analytics</a>
        <a href="#" class="nav-link">Team</a>
      </div>
      
      <div class="nav-right">
        <button (click)="goToDashboard()" class="nav-link">Sign in <span aria-hidden="true">&rarr;</span></button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" [class.open]="mobileMenuOpen" *ngIf="mobileMenuOpen">
      <div class="mobile-menu-content">
        <div class="mobile-menu-header">
          <div class="logo-text">Tasker</div>
          <button class="mobile-menu-close" (click)="toggleMobileMenu()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="close-icon">
              <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <div class="mobile-menu-links">
          <a href="#" class="mobile-nav-link">Features</a>
          <a href="#" class="mobile-nav-link">Projects</a>
          <a href="#" class="mobile-nav-link">Analytics</a>
          <a href="#" class="mobile-nav-link">Team</a>
          <button (click)="goToDashboard()" class="mobile-nav-link mobile-signin">Sign in <span aria-hidden="true">&rarr;</span></button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      max-width: 100%;
      width: 100%;
    }

    @media (min-width: 640px) {
      .navbar {
        padding: 1.5rem;
      }
    }

    @media (min-width: 1024px) {
      .navbar {
        padding: 1.5rem 2rem;
      }
    }

    .nav-left {
      display: flex;
      flex-shrink: 0;
    }

    @media (min-width: 1024px) {
      .nav-left {
        flex: 1;
      }
    }

    .logo-link {
      margin: -0.375rem;
      padding: 0.375rem;
      text-decoration: none;
    }

    .logo-text {
      font-size: 1.25rem;
      font-weight: 700;
      color: white;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    @media (min-width: 640px) {
      .logo-text {
        font-size: 1.5rem;
      }
    }

    .nav-mobile {
      display: flex;
    }

    @media (min-width: 1024px) {
      .nav-mobile {
        display: none;
      }
    }

    .mobile-menu-btn {
      margin: -0.625rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.375rem;
      padding: 0.625rem;
      color: #e5e7eb;
      border: none;
      background: none;
      cursor: pointer;
    }

    .menu-icon {
      width: 1.5rem;
      height: 1.5rem;
    }

    .nav-desktop {
      display: none;
    }

    @media (min-width: 1024px) {
      .nav-desktop {
        display: flex;
        gap: 2rem;
      }
    }

    .nav-link {
      font-size: 0.875rem;
      line-height: 1.5rem;
      font-weight: 600;
      color: white;
      text-decoration: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      white-space: nowrap;
      transition: opacity 0.2s ease;
    }

    .nav-link:hover {
      opacity: 0.8;
    }

    .nav-right {
      display: none;
    }

    @media (min-width: 1024px) {
      .nav-right {
        display: flex;
        flex: 1;
        justify-content: flex-end;
      }
    }

    /* Mobile Menu */
    .mobile-menu {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 1000;
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }

    .mobile-menu.open {
      opacity: 1;
      visibility: visible;
    }

    .mobile-menu-content {
      background-color: #111827;
      width: 100%;
      max-width: 320px;
      height: 100%;
      padding: 1.5rem;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    }

    .mobile-menu.open .mobile-menu-content {
      transform: translateX(0);
    }

    .mobile-menu-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .mobile-menu-close {
      background: none;
      border: none;
      color: #e5e7eb;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 0.375rem;
    }

    .close-icon {
      width: 1.5rem;
      height: 1.5rem;
    }

    .mobile-menu-links {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .mobile-nav-link {
      display: block;
      padding: 0.75rem 1rem;
      color: white;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      border-radius: 0.375rem;
      transition: background-color 0.2s ease;
      background: none;
      border: none;
      cursor: pointer;
      text-align: left;
      width: 100%;
    }

    .mobile-nav-link:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .mobile-signin {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      font-weight: 600;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  `]
})
export class NavbarComponent {
  mobileMenuOpen = false;

  constructor(private router: Router) {}

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  goToDashboard() {
    this.mobileMenuOpen = false;
    this.router.navigate(['/dashboard']);
  }
}
