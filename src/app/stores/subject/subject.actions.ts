import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Subject } from '../../subjects';

import { ActionCreatorFactory } from 'ngrx-action-creator-factory';

@Injectable()
export class SubjectActions {
  static ADD_SUBJECT = '[Subject] ADD_SUBJECT ';
  static REMOVE_SUBJECT = '[Subject] REMOVE_SUBJECT';

  addSubject = (subject: Subject): Action => {
    return {
      type: SubjectActions.ADD_SUBJECT,
      payload: subject
    };
  };

  removeSubject = (subjectId: number): Action => {
    return {
      type: SubjectActions.REMOVE_SUBJECT,
      payload: subjectId
    };
  };
}
