import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './stores';
import { LayoutState, LayoutActions, getSelectedSidebarItemRoute, getTitle } from './stores/layout'
import { getSiteName } from './stores/site';
import { ConfigurationService } from './shared/services';
import { SidebarItem } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  siteName: string;
  title$: Observable<string>;
  selectedSidebarItemRoute$: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private config: ConfigurationService,
    private layoutActions: LayoutActions) {

    this.siteName = this.config.getSiteConfig().siteName;
    this.selectedSidebarItemRoute$ = this.store.select(getSelectedSidebarItemRoute);
    this.title$ = this.store.select(getTitle);
  }

  ngOnInit() {

  }

  changeSidebarItem(item: SidebarItem) {
    if (item && item.route && !item.children) {
      this.router.navigateByUrl(item.route);
    }
    this.store.dispatch(this.layoutActions.selectSidebarItem(item));
    this.store.dispatch(this.layoutActions.changeTitle(item.text));
  }
}
