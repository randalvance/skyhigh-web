import { Action } from '@ngrx/store';
import { StudentActions } from './student.actions';
import { Student } from "../../students/student";

export interface StudentState {
  students: Student[]
}

const initialState: StudentState = {
  students: []
};

export function studentReducer(state = initialState, action: Action): StudentState {
  switch (action.type) {
    case StudentActions.REPLACE_STUDENTS:
      return Object.assign({}, state, { students: action.payload });
    default:
      return state;
  }
}
