import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have sidebarOpen property initialized to false', () => {
    expect(component.sidebarOpen).toBe(false);
  });

  it('should toggle sidebar when toggleSidebar is called', () => {
    expect(component.sidebarOpen).toBe(false);
    
    component.toggleSidebar();
    expect(component.sidebarOpen).toBe(true);
    
    component.toggleSidebar();
    expect(component.sidebarOpen).toBe(false);
  });

  it('should close sidebar when closeSidebar is called', () => {
    component.sidebarOpen = true;
    expect(component.sidebarOpen).toBe(true);
    
    component.closeSidebar();
    expect(component.sidebarOpen).toBe(false);
  });

  it('should return true for hero route when URL is root', () => {
    spyOn(component['router'], 'url').and.returnValue('/');
    expect(component.isHeroRoute()).toBe(true);
  });

  it('should return false for hero route when URL is not root', () => {
    spyOn(component['router'], 'url').and.returnValue('/dashboard');
    expect(component.isHeroRoute()).toBe(false);
  });
});
