import { Action } from '@ngrx/store';
import { LayoutActions } from './layout.actions';

export interface LayoutState {
  showSidenav: boolean;
}

const initialState: LayoutState = {
  showSidenav: true
};

export function layoutReducer(state = initialState, action: Action): LayoutState {
  switch (action.type) {
    case LayoutActions.OPEN_SIDENAV:
      return Object.assign({}, state, { showSidenav: true });
    case LayoutActions.CLOSE_SIDENAV:
      return Object.assign({}, state, { showSidenav: false });
    default:
      return state;
  }
}
