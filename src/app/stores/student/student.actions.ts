import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Student } from '../../students';

import { ActionCreatorFactory } from 'ngrx-action-creator-factory';

@Injectable()
export class StudentActions {
  static REPLACE_STUDENTS = '[Student] REPLACE_STUDENT';
  static ADD_STUDENT = '[Student]'
  static UPDATE_STUDENT = '[Student] UPDATE_STUDENT';

  replaceStudents = (students: Student[]): Action => {
    return {
      type: StudentActions.REPLACE_STUDENTS,
      payload: students
    };
  };

  addStudent = (student: Student): Action => {
    return {
      type: StudentActions.ADD_STUDENT,
      payload: student
    };
  };

  updateStudent = (student: Student): Action => {
    return {
      type: StudentActions.UPDATE_STUDENT,
      payload: student
    };
  };
}
