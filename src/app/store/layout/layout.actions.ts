import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { ActionCreatorFactory } from 'ngrx-action-creator-factory';

@Injectable()
export class LayoutActions {
  static SIDENAV_OPEN = '[LAYOUT] SIDENAV_OPEN';
  static SIDENAV_CLOSE = '[LAYOUT] SIDENAV_CLOSE';

  openSidenav = ActionCreatorFactory.create(LayoutActions.SIDENAV_OPEN);
  closeSidenav = ActionCreatorFactory.create(LayoutActions.SIDENAV_CLOSE);
}
