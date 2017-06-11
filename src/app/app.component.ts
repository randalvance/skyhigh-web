import { Component, OnInit } from '@angular/core';
import { animate, trigger, transition, state, style } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './stores';
import { LayoutState, LayoutActions, getSelectedSidebarItemRoute, getTitle, getSideBarState } from './stores/layout'
import { getSiteName } from './stores/site';
import { ConfigurationService } from './shared/services';
import { SidebarItem } from './shared/models';

import { EnrollmentSidebarItems } from './enrollment';
import { ProfessorsSidebarItems } from './professors';
import { StudentsSidebarItems } from './students';
import { SubjectsSidebarItems } from './subjects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('sidebar', [
      state('opened', style({
        
      })),
      state('closed', style({
        'margin-left': '0'
      })),
      transition('opened => closed', animate('300ms ease-in')),
      transition('closed => opened', animate('300ms ease-in'))
    ])
  ]
})
export class AppComponent implements OnInit {
  siteName: string;
  title$: Observable<string>;
  sideBarState$: Observable<string>;
  selectedSidebarItemRoute$: Observable<string>;
  sidebarItems: SidebarItem[] = [ ...EnrollmentSidebarItems, ...ProfessorsSidebarItems, ...StudentsSidebarItems, ...SubjectsSidebarItems ];

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private config: ConfigurationService,
    private layoutActions: LayoutActions) {

    this.siteName = this.config.getSiteConfig().siteName;
    this.selectedSidebarItemRoute$ = this.store.select(getSelectedSidebarItemRoute);
    this.title$ = this.store.select(getTitle);
    this.sideBarState$ = this.store.select(getSideBarState);
  }

  ngOnInit() {

  }

  changeSidebarItem(item: SidebarItem) {
    if (item && item.route && !item.children) {
      this.router.navigateByUrl(item.route);
    }
    this.store.dispatch(this.layoutActions.selectSidebarItem(item));
  }

  openSideBar() {
    this.store.dispatch(this.layoutActions.openSidebar());
  }

  closeSideBar() {
    this.store.dispatch(this.layoutActions.closeSidebar());
  }
}
