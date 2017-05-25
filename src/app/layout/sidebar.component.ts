import { Component, EventEmitter, Input, Output }  from '@angular/core';
import { EnrollmentSidebarItems } from '../enrollment/enrollment.sidebaritems';
//import { ProfessorsSidebarItems } from '../professors/professors.sidebaritems';
import { StudentsSidebarItems } from '../students/students.sidebaritems';
import { SidebarItem } from '../shared/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html'
})
export class SidebarComponent {
  @Output() private itemChanged: EventEmitter<SidebarItem> = new EventEmitter<SidebarItem>();
  @Output() private childItemChanged: EventEmitter<SidebarItem> = new EventEmitter<SidebarItem>();
  @Input() private selectedSidebarItemRoute: string;

  public sidebarItems = [
    { text: 'Dashboard', icon: 'dashboard', route: '/', displayOrder: 1, isRoot: true },
    ...EnrollmentSidebarItems,
    //...ProfessorsSidebarItems,
    ...StudentsSidebarItems
  ].sort((a, b) => a.displayOrder > b.displayOrder ? 1 : a.displayOrder < b.displayOrder ? -1 : 0);

  emitItemChanged(item: SidebarItem) {
    this.itemChanged.emit(item);
  }

  isOpen(item: SidebarItem) {
    return item.route === this.selectedSidebarItemRoute;
  }
}
