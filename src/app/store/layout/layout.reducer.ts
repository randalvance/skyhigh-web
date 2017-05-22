import { Action } from '@ngrx/store';
import { LayoutActions } from './layout.actions';

export interface LayoutState {
  showSidenav: boolean;
}

const initialState: LayoutState = {
  showSidenav: false
};

export function layoutReducer(state = initialState, action: Action): LayoutState {
  switch (action.type) {
    case LayoutActions.SIDENAV_OPEN:
      return Object.assign({}, state, { showSidenav: true });
    case LayoutActions.SIDENAV_CLOSE:
      return Object.assign({}, state, { showSidenav: false });
    default:
      return state;
  }
}

export const layoutRegister = {
  reducer: { layoutReducer },
  actions: LayoutActions
};

