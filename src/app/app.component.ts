import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './stores';
import { LayoutState, LayoutActions, getSelectedSidebarItemRoute } from './stores/layout'
import { getSiteName } from './stores/site';
import { ConfigurationService } from './shared/services';
import { SidebarItem } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  siteName: string;
  selectedSidebarItemRoute$: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private config: ConfigurationService,
    private layoutActions: LayoutActions) {

    this.siteName = this.config.getSiteConfig().siteName;
    this.selectedSidebarItemRoute$ = this.store.select(getSelectedSidebarItemRoute);
  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        let processedUrl = val.url.substr(1);

        //this.store.dispatch(this.layoutActions.selectSidebarItem(processedUrl))
      }
    });
  }

  changeSidebarItem(item: SidebarItem) {
    if (item && item.route && !item.children) {
      this.router.navigateByUrl(item.route);
    }
    this.store.dispatch(this.layoutActions.selectSidebarItem(item));
  }
}
