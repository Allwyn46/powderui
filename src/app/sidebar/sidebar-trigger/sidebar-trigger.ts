import { Component, inject } from '@angular/core';
import { SidebarState } from '../sidebar-state';
import { LucideAngularModule, Logs } from 'lucide-angular';

@Component({
  selector: 'app-sidebar-trigger',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './sidebar-trigger.html',
  styleUrl: './sidebar-trigger.css',
})
export class SidebarTrigger {
  readonly state = inject(SidebarState);
  readonly Menuicon = Logs;
}
