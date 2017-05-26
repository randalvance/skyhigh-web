import { Action } from '@ngrx/store';
import { EnrollmentActions } from './enrollment.actions';
import { Student } from "../../students/student";

export interface EnrollmentState {
  student: Student;
}

const initialState: EnrollmentState = {
  student: new Student()
};

export function enrollmentReducer(state = initialState, action: Action): EnrollmentState {
  switch (action.type) {
    default:
      return state;
  }
}
