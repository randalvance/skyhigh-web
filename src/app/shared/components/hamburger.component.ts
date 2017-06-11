import { Component } from '@angular/core';
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
            state('openned', style({
                transform: 'rotate(0deg)'
            })),
            state('closed', style({
                transform: 'rotate(-40deg) translate(-4px, 2px)',
                width: '15px'
            })),
            transition('openned => closed', animate('300ms ease-in')),
            transition('closed => openned', animate('300ms ease-in'))
        ]),
        trigger('bottomBar', [
            state('openned', style({
                transform: 'rotate(0deg)'
            })),
            state('closed', style({
                transform: 'rotate(40deg) translate(-3px, -2px)',
                width: '15px'
            })),
            transition('openned => closed', animate('300ms ease-in')),
            transition('closed => openned', animate('300ms ease-in'))
        ])
    ]
})
export class HamburgerComponent {
    state: string = 'openned';

    toggleMenu() {
        if (this.state == 'openned') {
            this.state = 'closed';
        } else {
            this.state = 'openned';
        }
    }
}