import { Component, inject } from '@angular/core';
import { SidebarState } from '../sidebar-state';

@Component({
  selector: 'app-sidebar-trigger',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-trigger.html',
  styleUrl: './sidebar-trigger.css',
})
export class SidebarTrigger {
  readonly state = inject(SidebarState);
}
