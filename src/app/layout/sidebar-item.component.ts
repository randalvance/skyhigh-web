import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { SidebarItem } from "../shared/models";

@Component({
  moduleId: module.id,
  selector: "app-sidebar-item",
  templateUrl: "sidebar-item.component.html"
})
export class SidebarItemComponent implements OnInit {
  @Input() private item: SidebarItem;
  @Output() private itemClicked: EventEmitter<SidebarItem> = new EventEmitter<SidebarItem>();
  @Output() private childItemClicked: EventEmitter<SidebarItem> = new EventEmitter<SidebarItem>();

  @Input() private isOpen: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  emitItemClicked(item: SidebarItem) {
    this.itemClicked.emit(item);
    return false;
  }
}
