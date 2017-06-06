import { createSelector } from 'reselect';
import { EnrollmentState } from './enrollment.reducer';
import { AppState } from '../reducers';

export const getEnrollmentState = (state: AppState) => {
  return state.enrollment;
}
export const getEnrollmentStudent = createSelector(getEnrollmentState, state => state.student);
export const getEnrollmentSelectedSubjects = createSelector(getEnrollmentState, state => state.selectedSubjects);
