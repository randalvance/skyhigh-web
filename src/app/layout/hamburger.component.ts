import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
    selector: 'app-hamburger',
    templateUrl: 'hamburger.component.html',
    styleUrls: [ 'hamburger.component.scss' ],
    animations: [
        trigger('topBar', [
            state('closed', style({
                transform: 'rotate(0deg)'
            })),
            state('opened', style({
                transform: 'rotate(-40deg) translate(-4px, 2px)',
                width: '15px'
            })),
            transition('opened => closed', animate('300ms ease-in')),
            transition('closed => opened', animate('300ms ease-in'))
        ]),
        trigger('bottomBar', [
            state('closed', style({
                transform: 'rotate(0deg)'
            })),
            state('opened', style({
                transform: 'rotate(40deg) translate(-3px, -2px)',
                width: '15px'
            })),
            transition('opened => closed', animate('300ms ease-in')),
            transition('closed => opened', animate('300ms ease-in'))
        ])
    ]
})
export class HamburgerComponent {

    @Output() opened: EventEmitter<any> = new EventEmitter();
    @Output() closed: EventEmitter<any> = new EventEmitter();

    @Input() state: string;

    toggleMenu() {
        if (this.state == 'opened') {
            this.state = 'closed';
            this.closed.emit();
        } else {
            this.state = 'opened';
            this.opened.emit();
        }
    }
}