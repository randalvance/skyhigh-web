import { Action } from '@ngrx/store';
import { LayoutActions } from './layout.actions';

export interface LayoutState {
  selectedSidebarItemRoute: string;
}

const initialState: LayoutState = {
  selectedSidebarItemRoute: '/'
};

export function layoutReducer(state = initialState, action: Action): LayoutState {
  switch (action.type) {
    case LayoutActions.SELECT_SIDEBARITEM:
      return Object.assign({}, state, { selectedSidebarItemRoute : action.payload.route });
    default:
      return state;
  }
}
