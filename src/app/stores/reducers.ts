import { environment } from '../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { LayoutState, LayoutActions, layoutReducer } from './layout';
import { SiteState, SiteActions, siteReducer } from './site';
import { EnrollmentState, EnrollmentActions, enrollmentReducer } from './enrollment';

export interface AppState {
  site: SiteState,
  layout: LayoutState,
  enrollment: EnrollmentState
}

// It is important that the key of reducer here matches the key of store in the AppState for each reducer
export const AppReducers = {
  layout: layoutReducer,
  site: siteReducer,
  enrollment: enrollmentReducer
};

export const AppActions = [
  LayoutActions,
  SiteActions,
  EnrollmentActions
]

const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(AppReducers);
const productionReducer: ActionReducer<AppState> = combineReducers(AppReducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
