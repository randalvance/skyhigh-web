import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import { ResourceServiceBase } from '../shared/services';
import { Subject } from './subject';
import { Observable, ObservableInput } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Injectable()
export class SubjectsService extends ResourceServiceBase<Subject> {
  constructor(http: Http) {
    super(http, 'http://localhost:8182/api/', 'subjects');
  }
}
