import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { NavigationState } from '../layout.reducer';
import { CloseSidenavAction, OpenSidenavAction } from '../layout.actions';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
   state: NavigationState;

    constructor(private store: Store<NavigationState>) {
      // TODO: Research about selectors and reselect
      this.store.select("layout").subscribe((state: NavigationState) => {
        this.state = state;
      });
    }

    ngOnInit() {
    }

    openSidenav() {
      this.store.dispatch(new OpenSidenavAction());
    }

    closeSidenav() {
      this.store.dispatch(new CloseSidenavAction());
    }
}
