import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ResourceServiceBase } from '../shared/services';
import { Subject } from './subject';
import { Observable, ObservableInput } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Injectable()
export class SubjectsService extends ResourceServiceBase<Subject> {
  constructor(http: Http) {
    super(http, 'subjects');
  }

  // Mock
  public getAll(): Observable<Subject[]> {
    let subjects: Subject[] = [
      {
        subjectID: 1,
        name: 'Math',
        description: 'Test your base intelligence.'
      }
    ];

    return Observable.of<Subject[]>(subjects);
  }
}
