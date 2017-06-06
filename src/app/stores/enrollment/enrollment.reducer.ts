import { Action } from '@ngrx/store';
import { EnrollmentActions } from './enrollment.actions';
import { Student } from "../../students/student";

export interface EnrollmentState {
  student: Student;
}

const initialState: EnrollmentState = {
  student: null
};

export function enrollmentReducer(state = initialState, action: Action): EnrollmentState {
  switch (action.type) {
    case EnrollmentActions.SET_STUDENT_TO_ENROLL:
      return Object.assign({}, state, { student: action.payload });
    default:
      return state;
  }
}
