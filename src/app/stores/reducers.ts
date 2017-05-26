import { environment } from '../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { routerReducer, RouterState} from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import { LayoutState, LayoutActions, layoutReducer } from './layout';
import { SiteState, SiteActions, siteReducer } from './site';
import { EnrollmentState, EnrollmentActions, enrollmentReducer } from './enrollment';
import { StudentState, StudentActions, studentReducer } from './student';
import { SubjectState, SubjectActions, subjectReducer } from './subject';

export interface AppState {
  router: RouterState
  layout: LayoutState,
  site: SiteState,
  enrollment: EnrollmentState,
  student: StudentState,
  subject: SubjectState
}

// It is important that the key of reducer here matches the key of store in the AppState for each reducer
export const AppReducers = {
  router: routerReducer,
  layout: layoutReducer,
  site: siteReducer,
  enrollment: enrollmentReducer,
  student: studentReducer,
  subject: subjectReducer
};

export const AppActions = [
  LayoutActions,
  SiteActions,
  EnrollmentActions,
  StudentActions,
  SubjectActions
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
