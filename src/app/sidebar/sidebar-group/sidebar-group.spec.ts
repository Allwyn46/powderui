import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarGroup } from './sidebar-group';

describe('SidebarGroup', () => {
  let component: SidebarGroup;
  let fixture: ComponentFixture<SidebarGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
