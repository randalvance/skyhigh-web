import { Component, EventEmitter, Input, OnInit, Output }  from '@angular/core';
import { animate, trigger, transition, state, style } from '@angular/animations';
import { SidebarItem } from '../shared/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: [ 'sidebar.component.scss' ],
  animations: [
    trigger('sidebar', [
      state('opened', style({
      })),
      state('closed', style({
        transform: 'translate(-300px)'
      })),
      transition('opened => closed', animate('300ms ease-in')),
      transition('closed => opened', animate('300ms ease-in'))
    ])
  ]
})
export class SidebarComponent implements OnInit {

  @Output() itemChanged: EventEmitter<SidebarItem> = new EventEmitter<SidebarItem>();
  @Output() childItemChanged: EventEmitter<SidebarItem> = new EventEmitter<SidebarItem>();
  @Input() selectedSidebarItemRoute: string;
  @Input() sidebarItems: SidebarItem[];
  @Input() sideBarState: string;

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
