import { Injectable, effect, signal } from '@angular/core';

@Injectable()
export class SidebarState {
  // collapsed = true → icon-only; false → full width
  readonly collapsed = signal(false);

  constructor() {
    // restore from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sidebar:collapsed');
      if (saved !== null) this.collapsed.set(saved == '1');

      // persist on change
      effect(() => {
        localStorage.setItem('sidebar:collapsed', this.collapsed() ? '1' : '0');
      });
    }
  }

  toggle() {
    this.collapsed.update((v) => !v);
  }
  setCollapsed(v: boolean) {
    this.collapsed.set(v);
  }
}
