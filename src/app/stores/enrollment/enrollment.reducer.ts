import { Action } from '@ngrx/store';
import { EnrollmentActions } from './enrollment.actions';
import { Student } from '../../students';
import { Subject } from '../../subjects';

export interface EnrollmentState {
  student: Student;
  selectedSubjects: Subject[]
}

const initialState: EnrollmentState = {
  student: null,
  selectedSubjects: []
};

export function enrollmentReducer(state = initialState, action: Action): EnrollmentState {
  switch (action.type) {
    case EnrollmentActions.SET_STUDENT_TO_ENROLL:
      return Object.assign({}, state, { student: action.payload });
    case EnrollmentActions.SELECT_SUBJECT:
      return Object.assign({}, state, { selectedSubjects: state.selectedSubjects.concat([action.payload]) });
    case EnrollmentActions.REMOVE_SUBJECT:
      return Object.assign({}, state, { selectedSubjects: state.selectedSubjects.filter(x => x.subjectId !== action.payload.subjectId) });
    default:
      return state;
  }
}

