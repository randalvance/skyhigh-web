import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SidebarItem } from '../shared/models';

@Component({
  moduleId: module.id,
  selector: 'app-sidebar-item',
  templateUrl: 'sidebar-item.component.html'
})
export class SidebarItemComponent implements OnInit {
  @Input() item: SidebarItem;
  @Output() itemClicked: EventEmitter<SidebarItem> = new EventEmitter<SidebarItem>();
  @Output() childItemClicked: EventEmitter<SidebarItem> = new EventEmitter<SidebarItem>();

  @Input() isOpen: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  emitItemClicked(item: SidebarItem) {
    this.itemClicked.emit(item);
    return false;
  }
}
