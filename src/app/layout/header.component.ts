import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: [ 'header.component.scss' ]
})
export class HeaderComponent {
  @Output() hamburgerOpened: EventEmitter<any> = new EventEmitter<any>();
  @Output() hamburgerClosed: EventEmitter<any> = new EventEmitter<any>();
  @Input() hamburgerState: string;

  openSideMenu() {
    this.hamburgerOpened.emit();
  }

  closeSideMenu() {
    this.hamburgerClosed.emit();
  }
}
