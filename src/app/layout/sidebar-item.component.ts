import { Component, Input, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { SidebarItem } from "../shared/models";

@Component({
  moduleId: module.id,
  selector: "app-sidebar-item",
  templateUrl: "sidebar-item.component.html"
})
export class SidebarItemComponent implements OnInit {
  @Input() private item: SidebarItem;

  private isOpen: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  itemClicked() {

  }
}
