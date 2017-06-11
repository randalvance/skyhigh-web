import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { ActionCreatorFactory } from 'ngrx-action-creator-factory';

import { SidebarItem } from '../../shared/models';

@Injectable()
export class LayoutActions {
  static SELECT_SIDEBARITEM = '[Layout] SELECT_SIDEBARITEM';
  static CHANGE_TITLE = '[Layout] CHANGE_TITLE';
  static OPEN_SIDEBAR = '[Layout] OPEN_SIDEBER';
  static CLOSE_SIDEBAR = '[Layout] CLOSE_SIDEBAR';

  selectSidebarItem = (sidebarItem: SidebarItem) : Action => {
    return {
      type: LayoutActions.SELECT_SIDEBARITEM,
      payload: sidebarItem
    };
  };

  changeTitle = (title: string) : Action => {
    return {
      type: LayoutActions.CHANGE_TITLE,
      payload: title
    };
  };

  openSidebar = ActionCreatorFactory.create(LayoutActions.OPEN_SIDEBAR);
  closeSidebar = ActionCreatorFactory.create(LayoutActions.CLOSE_SIDEBAR);
}
