import { Component } from '@angular/core';
import { SidebarState } from '../sidebar-state';

@Component({
  selector: 'app-sidebar-provider',
  standalone: true,
  imports: [],
  template: `<ng-content />`,
  styleUrl: './sidebar-provider.css',
  providers: [SidebarState],
})
export class SidebarProvider {}
