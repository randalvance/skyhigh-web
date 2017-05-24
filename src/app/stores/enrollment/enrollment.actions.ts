import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Student } from '../../students';

import { ActionCreatorFactory } from 'ngrx-action-creator-factory';

@Injectable()
export class EnrollmentActions {
  static ADD_STUDENT = '[Enrollment] ADD_STUDENT';
  static UPDATE_STUDENT = '[Enrollment] UPDATE_STUDENT';

  addStudent = (student: Student): Action => {
    return {
      type: EnrollmentActions.ADD_STUDENT,
      payload: student
    }
  };

  //updateStudent = ActionCreatorFactory.create(EnrollmentActions.UPDATE_STUDENT);
}