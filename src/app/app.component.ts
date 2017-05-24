import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './store';
import { LayoutActions, getShowSidenav } from './store/layout'
import { getSiteName } from './store/site';
import { ConfigurationService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  siteName: string;
  showSidenav$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private config: ConfigurationService,
    private layoutActions: LayoutActions) {
    this.showSidenav$ = this.store.select(getShowSidenav);
    this.siteName = this.config.getSiteConfig().siteName;
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
