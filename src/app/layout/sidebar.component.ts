import { Component, EventEmitter, Input, OnInit, Output }  from '@angular/core';
import { SidebarItem } from '../shared/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  @Output() private itemChanged: EventEmitter<SidebarItem> = new EventEmitter<SidebarItem>();
  @Output() private childItemChanged: EventEmitter<SidebarItem> = new EventEmitter<SidebarItem>();
  @Input() private selectedSidebarItemRoute: string;
  @Input() private sidebarItems: SidebarItem[];

  ngOnInit(): void {
    this.sidebarItems.sort((a, b) => a.displayOrder > b.displayOrder ? 1 : a.displayOrder < b.displayOrder ? -1 : 0);
  }

  emitItemChanged(item: SidebarItem) {
    this.itemChanged.emit(item);
  }

  isOpen(item: SidebarItem) {
    return item.route === this.selectedSidebarItemRoute;
  }
}
