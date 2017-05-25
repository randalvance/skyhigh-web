import { Action } from '@ngrx/store';
import { LayoutActions } from './layout.actions';

export interface LayoutState {
  title: string;
  selectedSidebarItemRoute: string;
}

const initialState: LayoutState = {
  title: '',
  selectedSidebarItemRoute: '/'
};

export function layoutReducer(state = initialState, action: Action): LayoutState {
  switch (action.type) {
    case LayoutActions.SELECT_SIDEBARITEM:
      return Object.assign({}, state, { selectedSidebarItemRoute : action.payload.route });
    case LayoutActions.CHANGE_TITLE:
      return Object.assign({}, state, { title: action.payload });
    default:
      return state;
  }
}
