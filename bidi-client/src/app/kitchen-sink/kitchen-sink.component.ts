import { Component } from '@angular/core';

@Component({
  selector: 'app-kitchen-sink',
  standalone: true,
  template: `
    <div class="hero-container">
      <header class="hero-header">
        <nav class="hero-nav" aria-label="Global">
          <div class="nav-left">
            <a href="#" class="logo-link">
              <span class="sr-only">Your Company</span>
              <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="" class="logo-img" />
            </a>
          </div>
          <div class="nav-mobile">
            <button type="button" class="mobile-menu-btn">
              <span class="sr-only">Open main menu</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="menu-icon">
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div class="nav-desktop">
            <a href="#" class="nav-link">Product</a>
            <a href="#" class="nav-link">Features</a>
            <a href="#" class="nav-link">Marketplace</a>
            <a href="#" class="nav-link">Company</a>
          </div>
          <div class="nav-right">
            <a href="#" class="nav-link">Log in <span aria-hidden="true">&rarr;</span></a>
          </div>
        </nav>
      </header>

      <div class="hero-content">
        <div class="hero-background-top" aria-hidden="true">
          <div class="hero-gradient-top"></div>
        </div>
        <div class="hero-main">
          <div class="hero-announcement">
            <div class="announcement-badge">
              Announcing our next round of funding. <a href="#" class="announcement-link"><span aria-hidden="true" class="link-overlay"></span>Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <div class="hero-text">
            <h1 class="hero-title">Data to enrich your online business</h1>
            <p class="hero-description">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
            <div class="hero-buttons">
              <a href="#" class="btn btn-primary">Get started</a>
              <a href="#" class="btn btn-secondary">Learn more <span aria-hidden="true">→</span></a>
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
    .hero-container {
      background-color: #111827;
      position: relative;
    }

    .hero-header {
      position: absolute;
      inset: 0;
      top: 0;
      z-index: 50;
    }

    .hero-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem;
    }

    @media (min-width: 1024px) {
      .hero-nav {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }

    .nav-left {
      display: flex;
    }

    @media (min-width: 1024px) {
      .nav-left {
        flex: 1;
      }
    }

    .logo-link {
      margin: -0.375rem;
      padding: 0.375rem;
    }

    .logo-img {
      height: 2rem;
      width: auto;
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
        gap: 3rem;
      }
    }

    .nav-link {
      font-size: 0.875rem;
      line-height: 1.5rem;
      font-weight: 600;
      color: white;
      text-decoration: none;
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

    .hero-content {
      position: relative;
      isolation: isolate;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: 3.5rem;
    }

    @media (min-width: 1024px) {
      .hero-content {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }

    .hero-background-top {
      position: absolute;
      inset: 0;
      left: 0;
      right: 0;
      top: -10rem;
      z-index: -10;
      transform: translateZ(0);
      overflow: hidden;
      filter: blur(24px);
    }

    @media (min-width: 640px) {
      .hero-background-top {
        top: -20rem;
      }
    }

    .hero-gradient-top {
      position: relative;
      left: calc(50% - 11rem);
      aspect-ratio: 1155/678;
      width: 36.125rem;
      transform: translateX(-50%) rotate(30deg);
      background: linear-gradient(to top right, #ff80b5, #9089fc);
      opacity: 0.3;
      clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);
    }

    @media (min-width: 640px) {
      .hero-gradient-top {
        left: calc(50% - 30rem);
        width: 72.1875rem;
      }
    }

    .hero-main {
      margin: 0 auto;
      max-width: 42rem;
      padding: 8rem 0;
    }

    @media (min-width: 640px) {
      .hero-main {
        padding: 12rem 0;
      }
    }

    @media (min-width: 1024px) {
      .hero-main {
        padding: 14rem 0;
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
      font-size: 3rem;
      font-weight: 600;
      letter-spacing: -0.025em;
      text-wrap: balance;
      color: white;
    }

    @media (min-width: 640px) {
      .hero-title {
        font-size: 4.5rem;
      }
    }

    .hero-description {
      margin-top: 2rem;
      font-size: 1.125rem;
      font-weight: 500;
      text-wrap: pretty;
      color: #9ca3af;
    }

    @media (min-width: 640px) {
      .hero-description {
        font-size: 1.25rem;
        line-height: 2rem;
      }
    }

    .hero-buttons {
      margin-top: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
    }

    .btn {
      font-size: 0.875rem;
      font-weight: 600;
      text-decoration: none;
      border-radius: 0.375rem;
      padding: 0.625rem 1rem;
      transition: all 0.2s ease;
    }

    .btn-primary {
      background-color: #6366f1;
      color: white;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }

    .btn-primary:hover {
      background-color: #4f46e5;
    }

    .btn-primary:focus-visible {
      outline: 2px solid #6366f1;
      outline-offset: 2px;
    }

    .btn-secondary {
      color: white;
    }

    .btn-secondary:hover {
      opacity: 0.8;
    }

    .hero-background-bottom {
      position: absolute;
      inset: 0;
      left: 0;
      right: 0;
      top: calc(100% - 13rem);
      z-index: -10;
      transform: translateZ(0);
      overflow: hidden;
      filter: blur(24px);
    }

    @media (min-width: 640px) {
      .hero-background-bottom {
        top: calc(100% - 30rem);
      }
    }

    .hero-gradient-bottom {
      position: relative;
      left: calc(50% + 3rem);
      aspect-ratio: 1155/678;
      width: 36.125rem;
      transform: translateX(-50%);
      background: linear-gradient(to top right, #ff80b5, #9089fc);
      opacity: 0.3;
      clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);
    }

    @media (min-width: 640px) {
      .hero-gradient-bottom {
        left: calc(50% + 36rem);
        width: 72.1875rem;
      }
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
export class KitchenSinkComponent {}
