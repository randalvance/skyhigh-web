import { createSelector } from 'reselect';
import { EnrollmentState } from './enrollment.reducer';
import { AppState } from '../reducers';
import { Enrollment } from '../../enrollment';

export const getEnrollmentState = (state: AppState) => {
  return state.enrollment;
}
export const getEnrollmentStudent = createSelector(getEnrollmentState, state => state.student);
export const getEnrollmentSelectedSubjects = createSelector(getEnrollmentState, state => state.selectedSubjects);
export const getEnrollmentToSave = createSelector(getEnrollmentState, state => <Enrollment>{ student: state.student, subjects: state.selectedSubjects });