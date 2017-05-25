import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { createSelector } from 'reselect';
import { LayoutState } from './layout.reducer';
import { AppState } from '../reducers';

export const getLayoutState = (state: AppState) => {
  return state.layout;
}
export const getSelectedSidebarItemRoute = createSelector(getLayoutState, state => state.selectedSidebarItemRoute);
