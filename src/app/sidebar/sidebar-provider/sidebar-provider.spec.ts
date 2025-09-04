import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProvider } from './sidebar-provider';

describe('SidebarProvider', () => {
  let component: SidebarProvider;
  let fixture: ComponentFixture<SidebarProvider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarProvider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarProvider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
