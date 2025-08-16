import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-8 lg:px-12" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="" class="h-8 w-auto" />
          </a>
        </div>
        
        <div class="flex lg:hidden">
          <button type="button" (click)="toggleMobileMenu()" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        
        <div class="hidden lg:flex lg:gap-x-8">
          <a href="#" class="text-sm font-semibold leading-6 text-white">Product</a>
          <a href="#" class="text-sm font-semibold leading-6 text-white">Features</a>
          <a href="#" class="text-sm font-semibold leading-6 text-white">Marketplace</a>
          <a href="#" class="text-sm font-semibold leading-6 text-white">Company</a>
        </div>
        
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <button (click)="goToDashboard()" class="text-sm font-semibold leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>
      
      <!-- Mobile menu -->
      <div *ngIf="mobileMenuOpen" class="lg:hidden">
        <div class="fixed inset-0 z-50"></div>
        <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="" class="h-8 w-auto" />
            </a>
            <button type="button" (click)="toggleMobileMenu()" class="-m-2.5 rounded-md p-2.5 text-gray-200">
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-white/10">
              <div class="space-y-2 py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/5">Product</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/5">Features</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/5">Marketplace</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/5">Company</a>
              </div>
              <div class="py-6">
                <button (click)="goToDashboard()" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white/5">Log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
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
export class NavbarComponent implements OnInit, OnDestroy {
  mobileMenuOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  ngOnDestroy() {}

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  goToDashboard() {
    this.mobileMenuOpen = false;
    this.router.navigate(['/dashboard']);
  }
}
