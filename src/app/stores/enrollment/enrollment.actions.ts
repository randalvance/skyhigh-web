import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Student } from '../../students';
import { Subject } from '../../subjects';

import { ActionCreatorFactory } from 'ngrx-action-creator-factory';

@Injectable()
export class EnrollmentActions {
  static SET_STUDENT_TO_ENROLL = '[Enrollment] SET_STUDENT_TO_ENROLL';
  static SELECT_SUBJECT = '[Enrollment] SELECT_SUBJECT';
  static REMOVE_SUBJECT = '[Enrollment] REMOVE_SUBJECT';

  setStudentToEnroll = (student: Student): Action => {
    return {
      type: EnrollmentActions.SET_STUDENT_TO_ENROLL,
      payload: student
    };
  };

  selectSubject = (subject: Subject): Action => {
    return {
      type: EnrollmentActions.SELECT_SUBJECT,
      payload: subject
    };
  }

  removeSubject = (subject: Subject): Action => {
    return {
      type: EnrollmentActions.REMOVE_SUBJECT,
      payload: subject
    };
  }
}
