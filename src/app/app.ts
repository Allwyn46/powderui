import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarProvider } from './sidebar/sidebar-provider/sidebar-provider';
import { Sidebar } from './sidebar/sidebar/sidebar';
import { SidebarHeader } from './sidebar/sidebar-header/sidebar-header';
import { SidebarContent } from './sidebar/sidebar-content/sidebar-content';
import { SidebarGroup } from './sidebar/sidebar-group/sidebar-group';
import { SidebarFooter } from './sidebar/sidebar-footer/sidebar-footer';
import { SidebarTrigger } from './sidebar/sidebar-trigger/sidebar-trigger';
import { SidebarState } from './sidebar/sidebar-state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarProvider,
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarFooter,
    SidebarTrigger,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
