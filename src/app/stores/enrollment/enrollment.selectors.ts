import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { createSelector } from 'reselect';
import { EnrollmentState } from './enrollment.reducer';
import { AppState } from '../reducers';

export const getEnrollmentState = (state: AppState) => {
  return state.enrollment;
}
export const getStudent = createSelector(getEnrollmentState, state => state.student);
