import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Student } from '../../students';

import { ActionCreatorFactory } from 'ngrx-action-creator-factory';

@Injectable()
export class EnrollmentActions {
  static SET_STUDENT_TO_ENROLL = "[Enrollment] SET_STUDENT_TO_ENROLL";

  setStudentToEnroll = (student: Student): Action => {
    return {
      type: EnrollmentActions.SET_STUDENT_TO_ENROLL,
      payload: student
    };
  };
}
