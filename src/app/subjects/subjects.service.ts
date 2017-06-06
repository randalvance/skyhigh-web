import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import { ResourceServiceBase } from '../shared/services';
import { Subject } from './subject';
import { Observable, ObservableInput } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

// Remove once we connect it to the real web service
import { AppState, SubjectActions, getSubjects } from '../stores';

@Injectable()
export class SubjectsService extends ResourceServiceBase<Subject> {
  constructor(http: Http,
    private store: Store<AppState>,
    private subjectActions: SubjectActions) {
    super(http, 'http://localhost:5001/api/', 'subjects');
  }
}
