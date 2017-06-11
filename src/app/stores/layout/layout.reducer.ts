import { Action } from '@ngrx/store';
import { LayoutActions } from './layout.actions';

export interface LayoutState {
  title: string;
  selectedSidebarItemRoute: string;
  sidebarState: 'opened' | 'closed';
}

const initialState: LayoutState = {
  title: '',
  selectedSidebarItemRoute: '/',
  sidebarState: 'closed'
};

export function layoutReducer(state = initialState, action: Action): LayoutState {
  switch (action.type) {
    case LayoutActions.SELECT_SIDEBARITEM:
      return Object.assign({}, state, { selectedSidebarItemRoute : action.payload.route });
    case LayoutActions.CHANGE_TITLE:
      return Object.assign({}, state, { title: action.payload });
    case LayoutActions.OPEN_SIDEBAR:
      return Object.assign({}, state, { sidebarState: 'opened' });
    case LayoutActions.CLOSE_SIDEBAR:
      return Object.assign({}, state, { sidebarState: 'closed' });
    default:
      return state;
  }
}
