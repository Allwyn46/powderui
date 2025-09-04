import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTrigger } from './sidebar-trigger';

describe('SidebarTrigger', () => {
  let component: SidebarTrigger;
  let fixture: ComponentFixture<SidebarTrigger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarTrigger]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarTrigger);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
