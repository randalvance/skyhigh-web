import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './stores';
import { LayoutActions, getShowSidenav } from './stores/layout'
import { getSiteName } from './stores/site';
import { ConfigurationService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  siteName: string;

  constructor(
    private store: Store<AppState>,
    private config: ConfigurationService,
    private layoutActions: LayoutActions) {
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
