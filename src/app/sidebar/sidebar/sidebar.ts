import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SidebarState } from '../sidebar-state';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  readonly state = inject(SidebarState);
}
