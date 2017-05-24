import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { ActionCreatorFactory } from 'ngrx-action-creator-factory';

@Injectable()
export class LayoutActions {
  static OPEN_SIDENAV = '[LAYOUT] OPEN_SIDENAV';
  static CLOSE_SIDENAV = '[LAYOUT] CLOSE_SIDENAV';

  openSidenav = ActionCreatorFactory.create(LayoutActions.OPEN_SIDENAV);
  closeSidenav = ActionCreatorFactory.create(LayoutActions.CLOSE_SIDENAV);
}
