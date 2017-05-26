import { Action } from '@ngrx/store';
import { SubjectActions } from './subject.actions';
import { Subject } from "../../subjects";

export interface SubjectState {
  subjects: Subject[]
}

const initialState: SubjectState = {
  subjects: []
};

export function subjectReducer(state = initialState, action: Action): SubjectState {
  switch (action.type) {
    case SubjectActions.ADD_SUBJECT:
      return Object.assign({}, state, { subjects: [ action.payload ] });
    default:
      return state;
  };
}
