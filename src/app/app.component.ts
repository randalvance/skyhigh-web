import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './store';
import { LayoutActions, getShowSidenav } from './store/layout'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showSidenav$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private layoutActions: LayoutActions) {
    this.showSidenav$ = this.store.select(getShowSidenav);
  }

  ngOnInit() {
  }

  openSidenav() {
    this.store.dispatch(this.layoutActions.openSidenav());
  }

  closeSidenav() {
    this.store.dispatch(this.layoutActions.closeSidenav());
  }
}
