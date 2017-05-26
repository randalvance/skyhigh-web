import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ResourceServiceBase } from '../shared/services';
import { Student } from './student';
import { Observable, ObservableInput } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Injectable()
export class StudentsService extends ResourceServiceBase<Student> {
  constructor(http: Http) {
    super(http, 'students');
  }

  // Mock
  public getAll(): Observable<Student[]> {
    let students: Student[] = [
      {
        studentId: 1,
        firstName: 'John',
        lastName: 'Smith'
      }
    ];

    return Observable.of<Student[]>(students);
  }
}
