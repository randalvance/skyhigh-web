import { Action } from '@ngrx/store';
import { SubjectActions } from './subject.actions';
import { Subject } from "../../subjects";

export interface SubjectState {
  subjects: Subject[]
}

const initialState: SubjectState = {
  subjects: [
    {
      subjectId: 1,
      name: 'Basics of Breathing',
      description: 'Learn how to breath by the end of this course.'
    },
    {
      subjectId: 2,
      name: 'Mastering Ninjutsu Techniques',
      description: 'Master different ninjutsu techniques.'
    }
  ]
};

export function subjectReducer(state = initialState, action: Action): SubjectState {
  switch (action.type) {
    case SubjectActions.ADD_SUBJECT:
      return Object.assign({}, state, { subjects: state.subjects.concat([ action.payload ]) });
    default:
      return state;
  };
}
