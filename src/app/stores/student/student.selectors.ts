import { createSelector } from 'reselect';
import { StudentState } from './student.reducer';
import { AppState } from '../reducers';

export const getStudentState = (state: AppState) => {
  return state.student;
}
export const getStudents = createSelector(getStudentState, state => state.students);
