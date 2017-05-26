import { createSelector } from 'reselect';
import { SubjectState } from './subject.reducer';
import { AppState } from '../reducers';

export const getSubjectState = (state: AppState) => {
  return state.subject;
}
export const getSubjects = createSelector(getSubjectState, state => state.subjects);
