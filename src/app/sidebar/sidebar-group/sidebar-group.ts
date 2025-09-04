import { NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { SidebarState } from '../sidebar-state';

@Component({
  selector: 'app-sidebar-group',
  standalone: true,
  imports: [NgIf],
  templateUrl: './sidebar-group.html',
  styleUrl: './sidebar-group.css',
})
export class SidebarGroup {
  @Input() title?: string;
  readonly state = inject(SidebarState);
}
